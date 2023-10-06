import { Responses, ResponseStatus } from '../../types/response.types'
// import msRoutes from '../../config/msRoutes'

class EditAtendanceTime {
  public async editAtendanceTime (atendanceTime: Object, id: string): Promise<Responses> {
    let responses: Responses = {
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: 'Error occurred editing or fetching',
      answer: {
        Error: 'Error occurred editing or fetching'
      }
    }
    // const url = msRoutes.contact_ms.route + msRoutes.contact_ms.port.toString() + '/api/doctors/'
    const url = 'https://service-info-ms.onrender.com/api/atendance-time/' + id

    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(atendanceTime)
    })
      .then(async (response) => {
        if (response.ok) {
          responses = {
            status: ResponseStatus.OK,
            message: 'Edit doctor successful!!',
            answer: {
              Message: 'Edit doctor successful!!'
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

export default new EditAtendanceTime()
