import { Responses, ResponseStatus } from '../../types/response.types'
// import msRoutes from '../../config/msRoutes'

class CreateAtendanceTime {
  public async createAtendanceTime (atendanceTime: Object): Promise<Responses> {
    let responses: Responses = {
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: 'Error occurred creating or fetching',
      answer: {
        Error: 'Error occurred creating or fetching'
      }
    }
    // const url = msRoutes.contact_ms.route + msRoutes.contact_ms.port.toString() + '/api/doctors/'
    const url = 'https://service-info-ms.onrender.com/api/atendance-time/'

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(atendanceTime)
    })
      .then(async (response) => {
        if (response.ok) {
          responses = {
            status: ResponseStatus.OK,
            message: 'Create doctor successful!!',
            answer: {
              Message: 'Create doctor successful!!'
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

export default new CreateAtendanceTime()
