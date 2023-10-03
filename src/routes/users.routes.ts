/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import usersControllers from '../controllers/users.Controllers'
const router = express.Router()

// Test Route
router.get('/ping', (_req, res) => {
  res.send('pong from users')
})

// read all users
router.get('', usersControllers.readAllUsers)

// login
router.post('/login', usersControllers.login)

export const usersRoutes: Router = router
