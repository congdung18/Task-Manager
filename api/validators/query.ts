import { query, ValidationChain } from 'express-validator';

export const validationPagination: ValidationChain[] = [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1, max: 100 })
];