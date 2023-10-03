
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

const graphqlQueries = {
  getAllPets
}
export default graphqlQueries
