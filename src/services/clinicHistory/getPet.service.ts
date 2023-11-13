import graphqlQueries from '../../graphqlRequests/graphqlQueries'
import graphqlFetchQuery from '../../graphqlRequests/graphqlRequest'
import { GetPetTypes } from '../../types/clinicHistory.types'
import { GraphqlhandlerResponse, GraphqlStatus } from '../../types/request.types'
import { Responses, ResponseStatus } from '../../types/response.types'

class GetPet {
  public async getPet (id: string, type: GetPetTypes): Promise<Responses> {
    let responses: Responses
    let response: GraphqlhandlerResponse | null = null

    let query = graphqlQueries.getPet(id)
    switch (type) {
      case GetPetTypes.GENERIC:
        query = graphqlQueries.getPet(id)
        break
      case GetPetTypes.APPOINTMENTS:
        query = graphqlQueries.getPetAppointments(id)
        break
      case GetPetTypes.VACCINES:
        query = graphqlQueries.getPetVaccines(id)
        break
      default:
        break
    }

    try {
      response = await graphqlFetchQuery(query)
    } catch (err) {
      console.log(err)
      responses = {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Error fetching the pets'
      }
    }
    if (response?.status === GraphqlStatus.ERROR) {
      responses = {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Error fetching the pets'
      }
      return responses
    }
    const pet = response?.res?.data?.getPetByUsersDBId
    responses = {
      status: ResponseStatus.OK,
      answer: pet
    }
    return responses
  }
}

export default new GetPet()
