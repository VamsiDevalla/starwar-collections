import { BaseError } from '../shared/error';

export class AuthenticationError extends BaseError {
  constructor(errorCode: number, message: string, error?: any | undefined) {
    super('AuthenticationError', errorCode, message, error);
  }
}
