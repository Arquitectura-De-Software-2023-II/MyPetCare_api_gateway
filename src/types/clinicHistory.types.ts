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

export interface CreatePetDTO {
  usersDBId: string
  PetInfo?: {
    age: number
    weight: number
  }
}
