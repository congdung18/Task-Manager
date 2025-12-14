import CustomAPIError from "./custom_error"

export abstract class AuthErrors extends CustomAPIError {
  public readonly authToken: string | null

  constructor(message: string, statusCode: number, errorCode: string, authToken?: string | null) {
    super(message, statusCode, errorCode)
    this.authToken = authToken ?? null
    Object.setPrototypeOf(this, new.target.prototype) // đảm bảo instanceof
  }
}

export class InvalidCredentials extends AuthErrors {
  constructor(message: string = 'Invalid username or password', authToken?: string | null) {
    super(message, 401, "AUTH_INVALID_CREDENTIALS", authToken)
    this.name = "InvalidCredentials"
  }
}

export class MissingToken extends AuthErrors {
  constructor(message: string = 'No authentication token provided', authToken?: string | null) {
    super(message, 401, "AUTH_TOKEN_MISSING", authToken)
    this.name = "MissingToken"
  }
}

export class ExpiredToken extends AuthErrors {
  constructor(message: string = 'Authentication token expired', authToken?: string | null) {
    super(message, 401, "AUTH_TOKEN_EXPIRED", authToken)
    this.name = "ExpiredToken"
  }
}

export class InvalidToken extends AuthErrors {
  constructor(message: string = 'Authentication token is not eligible', authToken?: string | null) {
    super(message, 401, "AUTH_TOKEN_INVALID", authToken)
    this.name = "InvalidToken"
  }
}

export class AccountDeactivated extends AuthErrors {
  constructor(message: string = 'Account is deactivated', authToken?: string | null) {
    super(message, 403, "AUTH_ACCOUNT_DEACTIVATED", authToken)
    this.name = "AccountDeactivated"
  }
}

export class Forbidden extends AuthErrors {
  constructor(message: string = 'Forbidden route', authToken?: string | null) {
    super(message, 403, "AUTH_ROUTE_FORBIDDEN", authToken)
    this.name = "Forbidden"
  }
}