import { Responses, ResponseStatus } from '../../types/response.types'
import msRoutes from '../../config/msRoutes'
class UpdateUserService {
  public async updateUserService (email: string, password: string): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }
    }

    const url: string = `${msRoutes.users_ms.route}:${msRoutes.users_ms.port}` + '/user/put'

    const fetchData = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // inject the query and variables
        email,
        password
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
    responses.answer = fetchData
    return responses
  }
}

export default new UpdateUserService()
