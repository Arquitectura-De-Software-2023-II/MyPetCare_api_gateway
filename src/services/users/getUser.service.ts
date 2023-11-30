import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class GetUserService {
  public async getUserService (email: string): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }
    }

    console.log(msRoutes.users_ms.route, msRoutes.users_ms.port.toString())
    const url: string = `${msRoutes.users_ms.route}:${msRoutes.users_ms.port}` + '/user/get'

    const fetchData = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // inject the query and variables
        email
      })
    })
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
    console.log(fetchData)
    responses.answer = fetchData
    return responses
  }
}

export default new GetUserService()
