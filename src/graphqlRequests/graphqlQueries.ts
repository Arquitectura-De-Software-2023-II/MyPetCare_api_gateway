import { CreatePetDTO, PetInfoDto } from '../types/clinicHistory.types'

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
          vaccination_year
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
          vaccination_year
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
function getPetVaccines (id: string): string {
  return `query{
    getPetByUsersDBId(usersDBId:"${id}"){
      usersDBId
      PetInfo{
        vaccines{
          name
          vaccination_year
          duration
          description
        }
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

function updatePet (id: string, petInfo: PetInfoDto): string {
  const mut = `
    mutation{
      updatePetByUsersDBId(usersDBId:"${id}",updatePetInfoDto:
      ${JSON.stringify(petInfo).replace(/"([^(")"]+)":/g, '$1:')}
      ){
          usersDBId,
          PetInfo{
              weight,
              age
          }
      }
    }
  `
  console.log(mut)
  return mut
}
const graphqlQueries = {
  getAllPets,
  getPet,
  getPetAppointments,
  createPet,
  createPetInfo,
  updatePet,
  getPetVaccines
}
export default graphqlQueries
