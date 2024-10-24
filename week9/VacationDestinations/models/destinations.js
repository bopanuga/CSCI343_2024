class Destination {
  constructor(id, countryId, name, numSites, foundedYear, rating, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.numSites = numSites;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Number of Sites: ${this.numSites}, Rating: ${this.rating}`;
  }
}

export default Destination;
