import { Request, Response, NextFunction } from "express"
import { CustomAPIError } from "../../errors/custom_error"
import logger from "../../utils/logger"
import { createErrResponse } from "../../interfaces/errors/error_response"

export const errorHandling = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  const isDev = process.env.NODE_ENV === "development"

  if (err instanceof CustomAPIError) {
    logger.warn(err)

    return res.status(err.statusCode).json(
      createErrResponse(err, {
        ...(isDev && {msg: err.message}),
        code: err.errorCode,
        ...(isDev && {stack: err.stack})
      })
    )
  }

  logger.error(err)

  if (err instanceof Error){
    return res.status(500).json(createErrResponse(err, {
      ...(isDev && {msg: err.message}),
      ...(isDev && {stack: err.stack})
    }))
  }

  return res.status(500).json({
    success: false,
    name: "Error",
    msg: "Internal server error"
  })
}