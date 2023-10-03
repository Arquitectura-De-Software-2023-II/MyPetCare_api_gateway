/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import usersControllers from '../controllers/users.Controllers'
const router = express.Router()

// Test Route
router.get('/ping', (_req, res) => {
  res.send('pong from users')
})

// create pet
router.get('', usersControllers.readAllUsers)

export const usersRoutes: Router = router
