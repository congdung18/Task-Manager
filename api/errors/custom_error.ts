export abstract class CustomAPIError extends Error {
  public readonly
  statusCode: number
  errorCode: string
  timestamp: string

  constructor(message: string, statusCode: number, errorCode: string) {
    super(message)
    this.name = new.target.name;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.timestamp = new Date().toISOString();

    Object.setPrototypeOf(this, new.target.prototype);
  }
}