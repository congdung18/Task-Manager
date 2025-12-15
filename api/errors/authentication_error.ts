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
    name: string,
    defaultMessage: string,
    statusCode: number,
    errorCode: string
) {
    return class extends AuthError {
        constructor(message: string = defaultMessage, userID?: string | null) {
            super(message, statusCode, errorCode, userID);
            this.name = name;
        }
    };
}

export const InvalidCredentials = createAuthError(
  "InvalidCredentials",
  "Invalid username or password",
  401,
  "AUTH_INVALID_CREDENTIALS"
)

export const MissingToken = createAuthError(
  "MissingToken",
  "No authentication token provided",
  401,
  "AUTH_TOKEN_MISSING"
)

export const ExpiredToken = createAuthError(
  "ExpiredToken",
  'Authentication token expired',
  401,
  "AUTH_TOKEN_EXPIRED"
)

export const InvalidToken = createAuthError(
  "InvalidToken",
  'Authentication token is not eligible',
  401,
  "AUTH_TOKEN_INVALID"
)

export const AccountDeactivated = createAuthError(
  "AccountDeactivated",
  'Account is deactivated',
  403,
  "AUTH_ACCOUNT_DEACTIVATED"
)

export const Forbidden = createAuthError(
  "Forbidden",
  'Forbidden route',
  403,
  "AUTH_ROUTE_FORBIDDEN"
)