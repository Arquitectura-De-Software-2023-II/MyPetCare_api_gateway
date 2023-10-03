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

export const CalendarRoutes: Router = router
