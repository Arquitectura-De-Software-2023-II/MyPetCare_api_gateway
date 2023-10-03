import msRoutes from '../../config/msRoutes'
import { Responses, ResponseStatus } from '../../types/response.types'


class IndexEvents {
  public async IndexEvents (): Promise<Responses> {
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
    // const pets : any = await fetch()

    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }

    }
    const url = msRoutes.calendar_ms.route + ':' + msRoutes.calendar_ms.port.toString() + '/api/v1/events/'

    const events = await fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
    console.log(events)
    responses.answer = events
    return responses
  }
}

export default new IndexEvents()
