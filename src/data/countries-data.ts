interface CountryDataType {
  code: string
  name: string
  languages: string[]
  province: string[]
}

export const countriesData: CountryDataType[] = [
  {
    code: 'MG',
    name: 'Madagascar',
    languages: ['Malagasy', 'Français'],
    province: [
      'Antananarivo',
      'Toamasina',
      'Fianarantsoa',
      'Mahajanga',
      'Toliara',
      'Antsiranana',
    ],
  },
]
