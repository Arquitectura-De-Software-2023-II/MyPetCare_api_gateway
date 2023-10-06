import msRoutes from '../../config/msRoutes'
import { CreatePetTypes } from '../../types/clinicHistory.types'
import { Responses, ResponseStatus } from '../../types/response.types'
import createPetService from '../clinicHistory/createPet.service'

class CreatePetService {
  public async createPetService (request: { name: string, age: bigint, color: string, breed: string, owner: string }): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }
    }
    console.log(msRoutes.users_ms.route, msRoutes.users_ms.port.toString())
    const url: string = msRoutes.users_ms.route + msRoutes.users_ms.port.toString() + '/pet/post'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pet: request
      })
    }
    // fix email registered error
    const answer = await fetch(url, options)
      .then(async (response) => {
        if (response.status === 400) {
          return {
            error: 'no puede crear mascotas a otro usuario'
          }
        }
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
      .catch((err) => {
        console.log(err)
        responses.status = ResponseStatus.INTERNAL_SERVER_ERROR
      })
    // save pet history
    console.log('🚀 ~ file: createPet.service.ts:29 ~ CreatePetService ~ createPetService ~ answer :', answer._id)
    await createPetService.createPet({ usersDBId: answer._id }, CreatePetTypes.INITIAL)
      .then(async (res) => {
        console.log('jasbdfjkbasdfhajdfhajdhfkjadfkj')
        responses.status = res.status
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        responses.status = ResponseStatus.INTERNAL_SERVER_ERROR
        responses.answer = { answer: 'err saving clini history' }
      }
      )
    if (answer.error === 'no puede crear mascotas a otro usuario') {
      responses.status = ResponseStatus.BAD_REQUEST
      responses.answer = { answer: answer.error }
    }
    console.log(answer)
    responses.answer = answer
    return responses
  }
}

export default new CreatePetService()
