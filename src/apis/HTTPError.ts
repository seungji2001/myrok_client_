export class HTTPError extends Error {
  statusCode: number;
  code?: string;
  detail?: string;

  constructor(
    status: number,
    message?: string,
    code?: string,
    detail?: string,
  ) {
    super(message);

    this.name = 'HTTPError';
    this.statusCode = status;
    this.code = code;
    this.detail = detail;

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}
