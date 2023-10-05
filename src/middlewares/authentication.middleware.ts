import { Request, Response, NextFunction } from 'express'
import msRoutes from '../config/msRoutes'

class AuthenticationMiddlewares {
  public async doom (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).json({ message: 'Doomed' })
  }

  public async getUserData (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log(req.headers)
    if (req.headers.authorization === undefined) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }
    const accessToken = req.headers.authorization?.split(' ')[1]

    const url: string = msRoutes.users_ms.route + msRoutes.users_ms.port.toString() + '/user/login'

    // fetch users api

    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken === undefined ? '' : accessToken}`
      }
    }).then(async (response) => {
      void response.json()?.then((data) => {
        data.username = data.nickname
        req.body.user = data
        next()
      }).catch((err) => {
        res.status(500).json({ message: err.message })
      })
    }).catch((err) => {
      res.status(500).json({ message: err.message })
    })
  }
}

export default new AuthenticationMiddlewares()
