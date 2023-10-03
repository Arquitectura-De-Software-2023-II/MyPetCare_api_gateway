
function getAllPets (): string {
  return `query{
    getAllPets{
      usersDBId
      PetInfo{
        weight
        age
        diseases{
          name
        }
        vaccines{
          name
          vaccination_date
          duration
        }
      }
      veterinaryAppointments{
        appointmentDate
        id
        doctorId
      }
    }
  }`
}
function getPet (id: string): string {
  return `query{
    getPetByUsersDBId(usersDBId:"${id}"){
      usersDBId
      PetInfo{
        weight
        age
        diseases{
          name
        }
        vaccines{
          name
          vaccination_date
          duration
        }
      }
      veterinaryAppointments{
        appointmentDate
        id
        doctorId
      }
    }
  }`
}
function getPetAppointments (id: string): string {
  return `query{
    getPetByUsersDBId(usersDBId:"${id}"){
      usersDBId
      veterinaryAppointments{
        appointmentDate
        id
        doctorId
        description
        prescriptionDrugs{
          name
          startDate
          endDate
          description
          periodicity
        }
        scheduledAppointments{
          specialist
          doctorId
          priority
        }
      }
    }
  }`
}
const graphqlQueries = {
  getAllPets, getPet, getPetAppointments
}
export default graphqlQueries
