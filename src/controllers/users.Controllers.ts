import { Request, Response, NextFunction } from 'express'
import GetUserService from '../services/users/getUser.service'
import GetAllUsersService from '../services/users/getAllUsers.service'
import UpdateUserService from '../services/users/updateUser.service'
import DeleteUserService from '../services/users/deleteUser.service'
import LoginService from '../services/users/login.service'
import RegisterService from '../services/users/register.service'
import CreatePetService from '../services/users/createPet.service'

class UsersController {
  // pet requests
  public async createPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { name, age, color, breed, owner } = req.body
    const response = await CreatePetService.createPetService({ name, age, color, breed, owner })
    res.status(response.status).json(response.answer)
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
  public async readUser (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { email } = req.body
    const response = await GetUserService.getUserService(email)
    res.status(response.status).json(response.answer)
  }

  public async readAllUsers (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const response = await GetAllUsersService.getAllUsersService()
    res.status(response.status).json(response.answer)
  }

  public async updateUser (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { email, password } = req.body
    const response = await UpdateUserService.updateUserService(email, password)
    res.status(response.status).json(response.answer)
  }

  public async deleteUser (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { email } = req.body
    const response = await DeleteUserService.deleteUserService(email)
    res.status(response.status).json(response.answer)
  }

  // auth requests
  public async login (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { email, password } = req.body
    const response = await LoginService.loginService(email, password)
    res.status(response.status).json(response.answer)
  }

  public async register (req: Request, res: Response, _next: NextFunction): Promise<void> {
    console.log(req.body)
    const { name, email, password, role } = req.body
    const response = await RegisterService.registerService({ name, email, password, role })
    res.status(response.status).json(response.answer)
  }
}
export default new UsersController()
