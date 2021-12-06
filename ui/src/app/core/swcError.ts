export class SwcError {
  constructor(
    public errorType: string,
    public errorCode: number,
    public message: string,
    public error: any | undefined,
  ) {}
}
