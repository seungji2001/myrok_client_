export class HTTPError extends Error {
  statusCode: number;
  code?: number;
  detail?: string;

  constructor(
    status: number,
    message?: string,
    code?: number,
    detail?: string,
  ) {
    super(message);

    this.name = 'HTTPError';
    this.statusCode = Math.floor(status / 100);
    this.code = code;
    this.detail = detail;

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}
