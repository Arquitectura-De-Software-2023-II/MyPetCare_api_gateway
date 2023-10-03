import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class DestroyEvents {
  public async DestroyEvent (): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }

    }
    const url = msRoutes.calendar_ms.route + ':' + msRoutes.calendar_ms.port.toString() + '/api/v1/events/'

    const events = await fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
    console.log(events)
    responses.answer = events
    return responses
  }
}

export default new DestroyEvents()
