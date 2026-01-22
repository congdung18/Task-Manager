import { query, ValidationChain } from 'express-validator';

const VALID_STATUS_MESSAGE = ["pending", "in-progress", "done", "overdue"];
const VALID_PRIORITY_MESSAGE = ["emergency", "high", "medium", "low"];

export const validationPagination: ValidationChain[] = [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1, max: 100 }),
    query("status").optional().isIn(VALID_STATUS_MESSAGE),
    query("priority").optional().isIn(VALID_PRIORITY_MESSAGE)
];