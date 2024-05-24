import { GenreEnum } from "./enum";

export type GenreStateType = | GenreEnum.MASCULINE | GenreEnum.FEMININE | GenreEnum.NOT_SPECIFIED

export interface User{
  userId:number;
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

export interface Stop {
  stopLocation: string;
  checked:boolean
}

export interface DepartureDate{
  date:string,
  time:string
}

export interface ReturnDate{
  date:string,
  time:string
}

export interface StopPrice {
  stopId:string;
  price:number
}

export interface returnPrice {
  fixedPrice:boolean;
  pricePerSeat:number;
  stopPrices?:StopPrice[]
}

export interface FormOfferSeatsData {
  departureProvince: string;
  departurePrecise: string;
  destinationProvince: string;
  destinationPrecise: string;
  stops: Stop[];
  seatsOffered: { // This state is deleted after submitting in backend 
    totalSeats: number;
    adultSeats: number;
    childSeats: number;
    disabledSeats: number;
  };
  seats:number;
  departureDate: DepartureDate;
  returnDate?: ReturnDate;
  isComfort:boolean;
  fixedPrice:boolean;
  pricePerSeat: number; // This is value of price
  stopPrices?:StopPrice[]; // this is value of stop price
  returnPrice?:returnPrice
  additionalNotes: string;
  phoneNumber:string;
  refundable:boolean;
  oneWay:boolean
}
// New interface FormTripsData

export interface DepartureStops{
  location:string;
  checked:boolean;
  price?:number;

}

export interface ReturnStops{
  location:string;
  checked:boolean;
  price:number
}

export interface FormTripsData{
  departureProvince:string;
  departurePrecise: string;
  departureDate:string;
  departureTime:string;
  destinationProvince: string;
  destinationPrecise: string;
  seats:number;
  departureStops?:DepartureStops[];
  fixedDeparturePrice:boolean;
  departurePrice:number;
  oneWay:boolean;
  isComfort?:boolean;
  returnDate?:string;
  returnTime?:string;
  returnStops?:ReturnStops[];
  fixedReturnPrice?:boolean;
  returnPrice:number;
  phoneNumber:string;
}

export interface FormSearchData{
  departurePrecise:string;
  destinationPrecise:string;
  dateOfDeparture:string;
  returnOfDate?:string;
  passenger:number
}