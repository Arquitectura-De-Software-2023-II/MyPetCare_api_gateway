import { Request, Response, NextFunction } from 'express'
import readAllUsersService from '../services/users/readAllUsers.service'

class UsersController {
  // pet requests
  public async createPet (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  public async updatePet (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  public async readAllPets (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  public async readPet (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  public async deletePet (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  // user requests
  public async readUser (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  public async readAllUsers (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const response = await readAllUsersService.getAllUsersService()
    res.status(response.status).json(response.answer)
  }

  public async updateUser (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  public async deleteUser (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  // auth requests
  public async login (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }

  public async register (_req: Request, _res: Response, _next: NextFunction): Promise<void> {
  }
}
export default new UsersController()
