import { GenreEnum } from "./enum";

export type GenreStateType = | GenreEnum.MASCULINE | GenreEnum.FEMININE | GenreEnum.NOT_SPECIFIE

export interface User{
  id:string;
  created_at: Date;
  updated_at: Date;
  firstName: string;
  lastName: string;
  profilUrl?:string;
  genre:GenreStateType;
  dateOfBirth:Date | null;
  numberCIN : number;
  hasDrivingLicence:boolean;
  drivingLicenseNumber:number;
  phone:string;
  email: string;
  password: string;
}

export interface RegisterInput{
  firstName: string;
  lastName: string;
  genre:GenreStateType;
  dateOfBirth:Date | null;
  email: string;
  password: string;
}


export interface LoginInput{
  email:string;
  password:string;
}

export interface LoginOutput {
  token:string;
}

export interface FormSearch {
  departureCity: string
  cityOfArrival: string
  dateofdearture: Date
  returndate?: Date
  passenger: {
    adult: number
    child: number
    baby: number
    reducedmobilitypassengers: number
    totalstandardpassengers:number
    totalpassengers:number
  }
}

export interface ErrorFormSearch{
  departureCity:boolean
  cityOfArrival:boolean
}