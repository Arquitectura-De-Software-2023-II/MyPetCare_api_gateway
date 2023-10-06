/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import calendarController from '../controllers/calendar.Controllers'
const router = express.Router()
// Test Route
router.get('/ping/', (_req, res) => {
  res.send('pong from calendar')
})
// create event
router.post('/events/', calendarController.createEvent)
// update event info
router.put('/events/:id', calendarController.updateEvent)
// get all events
router.get('/events/', calendarController.indexEvent)
// get event by id
router.get('/events/:id', calendarController.showSingleEvent)
// delete event by id
router.delete('/events/:id', calendarController.destroyEvent)
// create user
router.post('/users/', calendarController.createUser)
// update user info
router.put('/users/:id', calendarController.updateUser)
// delete user
router.delete('/users/:id', calendarController.destroyUser)
// get user by id
router.get('/users/:id', calendarController.showSingleUser)
// get all users
router.get('/users/', calendarController.indexUser)
// create pet
router.post('/pets/', calendarController.createPet)
// update pet info
router.put('/pets/:id', calendarController.updatePet)
// delete pet
router.delete('/pets/:id', calendarController.destroyPet)
// get pet by id
router.get('/pets/:id', calendarController.showSinglePet)
// get all pets
router.get('/pets/', calendarController.indexPet)
export const CalendarRoutes: Router = router
