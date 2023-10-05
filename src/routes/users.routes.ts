/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import usersControllers from '../controllers/users.Controllers'
import AuthenticationMiddlewares from '../middlewares/authentication.middleware'
const router = express.Router()

// Test Route
router.get('/ping', (_req, res) => {
  res.send('pong from users')
})

// login
router.post('/login', usersControllers.login)

// register
router.post('/register', usersControllers.register)

// read all users
router.get('/getallusers', AuthenticationMiddlewares.getUserData, usersControllers.readAllUsers)

// get a user
router.get('/getuser', AuthenticationMiddlewares.getUserData, usersControllers.readUser)

// delete a user
router.delete('/deleteuser', usersControllers.deleteUser)

// update a user
router.put('/putuser', usersControllers.updateUser)

export const usersRoutes: Router = router
