class Listing {
    constructor(
      id,
      type,
      headline,
      date,
      author,
      agency,
      imageUrl,
      description
    ) {
      this.id = id;
      this.type = type;
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
  