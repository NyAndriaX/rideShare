interface CountryDataType {
  code: string;
  name: string;
  languages: string[];
  regions: string[];
}

export const countriesData: CountryDataType[] = [
  {
    code: "FR",
    name: "France",
    languages: ["Français"],
    regions: ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes", "Occitanie", "Nouvelle-Aquitaine", "Hauts-de-France", "Grand Est", "Bretagne", "Normandie", "Pays de la Loire", "Centre-Val de Loire", "Bourgogne-Franche-Comté"]
  },
  {
    code: "IT",
    name: "Italie",
    languages: ["Italiano"],
    regions: ["Lombardie", "Latium", "Campanie", "Sicile", "Émilie-Romagne", "Vénétie", "Pouilles", "Toscane", "Calabre", "Piemont", "Ombrie", "Marches"]
  },
  {
    code: "ES",
    name: "Espagne",
    languages: ["Español"],
    regions: ["Catalogne", "Andalousie", "Communauté de Madrid", "Communauté valencienne", "Galice", "Pays basque", "Castille-et-León", "Communauté de Castille-La Manche", "Canaries", "Région de Murcie", "Aragon", "Estrémadure", "Baléares", "Asturies", "Communauté forale de Navarre", "Cantabrie", "La Rioja"]
  },
  {
    code: "UK",
    name: "Royaume-Uni",
    languages: ["English"],
    regions: ["Angleterre", "Écosse", "Pays de Galles", "Irlande du Nord"]
  },
  {
    code: "DE",
    name: "Allemagne",
    languages: ["Deutsch"],
    regions: ["Bavière", "Bade-Wurtemberg", "Rhénanie-du-Nord-Westphalie", "Hesse", "Basse-Saxe", "Rhénanie-Palatinat", "Sarre", "Berlin", "Brême", "Hambourg", "Schleswig-Holstein", "Thuringe", "Brandebourg", "Saxe", "Mecklembourg-Poméranie-Occidentale", "Saxe-Anhalt"]
  },
  {
    code: "NL",
    name: "Pays-Bas",
    languages: ["Nederlands"],
    regions: ["Hollande-Septentrionale", "Hollande-Méridionale", "Brabant-Septentrional", "Groningue", "Overijssel", "Frise", "Gelderland", "Limbourg", "Utrecht", "Zélande", "Drenthe"]
  },
  {
    code: "MG",
    name: "Madagascar",
    languages: ["Malagasy", "Français"],
    regions: ["Analamanga", "Antananarivo", "Toamasina", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana"]
  }
];
