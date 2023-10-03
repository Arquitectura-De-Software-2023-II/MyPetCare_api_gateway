/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
const router = express.Router()
import calendarController from '../controllers/calendar.Controllers'
// Test Route
router.get('/ping', (_req, res) => {
  res.send(`pong from calendar`)
})
// // create event
// router.post('/events', calendarController.createEvent);
// // update event info
// router.put('/events/:id', calendarController.updateEvent);
// get all events
// create pet
router.post('')
// update pet info by id
router.put('')
router.get('', calendarController.indexEvent);
// // get event by id
// router.get('/:id', calendarController.showSingleEvent);
// // delete event by id
// router.delete('/:id', calendarController.destroyEvent);
// get pet by id
router.get('/:id')
// delete pet by id
router.delete('')
export const CalendarRoutes: Router = router

