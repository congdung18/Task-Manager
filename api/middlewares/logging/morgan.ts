import morgan from "morgan"
import { morganStream } from "../../utils/logger"

export const morganMiddleware = morgan("combined", {
  stream: morganStream
})
