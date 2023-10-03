import graphqlQueries from '../../graphqlRequests/graphqlQueries'
import graphqlFetchQuery from '../../graphqlRequests/graphqlRequest'
import { PetInfoDto } from '../../types/clinicHistory.types'
import { GraphqlhandlerResponse, GraphqlStatus } from '../../types/request.types'
import { Responses, ResponseStatus } from '../../types/response.types'

class UpdatePet {
  public async updatePet (id: string, PetInfo: PetInfoDto): Promise<Responses> {
    console.log(PetInfo)
    let responses: Responses
    let response: GraphqlhandlerResponse | null = null

    try {
      response = await graphqlFetchQuery(graphqlQueries.updatePet(id, PetInfo))
    } catch (err) {
      console.log(err)
      responses = {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Error fetching the pets'
      }
    }
    if (response?.status === GraphqlStatus.ERROR) {
      console.log(response.res?.errors)
      if (response.res?.errors !== undefined) {
        if (response.res?.errors[0]?.message === `Pet '${id}' not found`) {
          responses = {
            status: ResponseStatus.BAD_REQUEST,
            message: `Pet '${id}' not found`
          }
          return responses
        }
      }
      responses = {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Error fetching the pets'
      }
      return responses
    }
    const pet = response?.res?.data?.updatePetByUsersDBId
    responses = {
      status: ResponseStatus.OK,
      answer: pet
    }
    return responses
  }
}

export default new UpdatePet()
