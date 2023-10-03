import graphqlQueries from '../../graphqlRequests/graphqlQueries'
import graphqlFetchQuery from '../../graphqlRequests/graphqlRequest'
import { GraphqlhandlerResponse, GraphqlStatus } from '../../types/request.types'
import { Responses, ResponseStatus } from '../../types/response.types'

class GetPet {
  public async getPet (id: string): Promise<Responses> {
    let responses: Responses
    let response: GraphqlhandlerResponse | null = null
    try {
      response = await graphqlFetchQuery(graphqlQueries.getPet(id))
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
