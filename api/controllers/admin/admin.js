const asyncWrapper = require('../../middlewares/wrappers/async.js')
const User = require('../../models/users.js')

const higherThanAdmin = ["owner"]

const getAllUser = asyncWrapper(async (req, res, next) => {
    const filter = req.filter || {}
    const sort = req.sort || {}
    const {limit, page, skip} = req.pagination

    const user = await User.find(filter).sort(sort).skip(skip).limit(limit).lean()

    if (user.length === 0){
        return res.status(200).json({total: 0, page, limit, user: []})
    }

    const total = await User.countDocuments(filter)

    return res.status(200).json({total, page, limit, user})
})

const deleteUser = asyncWrapper(async (req, res, next) => {
    if (req.user.id === req.params.id){
        return res.status(400).json({msg: 'Cannot delete yourself'})
    }

    const user = await User.findById(req.params.id)

    if (!user){
        return res.status(404).json({msg: 'User not found'})
    }

    if (user.role === "admin"){
        return res.status(403).json({msg: 'Cannot delete admin or higher'})
    }

    await User.findByIdAndDelete(user._id)

    return res.status(200).json({user})
})

const updateUser = asyncWrapper(async (req, res, next) => {
    if (req.user.id === req.params.id){
        return res.status(400).json({msg: 'Cannot lower your role'})
    }

    if (req.body.role && higherThanAdmin.includes(req.body.role)){
        return res.status(403).json({msg: 'Cannot update a role higher than yours'})
    }

    const user = await User.findById(req.params.id)

    if (!user){
        return res.status(404).json({msg: 'User not found'})
    }

    const validUpdates = ["username", "role"]
    const update = {}
    for (let b in req.body){
        if (validUpdates.includes(b)){
            update[b] = req.body[b]
        }
    }

    const updatedUser = await User.findByIdAndUpdate(user._id, update, {
        new: true,
        runValidators: true
    })

    res.status(200).json({updatedUser})
})

module.exports = {getAllUser, deleteUser, updateUser}