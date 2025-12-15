import {body, ValidationChain} from 'express-validator'
import { createMessage } from './validation_message'

export const registerValidator: ValidationChain[] = [
    body("username").notEmpty().withMessage(createMessage("Must have a username")),
    body("email").isEmail().withMessage(createMessage("Invalid email format")),
    body("password").notEmpty().withMessage(createMessage("Must have a password"))  
        .isLength({min: 6}).withMessage(createMessage("Password must be longer than 6 characters")),
    body("role").optional().toLowerCase()
]

export const loginValidator: ValidationChain[] = [
    body("username").notEmpty().withMessage(createMessage("Must have a username")),
    body("password").notEmpty().withMessage(createMessage("Must have a password"))
        .isLength({min: 6}).withMessage(createMessage("Password must be longer than 6 characters"))
]