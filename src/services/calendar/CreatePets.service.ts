import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'

class CreatePetsService {
  public async CreatePetService (data: any): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }

    }
    const url = msRoutes.calendar_ms.route + ':' + msRoutes.calendar_ms.port.toString() + '/api/v1/pets/'

    const events = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(async (response) => {
        if (!response.ok) {
          console.log(response)
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
    console.log(events)
    responses.answer = 'Mascota agregada correctamente al Calendar'
    return responses
  }
}

export default new CreatePetsService()
