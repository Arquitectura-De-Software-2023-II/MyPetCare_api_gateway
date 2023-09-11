import express, { Router } from 'express'
import { helloRoutes } from './hello.routes'
import { clinicHistoryRoutes } from './clinicHistory.routes'
import { CalendarRoutes } from './calendar.routes'
import { serviceInfoRoutes } from './serviceInfo.routes'
import { usersRoutes } from './users.routes'
const router: Router = express.Router()

// Get all routes
router.use('/api', helloRoutes) // For testing new functionalities
router.use('/api/clinicHistory', clinicHistoryRoutes)
router.use('/api/calendar', CalendarRoutes)
router.use('/api/serviceInfo', serviceInfoRoutes)
router.use('/api/users', usersRoutes)

export const applicationRouter = router
