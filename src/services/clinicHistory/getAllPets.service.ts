import graphqlQueries from '../../graphqlRequests/graphqlQueries'
import graphqlFetchQuery from '../../graphqlRequests/graphqlRequest'
import { GraphqlhandlerResponse, GraphqlStatus } from '../../types/request.types'
import { Responses, ResponseStatus } from '../../types/response.types'

class GetAllPets {
  public async getAllPets (): Promise<Responses> {
    let responses: Responses
    let response: GraphqlhandlerResponse | null = null
    try {
      response = await graphqlFetchQuery(graphqlQueries.getAllPets())
    } catch (err) {
      console.log(err)
      responses = {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Error fetching the pets'
      }
    }
    if (response?.status === GraphqlStatus.ERROR) {
      console.log('Errorrrrrr')
      console.log(response.res?.errors)
      responses = {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Error fetching the pets'
      }
      return responses
    }
    const pets = response?.res?.data?.getAllPets
    responses = {
      status: ResponseStatus.OK,
      answer: pets
    }
    return responses
  }
}

export default new GetAllPets()
