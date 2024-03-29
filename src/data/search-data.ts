import { FormSearch,ErrorFormSearch } from "@/types/interface";

export const initialFormSearch: FormSearch = {
  departureCity: '',
  cityOfArrival: '',
  dateofdearture: new Date(),
  returndate: undefined,
  passenger: {
    adult: 0,
    child: 0,
    baby: 0,
    reducedmobilitypassengers: 0,
    totalstandardpassengers:0,
    totalpassengers:0
  },
}

export const initialErrorFormSearch:ErrorFormSearch = {
  departureCity:false,
  cityOfArrival:false
}