import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class DeleteUserService {
  public async deleteUserService (email: string): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }
    }

    const url: string = msRoutes.users_ms.route + msRoutes.users_ms.port.toString() + '/user/delete'

    const fetchData = await fetch(url, {
      method: 'DELETE',
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
    responses.answer = fetchData
    return responses
  }
}

export default new DeleteUserService()
