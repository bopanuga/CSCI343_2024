import List from "../components/List";
import Listing from "../models/listing";

export const LISTINGS = [
  new Listing (
    1,
    "US",
    "Police are searching for the person who set ballot boxes on fire in Washington and Oregon.",
    "10/30/2024",
    "Chris Boyette",
    "CNN",
    "https://www.oregonlive.com/resizer/v2/PTL75XPI75CNZHJ4TSQOWW6VRQ.jpg?auth=eb8f3afe61abaa3e2bd5d0662a8ca274ad05c72a5fd5e89284ed3c0d8f44c820&width=1280&quality=90",
    "Almost all the ballots that were damaged or destroyed were in a drop box in Vancouver, Washington, while most ballots in a drop box in Portland, Oregon, survived a fire set the same day, election officials said. The incidents are believed to be connected to a third fire on October 8, also in Vancouver."
  ),
  new Listing (
    2,
    "US",
    "Students return to school in Asheville, North Carolina, area as community faces Helene recovery",
    "10/28/2024",
    "Chris Boyette",
    "CNN",
    "https://s.yimg.com/ny/api/res/1.2/_tXkJtZr0PP0Tx.VFTMYAw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE5MjA7aD0xMDgw/https://media.zenfs.com/en/cnn_articles_875/3edc1bf36b8fcc5a047fe6e133a2bf96",
    "Asheville operates an independent city school system in Buncombe County, where students went back to school Friday.",
  ),
  new Listing (
    3,
    "US",
    "Mother Leilani Simon found guilty of murdering her 20-month-old son in Georgia",
    "10/28/2024",
    "Dankin Adone & Alisha Ebrahimji",
    "CNN",
    "https://media.cnn.com/api/v1/images/stellar/prod/still-21077951-89110-795-still.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
    "A Georgia jury last week found Leilani Simon guilty of murdering her 20-month-old son, along with a series of other charges, including concealing a death and making false statements, according to The Associated Press.",
  ),
  new Listing (
    4,
    "World",
    "One dead and others trapped beneath rubble of collapsed hotel in Argentina",
    "10/29/2024",
    "Joaquin Caballero",
    "CNN",
    "https://media.cnn.com/api/v1/images/stellar/prod/2024-10-29t132627z-169185859-rc27uaauj0xw-rtrmadp-3-argentina-building-collapse.JPG?c=16x9&q=h_653,w_1160,c_fill/f_webp",
    "A man has died and up to nine other people are missing after a 10-story hotel collapsed in Argentina.",
  ),
  new Listing (
    5,
    "World",
    "Bodies found as severe flash flooding hits southern and eastern Spain",
    "10/30/2024",
    "Taylor Ward & Mauricio Torres",
    "CNN & CNN en Español",
    "https://bloximages.newyork1.vip.townnews.com/wfft.com/content/tncms/assets/v3/editorial/1/c0/1c03b911-b051-53a0-b9b4-0c1b00cdcc67/672194ee33f4f.image.jpg?resize=750%2C500",
    "Several bodies have been found after parts of southern and eastern Spain were hit by severe flash flooding on Tuesday, with some locations receiving up to 12 inches of rain in just a few hours."
  ),
  new Listing (
    6,
    "World",
    "German-Iranian national and longtime US resident executed in Iran",
    "10/29/2024",
    "Benjamin Brown & Hamdi Alkhshali",
    "CNN",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1238232791.jpg?c=16x9&q=h_383,w_680,c_fill/f_webp",
    "A German-Iranian national and longtime US resident has been executed in Iran after being convicted of terrorism offenses, according to Iranian state media citing the country’s judiciary-affiliated Mizan news agency."
  ),
  new Listing (
    7,
    "Other",
    "X changed its terms of service to let its AI train on everyone’s posts. Now users are up in arms",
    "10/21/2024",
    "By Ramishah Maruf",
    "CNN",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2159216150-copy.jpg?c=16x9&q=h_383,w_680,c_fill/f_webp",
    "When X unveiled its newest terms of service, which go into effect on November 15, users quickly picked up on one change."
  ),
  new Listing (
    8,
    "Other",
    "Apple debuted AI on the iPhone today. Here’s what to look out for!",
    "10/28/2024",
    "John Towfighi",
    "CNN",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2172403302.jpg?c=16x9&q=h_383,w_680,c_fill/f_webp",
    "Apple Intelligence launched on Monday, but the rollout is just a glimpse of how Apple hopes to transform its products with artificial intelligence."
  ),
  new Listing (
    9,
    "Other",
    "Remember when Lindsay Lohan wore the unsexiest Halloween costume ever?",
    "10/29/2024",
    "Alexandra Willingham",
    "CNN",
    "https://media.cnn.com/api/v1/images/stellar/prod/mean-girls.jpg?q=w_680,c_fill/f_webp",
    "If Halloween had a fashion handbook, the party scene from the 2004 classic “Mean Girls” would take up a whole chapter. Twenty years have passed since the original Plastics stomped their kitten heels into movie history, but the (now, rather outdated) observation Lindsay Lohan’s outcast-turned-”it girl” Cady Heron makes about “girl world” neatly summarizes the dichotomy of dressing for this most confusing of holidays."
  )
  // this.id = id;
  // this.type = type;
  // this.headline = headline;
  // this.date = date;
  // this.author = author;
  // this.agency = agency;
  // this.imageUrl = imageUrl;
  // this.description = description;


  // new Listing(
  //   1,
  //   "US",
  //   450000,
  //   3,
  //   2.5,
  //   2000,
  //   2010,
  //   "1234 Magnolia Dr",
  //   "Charleston",
  //   "SC",
  //   "29401",
  //   "https://cdn.houseplansservices.com/content/h0rig2dbr8vsg0fcgqco7acmul/w991x660.jpg?v=9",
  //   "Beautiful 3 bedroom, 2.5 bathroom house with a spacious backyard. This charming home features hardwood floors, a gourmet kitchen with granite countertops, and a master suite with a walk-in closet. Enjoy outdoor living in the private backyard with a deck and garden area."
  // ),
  // new Listing(
  //   2,
  //   "World",
  //   250000,
  //   2,
  //   2,
  //   1200,
  //   2005,
  //   "5678 Palmetto Ave",
  //   "Columbia",
  //   "SC",
  //   "29201",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_nmfjs0tFwRXjJgfVwsgHsSsBw6h_GSMpw&usqp=CAU",
  //   "2 bedroom, 2 bathroom condo in a gated community. This well-maintained condo features an open floor plan, updated kitchen with stainless steel appliances, and a balcony overlooking the community pool. The master suite includes a walk-in closet and ensuite bathroom."
  // ),
  // new Listing(
  //   3,
  //   "Other",
  //   350000,
  //   3,
  //   2.5,
  //   1800,
  //   2015,
  //   "4321 Oak St",
  //   "Greenville",
  //   "SC",
  //   "29601",
  //   "https://d1ja9tyo8nbkbc.cloudfront.net/49500759_S0004/S0004/S0004-R0100/1061546435/1613359524.jpg?version=1708602615&width=640",
  //   "Modern 3 bedroom, 2.5 bathroom townhouse with a rooftop terrace. This contemporary townhouse features an open-concept living area, high ceilings, and designer finishes throughout. The rooftop terrace offers stunning views of the city skyline, perfect for entertaining."
  // ),
  // new Listing(
  //   4,
  //   "Other",
  //   80000,
  //   2,
  //   1,
  //   800,
  //   1998,
  //   "8765 Pine St",
  //   "Myrtle Beach",
  //   "SC",
  //   "29577",
  //   "https://mobilehomeliving.org/wp-content/uploads/modern-manufactured-home-models-foundation-700-exterior.jpg",
  //   "Cozy 2 bedroom, 1 bathroom trailer with easy access to the beach. This well-maintained trailer features a spacious living area, kitchen with modern appliances, and a covered porch. Ideal for a beach getaway or rental investment."
  // ),
  // new Listing(
  //   5,
  //   "US",
  //   550000,
  //   4,
  //   3,
  //   2500,
  //   2000,
  //   "9876 Oak St",
  //   "Hilton Head Island",
  //   "SC",
  //   "29926",
  //   "https://image-cdn.carrot.com/uploads/sites/16871/2017/12/we-buy-houses-carolina-forest.png",
  //   "Spacious 4 bedroom, 3 bathroom house with a private pool. This luxurious home features a grand entryway, formal living and dining areas, and a gourmet kitchen with high-end appliances. The outdoor space includes a screened porch, patio, and lush landscaping."
  // ),
  // new Listing(
  //   6,
  //   "World",
  //   300000,
  //   1,
  //   1,
  //   700,
  //   2012,
  //   "2468 Maple Ave",
  //   "Mount Pleasant",
  //   "SC",
  //   "29464",
  //   "https://cdn.listingphotos.sierrastatic.com/pics2x/v1706983147/72/72_2402903_01.jpg",
  //   "1 bedroom, 1 bathroom condo with a balcony overlooking the harbor. This waterfront condo features an open floor plan, hardwood floors, and floor-to-ceiling windows with panoramic views. Enjoy the convenience of living near shops, restaurants, and parks."
  // ),
  // new Listing(
  //   7,
  //   "Other",
  //   400000,
  //   3,
  //   2.5,
  //   1600,
  //   2018,
  //   "3344 Elm St",
  //   "Rock Hill",
  //   "SC",
  //   "29730",
  //   "https://photos.zillowstatic.com/fp/7abfb3007766230044d9a8e62e01b69f-p_e.jpg",
  //   "3 bedroom, 2.5 bathroom townhouse with a two-car garage. This newly built townhouse features a modern kitchen with granite countertops, stainless steel appliances, and a spacious living area. The master suite includes a walk-in closet and ensuite bathroom."
  // ),
  // new Listing(
  //   8,
  //   "Other",
  //   70000,
  //   2,
  //   1,
  //   700,
  //   2005,
  //   "5432 Birch St",
  //   "Spartanburg",
  //   "SC",
  //   "29301",
  //   "https://www.mobilehomerepair.com/wp-content/uploads/2017/09/manufactured-home-vs-mobile-home.jpg",
  //   "2 bedroom, 1 bathroom trailer with a covered porch. This cozy trailer features laminate flooring, a compact kitchen, and a fenced yard. Ideal for a first-time homebuyer or as a rental property."
  // ),
  // new Listing(
  //   9,
  //   "US",
  //   500000,
  //   4,
  //   3,
  //   2300,
  //   2015,
  //   "1122 Pine St",
  //   "Florence",
  //   "SC",
  //   "29501",
  //   "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  //   "Modern 4 bedroom, 3 bathroom house with an open floor plan. This newly constructed home features a chef's kitchen with quartz countertops, stainless steel appliances, and a large island. The master suite includes a spa-like bathroom with a soaking tub and separate shower."
  // ),
  // new Listing(
  //   10,
  //   "World",
  //   280000,
  //   2,
  //   2,
  //   1100,
  //   2008,
  //   "3344 Oak Ave",
  //   "Summerville",
  //   "SC",
  //   "29483",
  //   "https://photos.zillowstatic.com/fp/67d34014d8104310b9b4f6399c524bc0-p_e.jpg",
  //   "2 bedroom, 2 bathroom condo in a resort-style community. This well-appointed condo features a spacious living area, kitchen with granite countertops, and a private balcony. The community amenities include a pool, fitness center, and walking trails."
  // ),
  // new Listing(
  //   11,
  //   "Other",
  //   380000,
  //   3,
  //   2.5,
  //   1700,
  //   2010,
  //   "5566 Maple St",
  //   "Anderson",
  //   "SC",
  //   "29621",
  //   "https://images1.apartments.com/i2/SVEagIqtkX8zYZaf2-1alji7VxYnvMVShqIAHyJ82uw/117/moorland-reserve-myrtle-beach-sc-building-photo.jpg?p=1",
  //   "3 bedroom, 2.5 bathroom townhouse with a fenced backyard. This well-maintained townhouse features an open-concept living area, hardwood floors, and a kitchen with granite countertops. The backyard includes a patio and garden area."
  // ),
  // new Listing(
  //   12,
  //   "Other",
  //   75000,
  //   2,
  //   1,
  //   800,
  //   2000,
  //   "7788 Elm St",
  //   "Greer",
  //   "SC",
  //   "29650",
  //   "https://qoraxenergy.com/wp-content/uploads/2021/11/05.jpg",
  //   "2 bedroom, 1 bathroom trailer with a small garden. This cozy trailer features laminate flooring, a compact kitchen, and a covered porch. The garden area is perfect for growing flowers or vegetables."
  // ),
  // new Listing(
  //   13,
  //   "US",
  //   480000,
  //   3,
  //   2.5,
  //   2200,
  //   2012,
  //   "9900 Cedar Ave",
  //   "North Charleston",
  //   "SC",
  //   "29405",
  //   "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg",
  //   "3 bedroom, 2.5 bathroom house with a backyard deck. This spacious home features an open floor plan, vaulted ceilings, and a gourmet kitchen with granite countertops. The deck overlooks the fenced backyard, ideal for outdoor entertaining."
  // ),
  // new Listing(
  //   14,
  //   "World",
  //   270000,
  //   1,
  //   1,
  //   800,
  //   2016,
  //   "1122 Birch St",
  //   "Mauldin",
  //   "SC",
  //   "29662",
  //   "https://images1.forrent.com/i2/vcRnUgXq4a1VrLW8cMDlFkeyiSENz_Y2-i9nAQsDh-E/117/image.jpg",
  //   "1 bedroom, 1 bathroom condo with a community pool. This well-maintained condo features an open floor plan, hardwood floors, and a kitchen with granite countertops. The community amenities include a pool, clubhouse, and fitness center."
  // ),
  // new Listing(
  //   15,
  //   "Other",
  //   390000,
  //   3,
  //   2.5,
  //   1800,
  //   2014,
  //   "3344 Elm Ave",
  //   "Simpsonville",
  //   "SC",
  //   "29680",
  //   "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/10/what-is-a-townhouse.jpeg.jpg",
  //   "3 bedroom, 2.5 bathroom townhouse with a two-car garage. This spacious townhouse features a gourmet kitchen with granite countertops, stainless steel appliances, and a breakfast bar. The master suite includes a walk-in closet and ensuite bathroom."
  // ),
  // new Listing(
  //   16,
  //   "Other",
  //   70000,
  //   2,
  //   1,
  //   700,
  //   2003,
  //   "6677 Maple St",
  //   "Greenwood",
  //   "SC",
  //   "29646",
  //   "https://www.vmcdn.ca/f/files/coastreporter/images/politics-local/public-hearing-1.jpg;w=960;h=623;mode=crop",
  //   "2 bedroom, 1 bathroom trailer with a covered porch. This well-maintained trailer features laminate flooring, a compact kitchen, and a fenced yard. Ideal for a first-time homebuyer or as a rental property."
  // ),
  // new Listing(
  //   17,
  //   "US",
  //   470000,
  //   4,
  //   3,
  //   2400,
  //   2008,
  //   "2233 Oak St",
  //   "Aiken",
  //   "SC",
  //   "29801",
  //   "https://images.ctfassets.net/n2ifzifcqscw/2Wv8SIq1OJusLJJbrbygAC/4c9cadb476862254bba99be62d242452/craftsman.png",
  //   "Spacious 4 bedroom, 3 bathroom house with a two-car garage. This well-maintained home features a formal living room, dining room, and family room with a fireplace. The backyard includes a patio and garden area, perfect for outdoor entertaining."
  // ),
  // new Listing(
  //   18,
  //   "World",
  //   320000,
  //   2,
  //   2,
  //   1300,
  //   2015,
  //   "3344 Pine Ave",
  //   "Bluffton",
  //   "SC",
  //   "29910",
  //   "https://photos.zillowstatic.com/fp/e54025a6b3ddc0909a67f0d70dae3fd9-p_e.jpg",
  //   "2 bedroom, 2 bathroom condo with views of the golf course. This upscale condo features a gourmet kitchen with granite countertops, stainless steel appliances, and a breakfast bar. The community amenities include a pool, fitness center, and golf course access."
  // ),
  // new Listing(
  //   19,
  //   "Other",
  //   410000,
  //   3,
  //   2.5,
  //   1700,
  //   2012,
  //   "5566 Cedar St",
  //   "Easley",
  //   "SC",
  //   "29640",
  //   "https://www.forbes.com/advisor/wp-content/uploads/2021/11/Townhouse-900x510.jpg",
  //   "3 bedroom, 2.5 bathroom townhouse with a fenced backyard. This spacious townhouse features an open-concept living area, hardwood floors, and a kitchen with granite countertops. The backyard includes a patio and garden area."
  // ),
  // new Listing(
  //   20,
  //   "US",
  //   520000,
  //   4,
  //   3.5,
  //   2600,
  //   2017,
  //   "7788 Oak Ave",
  //   "Goose Creek",
  //   "SC",
  //   "29445",
  //   "https://cdn.houseplansservices.com/content/h0rig2dbr8vsg0fcgqco7acmul/w991x660.jpg?v=9",
  //   "4 bedroom, 3.5 bathroom house with a two-car garage. This contemporary home features an open floor plan, high ceilings, and designer finishes throughout. The backyard includes a patio, pool, and outdoor kitchen, perfect for outdoor entertaining."
  // ),
];