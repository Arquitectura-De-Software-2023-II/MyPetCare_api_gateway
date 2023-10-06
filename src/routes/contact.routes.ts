/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import contactController from '../controllers/contact.Controllers'
const router = express.Router()

// Test Route
router.get('/ping', (_req, res) => {
  res.send('pong from contactInfo')
})

// Routes for contact_ms doctors
router.get('/doctors', contactController.getAllDoctors)
router.get('/doctors/:id', contactController.getDoctor)
router.post('/doctors', contactController.createDoctor)
router.put('/doctors/:id', contactController.editDoctor)
router.delete('/doctors/:id', contactController.deleteDoctor)

// Routes for contact_ms reviews
router.get('/reviews', contactController.getAllReviews)
router.get('/reviews/:id', contactController.getReview)
router.post('/reviews', contactController.createReview)
router.put('/reviews/:id', contactController.editReview)
router.delete('/reviews/:id', contactController.deleteReview)

// Routes for contact_ms AtendanceTime
router.get('/atendance-time', contactController.getAllAtendanceTime)
router.get('/atendance-time/:id', contactController.getAtendanceTime)
router.post('/atendance-time', contactController.createAtendanceTime)
router.put('/atendance-time/:id', contactController.editAtendanceTime)
router.delete('/atendance-time/:id', contactController.deleteAtendanceTime)

// Routes for contact_ms Services
router.get('/services', contactController.getAllServices)
router.get('/services/:id', contactController.getService)
router.post('/services', contactController.createService)
router.put('/services/:id', contactController.editService)
router.delete('/services/:id', contactController.deleteService)

export const contactRoutes: Router = router
