import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class CreateEventsService {
  public async CreateEventService (data: any): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }

    }
    const url = msRoutes.calendar_ms.route + ':' + msRoutes.calendar_ms.port.toString() + '/api/v1/events/'

    const events = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(async (response) => {
        if (!response.ok) {
          console.log('response')
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
    responses.answer = events.error
    return responses
  }
}

export default new CreateEventsService()
