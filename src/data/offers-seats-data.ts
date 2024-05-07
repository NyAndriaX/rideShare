import { FormOfferSeatsData } from "@/types/interface";

export const initialOfferSeatsValues: FormOfferSeatsData = {
  departureProvince: "",
  departurePrecise: "",
  destinationProvince: "",
  destinationPrecise: "",
  stops: [],
  seatsOffered: {
    totalSeats: 0,
    adultSeats: 0,
    childSeats: 0,
    disabledSeats: 0
  },
  departureDate: {
    date: '',
    time: ''
  },
  returnDate: {
    date: "",
    time: ''
  },
  pricePerSeat: 20000,
  additionalNotes: "",
  refundable: true,
  oneWay: true,
  seats: 0,
  isComfort: false,
  fixedPrice: false,
  phoneNumber: ""
};