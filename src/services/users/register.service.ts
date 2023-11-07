import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class RegisterService {
  public async registerService (request: { name: string, email: string, password: string, role: string }): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }
    }

    console.log(msRoutes.users_ms.route, msRoutes.users_ms.port.toString())
    const url: string = msRoutes.users_ms.route + msRoutes.users_ms.port.toString() + '/user/register'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }
    // fix email registered error
    const events = await fetch(url, options)
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json()
          if (error.error === 'Email ya registrado') {
            responses.status = ResponseStatus.BAD_REQUEST
            return {
              error: 'Email ya registrado'
            }
          } else {
            responses.status = ResponseStatus.BAD_REQUEST
            return {
              error: 'Credenciales Invalidas'
            }
          }
        }
        return await response.json()
      })
      .catch((err) => {
        console.log(err)
        responses.status = ResponseStatus.INTERNAL_SERVER_ERROR
      })
    console.log(events)
    responses.answer = events
    return responses
  }
}

export default new RegisterService()
