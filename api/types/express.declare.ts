import { UserPayload } from "../interfaces/auth/user_payload";
import { TaskFilter } from "../interfaces/query/pagination_interface";

declare global{
    namespace Express{
        interface Request{
            user?: UserPayload | null,
            filter?: TaskFilter,
            sort?: Record<"status" | "expiry_date", -1 | 1>,
            pagination?:{
                page: Number,
                limit: Number,
                skip: Number
            }
        }
    }
}