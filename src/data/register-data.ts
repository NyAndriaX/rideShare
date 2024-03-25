import { GenreEnum } from "@/types/enum"
import { GenreStateType } from "@/types/interface"

export const initialRegisterValues = {
  genre:GenreEnum.MASCULINE as GenreStateType,
  dateOfBirth:undefined,
  numberCIN:null,
  hasDrivingLicence:false,
  drivingLicenceNumber:null,
  email:'',
  password:''
  
}

export const initialUserNameFormValues = {
  firstName:'',
  lastName:''
}