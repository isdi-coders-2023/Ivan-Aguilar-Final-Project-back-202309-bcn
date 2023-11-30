class CustomError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly privateMessage?: string,
  ) {
    super(message);
    this.privateMessage = privateMessage ?? message;
  }
}

export default CustomError;
