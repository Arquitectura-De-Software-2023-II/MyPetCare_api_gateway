import { Request, Response, NextFunction } from 'express'
// import msRoutes from '../config/msRoutes'
import IndexEvents from '../services/calendar/IndexEvents.service'
import CreateEvents from '../services/calendar/CreateEvents.service'
import DestroyEvents from '../services/calendar/DestroyEvents.service'
import UpdateEvents from '../services/calendar/UpdateEvents.service'
import ShowEvents from '../services/calendar/ShowEvents.service'
class calendarController {
  // private static readonly apiRoute = msRoutes.calendar_ms
  // basic requests for events

  public async createEvent (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = JSON.stringify(req.body)
    const event = await CreateEvents.CreateEvent(data)
    res.status(event.status).json(event.answer)
  }

  public async updateEvent (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = JSON.stringify(req.body)
    const event = await UpdateEvents.UpdateEvent(data, req.params.id)
    res.status(event.status).json(event.answer)
  }

  public async indexEvent (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const event = await IndexEvents.IndexEvents()
    res.status(event.status).json(event.answer)
  }

  public async showSingleEvent (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const event = await ShowEvents.ShowEvent(id)
    res.status(event.status).json(event.answer)
  }

  public async destroyEvent (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const event = await DestroyEvents.DestroyEvent(id)
    res.status(event.status).json(event.answer)
  }
}
// eslint-disable-next-line new-cap
export default new calendarController()
