import { Request, Response, NextFunction } from 'express'
import { ResponseStatus } from '../types/response.types'
import msRoutes from '../config/msRoutes'

class AuthenticationMiddlewares {
  public async doom (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).json({ message: 'Doomed' })
  }

  public async getUserData (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('enter')
    console.log(req.headers)
    if (req.headers.authorization === undefined) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }
    const accessToken = req.headers.authorization?.split(' ')[1]

    const url: string = `${msRoutes.users_ms.route}:${msRoutes.users_ms.port}` + '/user/verify'
    console.log(url)
    console.log(accessToken)
    // fetch users api

    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken === undefined ? '' : accessToken}`
      }
    })
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error)
        }
        void response.json()
          ?.then((data) => {
            req.body.user = data
            next()
          })
          .catch((err) => {
            res.status(500).json({ message: err.message })
          })
      })
      .catch((err) => {
        console.log(err)
        res.status(ResponseStatus.BAD_REQUEST).json({ message: 'unautorized' })
      })
  }
}

export default new AuthenticationMiddlewares()
