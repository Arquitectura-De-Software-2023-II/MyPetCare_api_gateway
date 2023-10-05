import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class GetAllUsersService {
  public async getAllUsersService (): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }
    }

    console.log(msRoutes.users_ms.route, msRoutes.users_ms.port.toString())
    const url: string = msRoutes.users_ms.route + msRoutes.users_ms.port.toString() + '/user/getall'

    const events = await fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
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

export default new GetAllUsersService()
