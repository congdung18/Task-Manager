abstract class CustomAPIError extends Error {
  public readonly
  statusCode: number
  errorCode: string
  timestamp: string

  constructor(message: string, statusCode: number, errorCode: string) {
    super(message)
    this.statusCode = statusCode
    this.errorCode = errorCode
    this.timestamp = new Date().toISOString()
    this.name = 'CustomAPIError'

    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export default CustomAPIError
