import { Product, Category } from './types';

export const categories: Category[] = [
  { id: 'all', name: 'All Products' },
  { id: 'credit-cards', name: 'Credit Cards' },
  { id: 'debit-cards', name: 'Debit Cards' },
  { id: 'gift-cards', name: 'Gift Cards' },
  { id: 'bank-accounts', name: 'Bank Accounts' },
  { id: 'digital-wallets', name: 'Digital Wallets' },
  { id: 'premium-accounts', name: 'Premium Accounts' },
];

export const products: Product[] = [
  // Cards from Screenshot (216)
  {
    id: 1,
    name: 'Marmaduc Mrton Discover Card',
    description: 'Discover card registered to Marmaduc Mrton, located at 4958 Pinnickinnick Street, United States. Card number ending in 544.',
    shortDescription: 'Discover ending in 544',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********544',
      'Address: 4958 Pinnickinnick Street',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 2,
    name: 'Konrad Johnson Discover Card',
    description: 'Discover card registered to Konrad Johnson, located at 766 Kelly Street, United States. Card number ending in 247.',
    shortDescription: 'Discover ending in 247',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********247',
      'Address: 766 Kelly Street',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 3,
    name: 'Robert Fraser Visa Card',
    description: 'Visa card registered to Robert Fraser, located at 3572 Walnut Hill Drive, United States. Card number ending in 492.',
    shortDescription: 'Visa ending in 492',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********492',
      'Address: 3572 Walnut Hill Drive',
      'CVV: 3',
      'UNITED STATES based'
    ]
  },
  {
    id: 4,
    name: 'Flavia Ba Mastercard',
    description: 'Mastercard registered to Flavia Ba, located at Ufnau Strasse 13, Germany. Card number ending in 265.',
    shortDescription: 'Mastercard ending in 265',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1572002500747-b035d297ecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 5156********265',
      'Address: Ufnau Strasse 13',
      'CVV: 3',
      'GERMANY based'
    ]
  },
  {
    id: 5,
    name: 'Lauren Melikov Visa Card',
    description: 'Visa card registered to Lauren Melikov, located at 3982 Paul Wayne Haggerty Road, United States. Card number ending in 791.',
    shortDescription: 'Visa ending in 791',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********791',
      'Address: 3982 Paul Wayne Haggerty Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 6,
    name: 'Tony Lundqvist Discover Card',
    description: 'Discover card registered to Tony Lundqvist, located at 2992 Columbia Mine Road, United States. Card number ending in 118.',
    shortDescription: 'Discover ending in 118',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********118',
      'Address: 2992 Columbia Mine Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 7,
    name: 'Laurits Lambert Visa Card',
    description: 'Premium Visa card with exceptional benefits and worldwide acceptance, registered to Laurits Lambert, located at 3209 Railroad Street, United States. Card number ending in 870.',
    shortDescription: 'Visa ending in 870',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********870',
      'Address: 3209 Railroad Street',
      'CVV: 1',
      'UNITED STATES based'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1542902799-8d6ea02b7551?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1572002500747-b035d297ecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1575487391644-2ea3b05e0c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    ]
  },
  {
    id: 8,
    name: 'Youka Jäkeinen Visa Card',
    description: 'Visa card registered to Youka Jäkeinen, located at 1753 Sugarfoot Lane, United States. Card number ending in 627.',
    shortDescription: 'Visa ending in 627',
    price: 31.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4490********627',
      'Address: 1753 Sugarfoot Lane',
      'CVV: 4',
      'UNITED STATES based'
    ]
  },

  // Cards from Screenshot (217)
  {
    id: 9,
    name: 'Rima Coles Discover Card',
    description: 'Discover card registered to Rima Coles, located at 3339 Post Avenue, United States. Card number ending in 245.',
    shortDescription: 'Discover ending in 245',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********245',
      'Address: 3339 Post Avenue',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 10,
    name: 'Ashley Wildschut Discover Card',
    description: 'Discover card registered to Ashley Wildschut, located at 99 County Line Road, United States. Card number ending in 747.',
    shortDescription: 'Discover ending in 747',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********747',
      'Address: 99 County Line Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 11,
    name: 'Blasius Nikitina Visa Card',
    description: 'Visa card registered to Blasius Nikitina, located at 33 Sloe Lane, United Kingdom. Card number ending in 791.',
    shortDescription: 'Visa ending in 791',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4527********791',
      'Address: 33 Sloe Lane',
      'CVV: 2',
      'UNITED KINGDOM based'
    ]
  },
  {
    id: 12,
    name: 'Akbolar Lambert Visa Card',
    description: 'Visa card registered to Akbolar Lambert, located at 3572 Golden Ridge Road, United States. Card number ending in 392.',
    shortDescription: 'Visa ending in 392',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********392',
      'Address: 3572 Golden Ridge Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 13,
    name: 'Anka Ganem Discover Card',
    description: 'Discover card registered to Anka Ganem, located at 569 Olive Street, United States. Card number ending in 795.',
    shortDescription: 'Discover ending in 795',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********795',
      'Address: 569 Olive Street',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 14,
    name: 'Zhen Juan Gallardo Visa Card',
    description: 'Visa card registered to Zhen Juan Gallardo, located at 8 Main Rd, United Kingdom. Card number ending in 116.',
    shortDescription: 'Visa ending in 116',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4527********116',
      'Address: 8 Main Rd',
      'CVV: 2',
      'UNITED KINGDOM based'
    ]
  },
  {
    id: 15,
    name: 'Natalia Shields Visa Card',
    description: 'Visa card registered to Natalia Shields, located at 3615 Thompson Drive, United States. Card number ending in 407.',
    shortDescription: 'Visa ending in 407',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4490********407',
      'Address: 3615 Thompson Drive',
      'CVV: 1',
      'UNITED STATES based'
    ]
  },
  {
    id: 16,
    name: 'Arman Shalhoub Discover Card',
    description: 'Discover card registered to Arman Shalhoub, located at 2301 Mulberry Avenue, United States. Card number ending in 252.',
    shortDescription: 'Discover ending in 252',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********252',
      'Address: 2301 Mulberry Avenue',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },

  // Cards from Screenshot (218)
  {
    id: 17,
    name: 'Farkas Hong Discover Card',
    description: 'Discover card registered to Farkas Hong, located at 2400 Brown Avenue, United States. Card number ending in 107.',
    shortDescription: 'Discover ending in 107',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********107',
      'Address: 2400 Brown Avenue',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 18,
    name: 'Elma Johnson Visa Card',
    description: 'Premium Visa card registered to Elma Johnson, located at 2292 Old House Drive, United States. Card number ending in 394, featuring enhanced security features and exclusive rewards.',
    shortDescription: 'Visa ending in 394',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********394',
      'Address: 2292 Old House Drive',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 19,
    name: 'Rorg Tveit Visa Card',
    description: 'Visa card registered to Rorg Tveit, located at 4800 Roosevelt Wilson Lane, United States. Card number ending in 776.',
    shortDescription: 'Visa ending in 776',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4490********776',
      'Address: 4800 Roosevelt Wilson Lane',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 20,
    name: 'Gertruda Negassi Discover Card',
    description: 'Discover card registered to Gertruda Negassi, located at 4738 Cheshire Road, United States. Card number ending in 430.',
    shortDescription: 'Discover ending in 430',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********430',
      'Address: 4738 Cheshire Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 21,
    name: 'Anton Parenteau Mastercard',
    description: 'Mastercard registered to Anton Parenteau, located at Ollenhauer Str. 2, Germany. Card number ending in 218.',
    shortDescription: 'Mastercard ending in 218',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 5451********218',
      'Address: Ollenhauer Str. 2',
      'CVV: 3',
      'GERMANY based'
    ]
  },
  {
    id: 22,
    name: 'Simret Pacheco Mastercard',
    description: 'Mastercard registered to Simret Pacheco, located at Feldstrasse 4, Germany. Card number ending in 602.',
    shortDescription: 'Mastercard ending in 602',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1572002500747-b035d297ecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 5451********602',
      'Address: Feldstrasse 4',
      'CVV: 3',
      'GERMANY based'
    ]
  },
  {
    id: 23,
    name: 'Jesper Akudundu Mastercard',
    description: 'Mastercard registered to Jesper Akudundu, located at Groitmansträe 80, Germany. Card number ending in 179.',
    shortDescription: 'Mastercard ending in 179',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1572002500747-b035d297ecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 5451********179',
      'Address: Groitmansträe 80',
      'CVV: 3',
      'GERMANY based'
    ]
  },
  {
    id: 24,
    name: 'Helin Boulanger Visa Card',
    description: 'Visa card registered to Helin Boulanger, located at 642 Augusta Park, United States. Card number ending in 175.',
    shortDescription: 'Visa ending in 175',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********175',
      'Address: 642 Augusta Park',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },

  // Cards from Screenshot (219)
  {
    id: 25,
    name: 'Willie Bergsson Discover Card',
    description: 'Discover card registered to Willie Bergsson, located at 4798 Deercove Drive, United States. Card number ending in 746.',
    shortDescription: 'Discover ending in 746',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********746',
      'Address: 4798 Deercove Drive',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 26,
    name: 'Shinta Devari Discover Card',
    description: 'Discover card registered to Shinta Devari, located at 4914 Loving Acres Road, United States. Card number ending in 986.',
    shortDescription: 'Discover ending in 986',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********986',
      'Address: 4914 Loving Acres Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 27,
    name: 'Hq Miki Discover Card',
    description: 'Discover card registered to Hq Miki, located at 4424 Sharon Lane, United States. Card number ending in 617.',
    shortDescription: 'Discover ending in 617',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********617',
      'Address: 4424 Sharon Lane',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 28,
    name: 'Noor Lamoureux Mastercard',
    description: 'Mastercard registered to Noor Lamoureux, located at Meilingburgredder 99, Germany. Card number ending in 826.',
    shortDescription: 'Mastercard ending in 826',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1572002500747-b035d297ecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 5451********826',
      'Address: Meilingburgredder 99',
      'CVV: 3',
      'GERMANY based'
    ]
  },
  {
    id: 29,
    name: 'Modest Shalhoub Visa Card',
    description: 'Visa card registered to Modest Shalhoub, located at 2785 Sycamore Road, United States. Card number ending in 872.',
    shortDescription: 'Visa ending in 872',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4490********872',
      'Address: 2785 Sycamore Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 30,
    name: 'Martin Fribjarnarson Visa Card',
    description: 'Visa card registered to Martin Fribjarnarson, located at 612 Late Avenue, United States. Card number ending in 771.',
    shortDescription: 'Visa ending in 771',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********771',
      'Address: 612 Late Avenue',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 31,
    name: 'Hoa Zaytseva Discover Card',
    description: 'Discover card registered to Hoa Zaytseva, located at 3826 Horizon Circle, United States. Card number ending in 464.',
    shortDescription: 'Discover ending in 464',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********464',
      'Address: 3826 Horizon Circle',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 32,
    name: 'Valborg Murray Visa Card',
    description: 'Premium Visa card registered to Valborg Murray, located at 4394 Hall Place, United States. Card number ending in 839.',
    shortDescription: 'Visa ending in 839',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********839',
      'Address: 4394 Hall Place',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },

  // Cards from Screenshot (220)
  {
    id: 33,
    name: 'Hoa Zaytseva Discover Card 2',
    description: 'Discover card registered to Hoa Zaytseva, located at 3826 Horizon Circle, United States. Card number ending in 464.',
    shortDescription: 'Discover ending in 464',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********464',
      'Address: 3826 Horizon Circle',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 34,
    name: 'Valborg Murray Visa Card 2',
    description: 'Premium Visa card registered to Valborg Murray, located at 4394 Hall Place, United States. Card number ending in 839.',
    shortDescription: 'Visa ending in 839',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4479********839',
      'Address: 4394 Hall Place',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 35,
    name: 'Ben Mrton Visa Card',
    description: 'Premium Visa card registered to Ben Mrton, located at 1517 Kincheloe Road, United States. Card number ending in 516.',
    shortDescription: 'Visa ending in 516',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4490********516',
      'Address: 1517 Kincheloe Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 36,
    name: 'Ben Madetoja Visa Card',
    description: 'Visa card registered to Ben Madetoja, located at 4324 Gaynor Circle, United States. Card number ending in 769.',
    shortDescription: 'Visa ending in 769',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 4490********769',
      'Address: 4324 Gaynor Circle',
      'CVV: 1',
      'UNITED STATES based'
    ]
  },
  {
    id: 37,
    name: 'Akbolar van Soest Discover Card',
    description: 'Discover card registered to Akbolar van Soest, located at 2911 Reppert Coal Road, United States. Card number ending in 876.',
    shortDescription: 'Discover ending in 876',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1613243555988-441c1b91378f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 6011********876',
      'Address: 2911 Reppert Coal Road',
      'CVV: 2',
      'UNITED STATES based'
    ]
  },
  {
    id: 38,
    name: 'Taemi Zepeda Mastercard',
    description: 'Mastercard registered to Taemi Zepeda, located at Smmeringstr. 68, Germany. Card number ending in 677.',
    shortDescription: 'Mastercard ending in 677',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1572002500747-b035d297ecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'credit-cards',
    inStock: true,
    features: [
      'Card number: 5156********677',
      'Address: Smmeringstr. 68',
      'CVV: 3',
      'GERMANY based'
    ]
  },

  // Other products
  {
    id: 39,
    name: 'Premium Bank Account',
    description: 'Fully verified premium bank account with online banking access and debit card. This account includes a checking and savings option with competitive interest rates and minimal fees for maximum financial flexibility.',
    shortDescription: 'Verified bank account with debit card',
    price: 200,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'bank-accounts',
    inStock: true,
    features: [
      'Full online banking access',
      'Includes debit card with chip',
      'Mobile banking app access',
      'Direct deposit ready'
    ]
  },
  {
    id: 40,
    name: 'PayPal Verified Account',
    description: 'Fully verified PayPal account with business features and expanded limits. Send and receive payments internationally with this trusted digital wallet service that offers buyer and seller protection.',
    shortDescription: 'Verified digital wallet',
    price: 120,
    image: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'digital-wallets',
    inStock: true,
    features: [
      'Fully verified status',
      'Higher sending/receiving limits',
      'Business account capabilities',
      'Linked to virtual debit card'
    ]
  },
  {
    id: 41,
    name: 'Gift Card Bundle',
    description: 'Bundle of gift cards for popular online retailers and services. Includes Amazon, Apple, and more with a combined value of $200.',
    shortDescription: 'Multi-retailer gift card bundle',
    price: 180,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    category: 'gift-cards',
    inStock: true,
    features: [
      'Amazon $100 gift card',
      'Apple $50 gift card',
      'Netflix $25 gift card',
      'Spotify $25 gift card'
    ]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === 'all') {
    return products;
  }
  return products.filter(product => product.category === categoryId);
};
