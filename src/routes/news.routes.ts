/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import newsControllers from '../controllers/news.Controllers'
const router = express.Router()

// Test Route
router.get('/ping', (_req, res) => {
  res.send('pong')
})

// News Routes

// Spanish
router.get('/es', newsControllers.GetNewsEs)
// English
router.get('/en', newsControllers.GetNewsEn)

export const newsRoutes: Router = router
