import express, { Router } from 'express'
import { helloRoutes } from './hello.routes'
const router: Router = express.Router()

// Get all routes
router.use('/api', helloRoutes) // For testing new functionalities

export const applicationRouter = router
