class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went worng",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    if (statck) {
      this.stack = statck;
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
