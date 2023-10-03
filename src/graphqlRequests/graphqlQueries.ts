import { CreatePetDTO } from '../types/clinicHistory.types'

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
function createPet (pet: CreatePetDTO): string {
  return `
  mutation{
    createPet(createPetDto:{
        usersDBId: "${pet.usersDBId}"
    }){
        usersDBId
    }
}`
}
function createPetInfo (pet: CreatePetDTO): string {
  if (pet.PetInfo === undefined) return ''
  return `
  mutation{
    createPet(createPetDto:{
        usersDBId: "${pet.usersDBId}"
        PetInfo:{
          weight: ${pet.PetInfo?.weight.toString()}
          age: ${pet.PetInfo?.age.toString()}
        }
    }){
        usersDBId
        PetInfo{
          weight
          age
        }
    }
}`
}

const graphqlQueries = {
  getAllPets, getPet, getPetAppointments, createPet, createPetInfo
}
export default graphqlQueries
