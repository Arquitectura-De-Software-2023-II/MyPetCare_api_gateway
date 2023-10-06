import { Request, Response, NextFunction } from 'express'
// import msRoutes from '../config/msRoutes'
import getAllDoctors from '../services/contact/getAllDoctors.service'
import getDoctor from '../services/contact/getDoctor.service'
import createDoctor from '../services/contact/createDoctor.service'
import editDoctor from '../services/contact/editDoctor.service'
import deleteDoctor from '../services/contact/deleteDoctor.service'

import getAllAtendanceTime from '../services/contact/getAllAtendanceTime.service'
import getAtendanceTime from '../services/contact/getAtendanceTime.service'
import createAtendanceTime from '../services/contact/createAtendanceTime.service'
import editAtendanceTime from '../services/contact/editAtendanceTime.service'
import deleteAtendanceTime from '../services/contact/deleteAtendanceTime.service'

import getAllReviews from '../services/contact/getAllReviews.service'
import getReview from '../services/contact/getReview.service'
import createReview from '../services/contact/createReview.service'
import editReview from '../services/contact/editReview.service'
import deleteReview from '../services/contact/deleteReview.service'

import getAllServices from '../services/contact/getAllServices.service'
import getService from '../services/contact/getService.service'
import createService from '../services/contact/createService.service'
import editService from '../services/contact/editService.service'
import deleteService from '../services/contact/deleteService.service'

class contactController {
  // Doctor Controllers
  public async getAllDoctors (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const response = await getAllDoctors.getAllDoctors()
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async getDoctor (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const response = await getDoctor.getDoctor(id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async createDoctor (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const doctor = req.body
    const response = await createDoctor.createDoctor(doctor)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async deleteDoctor (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const response = await deleteDoctor.deleteDoctor(id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async editDoctor (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const doctor = req.body
    const response = await editDoctor.editDoctor(doctor, id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  // Atendance-Time Controllers
  public async getAllAtendanceTime (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const response = await getAllAtendanceTime.getAllAtendanceTime()
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async getAtendanceTime (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const response = await getAtendanceTime.getAtendanceTime(id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async createAtendanceTime (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const atendanceTime = req.body
    const response = await createAtendanceTime.createAtendanceTime(atendanceTime)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async deleteAtendanceTime (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const response = await deleteAtendanceTime.deleteAtendanceTime(id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async editAtendanceTime (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const atendanceTime = req.body
    const response = await editAtendanceTime.editAtendanceTime(atendanceTime, id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  // Review Controllers
  public async getAllReviews (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const response = await getAllReviews.getAllReviews()
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async getReview (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const response = await getReview.getReview(id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async createReview (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const review = req.body
    const response = await createReview.createReview(review)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async deleteReview (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const response = await deleteReview.deleteReview(id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async editReview (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const review = req.body
    const response = await editReview.editReview(review, id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  // Service Controllers
  public async getAllServices (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const response = await getAllServices.getAllServices()
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async getService (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const response = await getService.getService(id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async createService (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const service = req.body
    const response = await createService.createService(service)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async deleteService (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const response = await deleteService.deleteService(id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }

  public async editService (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = req.params.id
    const service = req.body
    const response = await editService.editService(service, id)
    res.status(response.status).json(response.answer)
    console.log(response.message)
  }
}

// eslint-disable-next-line new-cap
export default new contactController()
