import Country from "../models/countries";
import Destination from "../models/destinations"; // Renaming the model to match the change

// AFRICAN COUNTRIES LIST
export const COUNTRIES = [
  new Country("c1", "Nigeria", "#f44336"), // Red
  new Country("c2", "Kenya", "#2196f3"), // Blue
  new Country("c3", "Uganda", "#4caf50"), // Green
  new Country("c4", "Egypt", "#ff9800"), // Orange
  new Country("c5", "Ghana", "#9c27b0"), // Purple
  new Country("c6", "Tanzania", "#ffeb3b"), // Yellow
  new Country("c7", "Morocco", "#03a9f4"), // Light Blue
  new Country("c8", "Ethiopia", "#8bc34a"), // Light Green
  new Country("c9", "Senegal", "#ff5722"), // Deep Orange
  new Country("c10", "Botswana", "#673ab7"), // Deep Purple
];

// DESTINATIONS LIST (Similar to Campgrounds but African Tourist Destinations)
export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1", // Nigeria 1
    "Yankari National Park",
    50,
    1985,
    4.5,
    require('../assets/images/yankari.jpeg')
  ),
  new Destination(
    "d2",
    "c1", // Nigeria 2
    "Lekki Conservation Centre",
    35,
    2002,
    4.4,
    require('../assets/images/lekki.jpeg')
  ),
  new Destination(
    "d3",
    "c2", // Kenya 1
    "Maasai Mara National Reserve",
    30,
    1992,
    4.8,
    require('../assets/images/maasai.jpeg')
  ),
  new Destination(
    "d4",
    "c2", // Kenya 2
    "Amboseli National Park",
    40,
    1995,
    4.7,
    require('../assets/images/amboseli.jpeg')
  ),
  new Destination(
    "d5",
    "c3", // Uganda 1
    "Kruger National Park",
    40,
    1978,
    4.9,
    require('../assets/images/kruger.jpeg')
  ),
  new Destination(
    "d6",
    "c3", // Uganda 2
    "Bwindi Impenetrable National Park",
    60,
    1991,
    4.9,
    require('../assets/images/bwindi.jpeg')
  ),
  new Destination(
    "d7",
    "c4", // Egypt 1
    "Pyramids of Giza",
    60,
    2001,
    5.0,
    require('../assets/images/giza.jpeg')
  ),
  new Destination(
    "d8",
    "c4", // Egypt 2
    "Luxor Temple",
    45,
    2000,
    4.6,
    require('../assets/images/luxor.jpeg')
  ),
  new Destination(
    "d9",
    "c5", // Ghana 1
    "Cape Coast Castle",
    25,
    1988,
    4.2,
    require('../assets/images/cape.jpeg')
  ),
  new Destination(
    "d10",
    "c5", // Ghana 2
    "Kakum National Park",
    30,
    1995,
    4.5,
    require('../assets/images/kakum.jpeg')
  ),
  new Destination(
    "d11",
    "c6", // Tanzania 1
    "Mount Kilimanjaro",
    35,
    1995,
    4.9,
    require('../assets/images/mount.jpeg')
  ),
  new Destination(
    "d12",
    "c6", // Tanzania 2
    "Serengeti National Park",
    60,
    1951,
    4.8,
    require('../assets/images/serengeti.jpeg')
  ),
  new Destination(
    "d13",
    "c7", // Morocco 1
    "Jemaa el-Fnaa",
    45,
    1975,
    4.6,
    require('../assets/images/jemaa.jpeg')
  ),
  new Destination(
    "d14",
    "c7", // Morocco 2
    "Marrakech Souk",
    40,
    1980,
    4.7,
    require('../assets/images/marrakechsouk.jpeg')
  ),
  new Destination(
    "d15",
    "c8", // Ethiopia 1
    "Lalibela",
    55,
    2003,
    4.7,
    require('../assets/images/lalibela.jpeg')
  ),
  new Destination(
    "d16",
    "c8", // Ethiopia 2
    "Simien Mountains National Park",
    50,
    1979,
    4.9,
    require('../assets/images/simien.jpeg')
  ),
  new Destination(
    "d17",
    "c9", // Senegal 1
    "Gorée Island",
    20,
    1982,
    4.3,
    require('../assets/images/goree.jpeg')
  ),
  new Destination(
    "d18",
    "c9", // Senegal 2
    "Niokolo-Koba National Park",
    55,
    1990,
    4.6,
    require('../assets/images/niokolo.jpeg')
  ),
  new Destination(
    "d19",
    "c10", // Botswana 1
    "Okavango Delta",
    65,
    1998,
    4.9,
    require('../assets/images/delta.jpeg')
  ),
  new Destination(
    "d20",
    "c10", // Botswana 2
    "Chobe National Park",
    70,
    1968,
    4.8,
    require('../assets/images/chobe.jpeg')
  ),
];
