import graphqlQueries from '../../graphqlRequests/graphqlQueries'
import graphqlFetchQuery from '../../graphqlRequests/graphqlRequest'
import { CreatePetDTO, CreatePetTypes } from '../../types/clinicHistory.types'
import { GraphqlhandlerResponse, GraphqlStatus } from '../../types/request.types'
import { Responses, ResponseStatus } from '../../types/response.types'

class CreatePet {
  public async createPet (PetToSave: CreatePetDTO, type: CreatePetTypes): Promise<Responses> {
    let responses: Responses
    let response: GraphqlhandlerResponse | null = null

    let query = ''
    switch (type) {
      case CreatePetTypes.INITIAL:
        query = graphqlQueries.createPet(PetToSave)
        break
      case CreatePetTypes.INFO:
        query = graphqlQueries.createPetInfo(PetToSave)
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
      console.log(response.res?.errors)
      if (response.res?.errors !== undefined) {
        if (response.res?.errors[0]?.message === `Pet '${PetToSave.usersDBId}' already exists`) {
          responses = {
            status: ResponseStatus.BAD_REQUEST,
            message: `Pet '${PetToSave.usersDBId}' already exists`
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
    const pet = response?.res?.data?.createPet
    responses = {
      status: ResponseStatus.OK,
      answer: pet
    }
    return responses
  }
}

export default new CreatePet()
