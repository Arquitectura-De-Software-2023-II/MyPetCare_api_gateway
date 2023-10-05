import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class UpdateEventsService {
  public async UpdateEventService (data: any, id: string): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }

    }
    const url = msRoutes.calendar_ms.route + ':' + msRoutes.calendar_ms.port.toString() + '/api/v1/events/' + id

    const events = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
    responses.answer = events.error
    return responses
  }
}

export default new UpdateEventsService()
