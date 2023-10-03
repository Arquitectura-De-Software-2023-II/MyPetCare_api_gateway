export enum GraphqlStatus {
  ERROR = 'error',
  OK = 'ok',
  PENDING = 'pending'
}
interface GraphqlResponse {
  errors?: any[]
  data?: any
}
export interface GraphqlhandlerResponse {
  status: GraphqlStatus
  res?: GraphqlResponse
}
