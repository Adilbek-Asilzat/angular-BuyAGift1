export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'BoJack Horseman Cartoon Movie Poster',
    link:"https://www.amazon.com/BoJack-Horseman-Cartoon-Poster-Studio/dp/B08NGQ7ZDX/ref=sr_1_38?crid=2J7UKOOX6FDQD&keywords=bojack+horseman+poster&qid=1647087187&sprefix=BoJack+Horseman+%2Caps%2C907&sr=8-38",
    img:"https://m.media-amazon.com/images/I/71OyhsP+Z2L._SX1000_.jpg",
    price: 26.99,
    description: 'High Quality Brand New Stunning Poster. 5 sizes to choose from: XS, S, M, L, Xl. Material: high quality poster paper. Poster Packaging: Hard cartone tube.'
  },
  {
    id: 2,
    name: 'Moon Shape Led Neon Night Light',
    link:"https://www.amazon.com/ENUOLI-Battery-Operated-Christmas-Birthday/dp/B07S3QZ758/ref=sr_1_14?crid=XU41SIBRO2U5&keywords=shaped+light&qid=1647171873&sprefix=shaped+light%2Caps%2C320&sr=8-14",
    img:"https://m.media-amazon.com/images/I/51+b7CApHTL._AC_SX679_.jpg",
    price: 11.99,
    description: 'Warm White Moon Shape Led Neon Night Light with Holder Base Marquee Sign Lamp Power by Battery&USB '
  },
  {
    id: 3,
    name: 'Touch Wake Up Night Light with Sunrise',
    link:"https://www.amazon.com/Simulation-Winshine-Dimmable-Bedrooms-Nightstand/dp/B08ZSMLJBZ/ref=sr_1_85?keywords=alarm+clock&qid=1647172667&s=furniture&sr=1-85",
    img:"https://m.media-amazon.com/images/I/71XCp+Rd-DL._AC_SX679_.jpg",
    price: 32.99,
    description: 'Simulation Alarm Clock, Winshine 3 Ways Dimmable Warm White Bedside Lamp '
  },
  {
    id: 4,
    name: 'Loveinside Medium Size Gift Bags',
    link:"https://www.amazon.com/Loveinside-Bags-Coloful-Pattern-Shopping-Parties/dp/B07DV5YDTP/ref=sr_1_47?crid=AO6ODNOJL8PK&keywords=gift%2Bbags&qid=1647173003&sprefix=gift%2Caps%2C356&sr=8-47&th=1",
    img:"https://m.media-amazon.com/images/I/71q4Frbri0L._AC_SX679_.jpg",
    price: 9.99,
    description: 'Colorful Marble Pattern Gift Bag with Tissue Paper for Shopping, Parties, Wedding, Craft-4 Pack-7" X 4" X 9"'
  },
  {
    id: 5,
    name: 'Symbolic Collection Womens Choker',
    link:"https://www.amazon.com/Swarovski-Symbolic-Necklace-Multi-colored-Rose-gold/dp/B07TBBLKHF/ref=sr_1_111?crid=P5Z43ZLBU46D&keywords=Necklace&qid=1647173301&sprefix=necklace%2Caps%2C385&sr=8-111",
    img:"https://m.media-amazon.com/images/I/615npT0bnSL._AC_UY695_.jpg",
    price: 48.99,
    description: 'Style Necklace, with Seven Blue and White Crystal Charms and Rose-Gold Tone Plated Chain'
  },
  {
    id: 6,
    name: 'SKooljewelry Sterling Silver Mens',
    link:"https://www.amazon.com/Kooljewelry-Sterling-Silver-Figaro-Necklace/dp/B01FG3Q62Q/ref=sr_1_1?crid=20JND5RA5JXCX&keywords=kooljewelry+sterling&qid=1647179810&refinements=p_36%3A4800-4900&rnid=2661611011&sprefix=skooljewelry+sterling+silver+men%2Caps%2C381&sr=8-1",
    img:"https://m.media-amazon.com/images/I/81x6SJ31wUL._AC_UY695_.jpg",
    price: 48.99,
    description: '5.5 mm High Polish Figaro Link Necklace Made in Italy'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/