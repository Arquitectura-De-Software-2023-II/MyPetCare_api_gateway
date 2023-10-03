import { Request, Response, NextFunction } from 'express'
// import msRoutes from '../config/msRoutes'
import IndexEvents from '../services/calendar/IndexEvents.service'

class calendarController {
    // private static apiRoute = msRoutes.calendar_ms
    // // basic requests for events
    
    // public async createEvent(req: Request, res: Response, _next: NextFunction): Promise<void> {
    // }
    // public async updateEvent(req: Request, res: Response, _next: NextFunction): Promise<void> {
    // }
    public async indexEvent(_req: Request, res: Response, _next: NextFunction): Promise<void> {
        const event = await IndexEvents.IndexEvents()
        res.status(event.status).json(event.answer)
    }
    // public async showSingleEvent(req: Request, res: Response, _next: NextFunction): Promise<void> {
    // }
    // public async destroyEvent(req: Request, res: Response, _next: NextFunction): Promise<void> {
    // }
}
export default new calendarController();


