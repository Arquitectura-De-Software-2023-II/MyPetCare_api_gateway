/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
interface msRoute {
  route: string
  port: number
}
const localhost = 'http://localhost'
const env = process.env

/*
CALENDAR_MS_PORT=
CALENDAR_MS_ROUTE=
CLINIC_HISTORY_MS_PORT=
CLINIC_HISTORY_MS_ROUTE=
SERVICE_INFO_MS_PORT=
SERVICE_INFO_MS_ROUTE=
USERS_MS_PORT=
USERS_MS_ROUTE=
*/

const calendar_ms: msRoute = {
  route: env.CALENDAR_MS_ROUTE ?? localhost,
  port: parseInt(env.CALENDAR_MS_PORT ?? '3001')
}
const clinicHistory_ms: msRoute = {
  route: env.CLINIC_HISTORY_MS_ROUTE ?? localhost,
  port: parseInt(env.CLINIC_HISTORY_MS_PORT ?? '3002')
}
const serviceIndo_ms: msRoute = {
  route: env.SERVICE_INFO_MS_ROUTE ?? localhost,
  port: parseInt(env.SERVICE_INFO_MS_PORT ?? '3003')
}
const users_ms: msRoute = {
  route: env.USERS_MS_ROUTE ?? localhost,
  port: parseInt(env.USERS_MS_PORT ?? '3004')
}
const msRoutes = { calendar_ms, clinicHistory_ms, serviceIndo_ms, users_ms }
export default msRoutes
