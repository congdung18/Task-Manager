import { body, ValidationChain } from 'express-validator'
import { createMessage } from '../interfaces/validators/validation_message'

export const requestBody: ValidationChain[] = [
    body("expiry_date").isISO8601().withMessage(createMessage('Invalid expiry date type'))
                       .custom((value) => (new Date(value) >= new Date()))
                       .withMessage(createMessage("Expiry date must be in the future"))
]