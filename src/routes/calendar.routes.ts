/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
const router = express.Router()
import calendarController from '../controllers/calendar.Controllers'
// Test Route
router.get('/ping', (_req, res) => {
  res.send(`pong from calendar`)
})
// create event
router.post('/events', calendarController.createEvent);
// update event info
router.put('/events/:id', calendarController.updateEvent);
// get all events
router.get('', calendarController.indexEvent);
// get event by id
router.get('/:id', calendarController.showSingleEvent);
// delete event by id
router.delete('/:id', calendarController.destroyEvent);

export const CalendarRoutes: Router = router
