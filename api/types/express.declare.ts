import { UserPayload } from "../interfaces/auth/user_payload";
import { TaskFilter } from "../interfaces/query/pagination_interface";

declare global{
    namespace Express{
        interface Request{
            user?: UserPayload | null,
            // "filter" has naming collision with a built in method of nodejs for req.
            queryFilter?: TaskFilter,
            sort?: Record<"status" | "expiry_date", -1 | 1>,
            pagination?:{
                page: number,
                limit: number,
                skip: number
            }
        }
    }
}