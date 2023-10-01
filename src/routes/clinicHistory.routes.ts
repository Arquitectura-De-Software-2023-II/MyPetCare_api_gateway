/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
const router = express.Router()

// Test Route
router.get('/ping', (_req, res) => {
  res.send(`pong from clinicHistory`)
})
// create pet
router.post('')
// update pet info by id
router.put('')
// get all pets
router.get('')
// get pet by id
router.get('')
// delete pet by id
router.delete('')

router.post('')
router.get('')
router.get('')

router.post('')

export const clinicHistoryRoutes: Router = router
