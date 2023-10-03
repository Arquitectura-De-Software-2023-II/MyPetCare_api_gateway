import { Request, Response, NextFunction } from 'express'
import msRoutes from '../config/msRoutes'
import IndexEvents from '../services/calendar/IndexEvents.service'
import CreateEvents from '../services/calendar/CreateEvents.service'
import DestroyEvents from '../services/calendar/DestroyEvents.service'
import UpdateEvents from '../services/calendar/UpdateEvents.service'
import ShowEvents from '../services/calendar/ShowEvents.service'
class calendarController {
  private static readonly apiRoute = msRoutes.calendar_ms
  // basic requests for events

  public async createEvent (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const event = await CreateEvents.CreateEvent()
    res.status(event.status).json(event.answer)
  }

  public async updateEvent (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const event = await UpdateEvents.UpdateEvent()
    res.status(event.status).json(event.answer)
  }

  public async indexEvent (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const event = await IndexEvents.IndexEvents()
    res.status(event.status).json(event.answer)
  }

  public async showSingleEvent (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const event = await ShowEvents.ShowEvent()
    res.status(event.status).json(event.answer)
  }

  public async destroyEvent (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const event = await DestroyEvents.DestroyEvent()
    res.status(event.status).json(event.answer)
  }
}
// eslint-disable-next-line new-cap
export default new calendarController()
