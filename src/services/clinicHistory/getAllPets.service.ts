import { Responses, ResponseStatus } from "../../types/response.types"

class GetAllPets {
  public async getAllPets (index: number, offset: number): Promise<Responses> {
    /*
    let response: Responses
    let groups: GroupDocument[] = []

    // Get groups
    try {
      groups = await GroupModel.find({}, { info: 1, _id: 0 }, { skip: offset, limit: index })
    } catch {
      response = {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: 'Error finding groups'
      }
    }

    // Check if there are groups
    if (groups.length === 0) {
      response = {
        answer: groups,
        status: ResponseStatus.OK,
        message: 'There are no groups to show'
      }
    } else {
      response = {
        answer: groups,
        status: ResponseStatus.OK,
        message: 'Groups found successfully'
      }
    }

    return response
    */
    //const pets : any = await fetch()

    let response: Responses

    response = {
      status: ResponseStatus.OK,
      answer: "hola"
    }
   return response 
  }

}

export default new GetAllPets()