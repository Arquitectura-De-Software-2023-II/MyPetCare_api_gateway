import { Responses, ResponseStatus } from '../../types/response.types'
// import msRoutes from '../../config/msRoutes'

class DeleteService {
  public async deleteService (id: string): Promise<Responses> {
    let responses: Responses = {
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: 'The doctor was not found or an error occurred fetching',
      answer: {
        Error: 'The doctor was not found or an error occurred fetching'
      }
    }
    // const url = msRoutes.contact_ms.route + msRoutes.contact_ms.port.toString() + '/api/doctors/'
    const url = 'https://service-info-ms.onrender.com/api/service/' + id

    await fetch(url, { method: 'DELETE' })
      .then(async (response) => {
        if (response.ok) {
          responses = {
            status: ResponseStatus.OK,
            message: 'Delete doctor successful!!',
            answer: {
              Message: 'Delete doctor successful!!'
            }
          }
        }
      })
      .catch((error) => {
        console.log(error)
        return null
      })

    return responses
  }
}

export default new DeleteService()
