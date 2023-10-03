
export enum ResponseStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export interface Responses {
  status: ResponseStatus
  answer?: any
  message?: string
}
