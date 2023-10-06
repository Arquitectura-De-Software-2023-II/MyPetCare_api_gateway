import { Responses, ResponseStatus } from '../../types/response.types'
// import msRoutes from '../../config/msRoutes'

class GetAllReviews {
  public async getAllReviews (): Promise<Responses> {
    let responses: Responses = {
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: 'There are no doctors or an error occurred fetching',
      answer: {
        Error: 'There are no doctors or an error occurred fetching'
      }
    }
    // const url = msRoutes.contact_ms.route + msRoutes.contact_ms.port.toString() + '/api/doctors/'
    const url = 'https://service-info-ms.onrender.com/api/review/'

    const fetched = await fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
      .catch((error) => {
        console.log(error)
        return null
      })

    if (fetched != null) {
      responses = {
        status: ResponseStatus.OK,
        message: 'Get all doctors successful!!',
        answer: {
          fetched
        }
      }
    }

    return responses
  }
}

export default new GetAllReviews()
