
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
const graphqlQueries = {
  getAllPets, getPet
}
export default graphqlQueries
