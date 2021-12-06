import { SwcError } from '../core/swcError';

export class AuthError extends SwcError {
  constructor(errorCode: number, message: string, error: any | undefined) {
    super('Authentication Error', errorCode, message, error);
  }
}
