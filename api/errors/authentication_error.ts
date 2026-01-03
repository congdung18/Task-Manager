import {CustomAPIError} from "./custom_error"

export abstract class AuthError extends CustomAPIError {
  public readonly authToken: string | null

  constructor(message: string, statusCode: number, errorCode: string, authToken?: string | null) {
    super(message, statusCode, errorCode)
    this.authToken = authToken ?? null

    Object.setPrototypeOf(this, new.target.prototype)
  }
}

function createAuthError(
    message: string,
    statusCode: number,
    errorCode: string
) {
    return class extends AuthError {
        constructor(authToken?: string | null) {
            super(message, statusCode, errorCode, authToken);
        }
    };
}

export const InvalidCredentials = createAuthError(
  "Invalid personal information",
  401,
  "AUTH_INVALID_CREDENTIALS"
)

export const MissingToken = createAuthError(
  "No authentication token provided",
  401,
  "AUTH_TOKEN_MISSING"
)

export const ExpiredToken = createAuthError(
  'Authentication token expired',
  401,
  "AUTH_TOKEN_EXPIRED"
)

export const InvalidToken = createAuthError(
  'Authentication token is not eligible',
  401,
  "AUTH_TOKEN_INVALID"
)

export const AccountDeactivated = createAuthError(
  'Account is deactivated',
  403,
  "AUTH_ACCOUNT_DEACTIVATED"
)

export const Forbidden = createAuthError(
  'Forbidden route',
  403,
  "AUTH_ROUTE_FORBIDDEN"
)