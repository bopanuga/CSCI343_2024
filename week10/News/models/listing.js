class Listing {
    constructor(
      id,
      type,
      // price,
      // bedrooms,
      // bathrooms,
      // squareFeet,
      // yearBuilt,
      // address,
      // city,
      // state,
      // zipCode,
      headline,
      date,
      author,
      agency,
      imageUrl,
      description
    ) {
      this.id = id;
      this.type = type;
      // this.price = price;
      // this.bedrooms = bedrooms;
      // this.bathrooms = bathrooms;
      // this.squareFeet = squareFeet;
      // this.yearBuilt = yearBuilt;
      // this.address = address;
      // this.city = city;
      // this.state = state;
      // this.zipCode = zipCode;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      // return `${this.type} at ${this.address}, ${this.city}, ${this.state} ${this.zipCode} - Price: $${this.price} - Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms} - Square Feet: ${this.squareFeet} - Year Built: ${this.yearBuilt} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
      return `${this.type} at ${this.headline}, ${this.author}, ${this.agency}  - Description: ${this.description} - Image URL: ${this.imageUrl}`;

    }
  }
  
  export default Listing;
  