interface ErrorResponse{
  success: boolean,
  name: string,
  msg: string,
  code?: string,
  stack?: string
}

export const createErrResponse = (
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