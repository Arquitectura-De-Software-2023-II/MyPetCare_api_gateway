import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class LoginService {
  public async loginService (email: string, password: string): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }
    }

    const url: string = msRoutes.users_ms.route + msRoutes.users_ms.port.toString() + '/user/login'

    const fetchData = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // inject the query and variables
        email,
        password
      })
    })
      .then(async (response) => {
        if (!response.ok) {
          responses.status = ResponseStatus.BAD_REQUEST
          const error = await response.json()
          if (error.error === 'Usuario no encontrado') {
            return {
              error: 'Usuario no encontrado'
            }
          } else if (error.error === 'Constraseña invalida') {
            return {
              error: 'Contraseña invalida'
            }
          } else {
            return {
              error: 'Credenciales invalidas'
            }
          }
        }
        return await response.json()
      })
      .then(response => {
        if (response.error === undefined) {
          return {
            message: response.message,
            token: response.data.token
          }
        } else return response
      })
      .catch((err) => {
        console.log(err)
        responses.status = ResponseStatus.INTERNAL_SERVER_ERROR
      })
    responses.answer = fetchData
    return responses
  }
}

export default new LoginService()
