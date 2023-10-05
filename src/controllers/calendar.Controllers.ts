import { Request, Response, NextFunction } from 'express'
// import msRoutes from '../config/msRoutes'
import CreateEventsService from '../services/calendar/CreateEvents.service'
import UpdateEventsService from '../services/calendar/UpdateEvents.service'
import IndexEventsService from '../services/calendar/IndexEvents.service'
import ShowEventsService from '../services/calendar/ShowEvents.service'
import DestroyEventsService from '../services/calendar/DestroyEvents.service'
import CreateUsersService from '../services/calendar/CreateUsers.service'
import UpdateUsersService from '../services/calendar/UpdateUsers.service'
import DestroyUsersService from '../services/calendar/DestroyUsers.service'
import CreatePetsService from '../services/calendar/CreatePets.service'
import UpdatePetsService from '../services/calendar/UpdatePets.service'
import DestroyPetsService from '../services/calendar/DestroyPets.service'
class calendarController {
  // private static readonly apiRoute = msRoutes.calendar_ms
  // basic requests for events

  public async createEvent (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = JSON.stringify(req.body)
    const event = await CreateEventsService.CreateEventService(data)
    res.status(event.status).json(event.answer)
  }

  public async updateEvent (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = JSON.stringify(req.body)
    const event = await UpdateEventsService.UpdateEventService(data, req.params.id)
    res.status(event.status).json(event.answer)
  }

  public async indexEvent (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const event = await IndexEventsService.IndexEventsService()
    res.status(event.status).json(event.answer)
  }

  public async showSingleEvent (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const event = await ShowEventsService.ShowEventService(id)
    res.status(event.status).json(event.answer)
  }

  public async destroyEvent (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const event = await DestroyEventsService.DestroyEventService(id)
    res.status(event.status).json(event.answer)
  }

  public async createUser (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = JSON.stringify(req.body)
    const event = await CreateUsersService.CreateUserService(data)
    res.status(event.status).json(event.answer)
  }

  public async updateUser (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = JSON.stringify(req.body)
    const event = await UpdateUsersService.UpdateUserService(data, req.params.id)
    res.status(event.status).json(event.answer)
  }

  public async destroyUser (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const event = await DestroyUsersService.DestroyUserService(id)
    res.status(event.status).json(event.answer)
  }

  public async createPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = JSON.stringify(req.body)
    const event = await CreatePetsService.CreatePetService(data)
    res.status(event.status).json(event.answer)
  }

  public async updatePet (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = JSON.stringify(req.body)
    const event = await UpdatePetsService.UpdatePetService(data, req.params.id)
    res.status(event.status).json(event.answer)
  }

  public async destroyPet (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const event = await DestroyPetsService.DestroyPetService(id)
    res.status(event.status).json(event.answer)
  }
}
// eslint-disable-next-line new-cap
export default new calendarController()
