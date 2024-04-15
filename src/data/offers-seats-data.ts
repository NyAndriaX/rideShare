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
  departureDatetime: "",
  pricePerSeat: 20000,
  additionalNotes: "",
  refundable:true,
  oneWay:true
};