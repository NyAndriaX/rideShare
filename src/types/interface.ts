import { GenreEnum } from "./enum";

export type GenreStateType = | GenreEnum.MASCULINE | GenreEnum.FEMININE

export interface User{
  id:string;
  created_at: Date;
  updated_at: Date;
  firstName: string;
  lastName: string;
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
  numberCIN : number;
  hasDrivingLicence:boolean;
  drivingLicenseNumber:number;
  phone:string;
  email: string;
  password: string;
}

export interface RegisterOutput {
  id:string | null | undefined
}

export interface LoginInput{
  email:string;
  password:string;
}

export interface LoginOutput {
  user:User;
  token:string;
}