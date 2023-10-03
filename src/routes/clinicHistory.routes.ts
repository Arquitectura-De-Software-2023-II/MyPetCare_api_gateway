/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
import clinicHistoryControllers from '../controllers/clinicHistory.Controllers'
const router = express.Router()

// Test Route
router.get('/ping', (_req, res) => {
  res.send('pong from clinicHistory')
})
// create pet
router.post('', clinicHistoryControllers.createPetInitial)
// create pet with info
router.post('/info', clinicHistoryControllers.createPetInfo)
// update pet info by id
router.put('/:id', clinicHistoryControllers.updateInfoPet)
// get all pets
router.get('', clinicHistoryControllers.getAllPets)
// get pet by id
router.get('/:id', clinicHistoryControllers.getPet)
// get pet appointments by id
router.get('/:id/appointments', clinicHistoryControllers.getPetAppointments)
/*
TODO: get pet info - vaccines - disseases by id
// get pet info by id
router.get('/:id/appointments', clinicHistoryControllers.getPetAppointments)
// get pet vaccines by id
router.get('/:id/appointments', clinicHistoryControllers.getPetAppointments)
// get pet disseases by id
router.get('/:id/appointments', clinicHistoryControllers.getPetAppointments)
*/
// delete pet by id
router.delete('')

router.post('')
router.get('')
router.get('')

router.post('')

export const clinicHistoryRoutes: Router = router
