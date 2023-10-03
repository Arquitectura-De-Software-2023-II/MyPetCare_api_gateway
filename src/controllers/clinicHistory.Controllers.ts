import { Request, Response, NextFunction } from 'express'
// import msRoutes from '../config/msRoutes'
import getAllPetsService from '../services/clinicHistory/getAllPets.service'
import getPetService from '../services/clinicHistory/getPet.service'
import { CreatePetTypes, GetPetTypes } from '../types/clinicHistory.types'
import createPetService from '../services/clinicHistory/createPet.service'

class ClinicHistoryController {
  // private static readonly apiRoute = msRoutes.clinicHistory_ms

  // basic requests

  public async createPetInitial (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const pet = req.body
    const response = await createPetService.createPet(pet, CreatePetTypes.INITIAL)
    res.status(response.status).json(response.answer)
  }

  public async createPetInfo (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const pet = req.body
    const response = await createPetService.createPet(pet, CreatePetTypes.INFO)
    res.status(response.status).json(response.answer)
  }

  /*
  public async updateInfoPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }
  */
  public async getAllPets (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const response = await getAllPetsService.getAllPets()
    res.status(response.status).json(response.answer)
  }

  public async getPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params
    const response = await getPetService.getPet(id, GetPetTypes.GENERIC)
    res.status(response.status).json(response.answer)
  }

  public async getPetAppointments (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params
    const response = await getPetService.getPet(id, GetPetTypes.APPOINTMENTS)
    res.status(response.status).json(response.answer)
  }
  /*
  public async deletePet (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }

  // appointments requests
  public async InsertAppointment (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }

  public async getAllAppointmentsPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }

  public async getAllPetsByDoctor (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }

  // prescriptions requests
  public async AddPrescription (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }
  */
}
export default new ClinicHistoryController()
