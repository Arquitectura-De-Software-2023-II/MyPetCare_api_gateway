export enum GetPetTypes {
  GENERIC = 'generic',
  APPOINTMENTS = 'appointments',
  DISEASES = 'diseases',
  VACCINES = 'vaccines',
  INFO = 'info'
}
export enum CreatePetTypes {
  INITIAL = 'initial',
  INFO = 'info'
}

export interface PetInfoDto {
  weight: number
  age: number
  diseases: [{
    name: string
    description: string
    discoveryDate: string
  }]
  vaccines: [{
    name: string
    vaccination_date: string
    description: string
    duration: number
  }]
}

export interface CreatePetDTO {
  usersDBId: string
  PetInfo?: {
    age: number
    weight: number
  }
}
