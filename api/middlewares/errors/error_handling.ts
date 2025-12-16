import { Request, Response, NextFunction } from "express"
import { CustomAPIError } from "../../errors/custom_error"
import logger from "../../utils/logger"

interface ErrorResponse{
  success: boolean,
  name: string,
  msg: string,
  code?: string,
  stack?: string
}

const createErrResponse = (
  err: Error,
  options?:{
    msg: string,
    code?: string,
    stack?: string
  }
): ErrorResponse => ({
  success: false,
  name: err.name,
  ...options,
})

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
