import { Request, Response, NextFunction } from 'express'
// import msRoutes from '../config/msRoutes'
import getAllPetsService from '../services/clinicHistory/getAllPets.service'

class ClinicHistoryController {
  // private static readonly apiRoute = msRoutes.clinicHistory_ms

  // basic requests
  /*
  public async createPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }

  public async updateInfoPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }
  */
  public async getAllPets (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const pets = await getAllPetsService.getAllPets()
    res.status(pets.status).json(pets.answer)
  }
  /*
  public async getPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
  }

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
