export interface Product {
  id: string
  name: string
  label: string
  img: string
  price: number
  description: string
  details: string[]
  specifications: Record<string, string>
  features: string[]
  category: string
  inStock: boolean
  rating: number
  reviews: number
}

export const products: Product[] = [
  {
    id: 'space-force-coin',
    name: 'Space Force Coin',
    label: 'SPACE FORCE COIN',
    img: '/infi-vo/space-force.png',
    price: 99.99,
    description: 'A commemorative coin celebrating the United States Space Force, featuring detailed engravings and premium metal construction.',
    details: [
      'Commemorative Space Force design',
      'Premium metal construction',
      'Detailed engravings',
      'Collector\'s edition packaging',
      'Certificate of authenticity included'
    ],
    specifications: {
      'Material': 'Premium Metal Alloy',
      'Diameter': '1.5 inches',
      'Weight': '28 grams',
      'Finish': 'Antique Silver',
      'Packaging': 'Collector\'s Box'
    },
    features: [
      'Official Space Force insignia',
      'Limited edition numbering',
      'Display stand included',
      'Perfect for collectors',
      'Great gift idea'
    ],
    category: 'Commemorative Coins',
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2nd-amendment-coin',
    name: '2nd Amendment Coin',
    label: '2ND AMENDMENT COIN',
    img: '/infi-vo/space-force.png',
    price: 89.99,
    description: 'Honor the Second Amendment with this beautifully crafted commemorative coin featuring patriotic designs and premium quality.',
    details: [
      'Second Amendment tribute design',
      'Patriotic color scheme',
      'High-quality metal construction',
      'Collector\'s edition',
      'Includes display case'
    ],
    specifications: {
      'Material': 'Brass with Gold Plating',
      'Diameter': '1.5 inches',
      'Weight': '25 grams',
      'Finish': 'Gold Plated',
      'Packaging': 'Velvet Display Case'
    },
    features: [
      'Constitutional tribute design',
      'Patriotic symbols',
      'Limited production run',
      'Certificate included',
      'Perfect for gun enthusiasts'
    ],
    category: 'Patriotic Coins',
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'revenge-coin',
    name: 'Revenge Coin',
    label: 'REVENGE COIN',
    img: '/infi-vo/space-force.png',
    price: 79.99,
    description: 'A unique commemorative coin with a bold revenge theme, perfect for collectors who appreciate edgy designs.',
    details: [
      'Bold revenge-themed design',
      'Dark metal finish',
      'Intricate detailing',
      'Limited edition',
      'Collector\'s packaging'
    ],
    specifications: {
      'Material': 'Dark Metal Alloy',
      'Diameter': '1.5 inches',
      'Weight': '30 grams',
      'Finish': 'Dark Antique',
      'Packaging': 'Black Collector\'s Box'
    },
    features: [
      'Unique revenge theme',
      'Dark aesthetic design',
      'Limited availability',
      'Display stand included',
      'Conversation piece'
    ],
    category: 'Themed Coins',
    inStock: true,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 'blue-lives-matter',
    name: 'Blue Lives Matter Coin',
    label: 'BLUE LIVES MATTER',
    img: '/infi-vo/space-force.png',
    price: 94.99,
    description: 'Show your support for law enforcement with this Blue Lives Matter commemorative coin featuring police symbols and blue color scheme.',
    details: [
      'Blue Lives Matter tribute',
      'Police badge design',
      'Blue color scheme',
      'Support law enforcement',
      'Collector\'s edition'
    ],
    specifications: {
      'Material': 'Blue-tinted Metal',
      'Diameter': '1.5 inches',
      'Weight': '27 grams',
      'Finish': 'Blue Antique',
      'Packaging': 'Blue Display Case'
    },
    features: [
      'Police badge design',
      'Blue Lives Matter theme',
      'Support law enforcement',
      'Limited edition',
      'Perfect for police supporters'
    ],
    category: 'Support Coins',
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'gold-bar',
    name: 'Gold Bar Coin',
    label: 'GOLD BAR',
    img: '/infi-vo/space-force.png',
    price: 199.99,
    description: 'A premium gold bar commemorative coin with luxurious finish and high-quality craftsmanship, perfect for serious collectors.',
    details: [
      'Gold bar design',
      'Premium gold finish',
      'High-quality craftsmanship',
      'Luxury packaging',
      'Investment grade'
    ],
    specifications: {
      'Material': 'Gold-plated Metal',
      'Diameter': '1.5 inches',
      'Weight': '35 grams',
      'Finish': '24K Gold Plated',
      'Packaging': 'Luxury Wooden Box'
    },
    features: [
      'Gold bar appearance',
      'Premium finish',
      'Investment quality',
      'Luxury packaging',
      'Certificate of authenticity'
    ],
    category: 'Premium Coins',
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 'lets-go-brandon',
    name: 'Let\'s Go Brandon Coin',
    label: 'LET\'S GO BRANDON',
    img: '/infi-vo/space-force.png',
    price: 84.99,
    description: 'A patriotic coin featuring the popular "Let\'s Go Brandon" phrase with American flag design and patriotic colors.',
    details: [
      'Let\'s Go Brandon design',
      'American flag theme',
      'Patriotic colors',
      'Limited edition',
      'Collector\'s item'
    ],
    specifications: {
      'Material': 'Patriotic Metal Alloy',
      'Diameter': '1.5 inches',
      'Weight': '26 grams',
      'Finish': 'Red, White & Blue',
      'Packaging': 'Patriotic Box'
    },
    features: [
      'Popular phrase design',
      'American flag theme',
      'Patriotic colors',
      'Limited availability',
      'Great conversation starter'
    ],
    category: 'Patriotic Coins',
    inStock: true,
    rating: 4.8,
    reviews: 178
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductByLabel = (label: string): Product | undefined => {
  return products.find(product => product.label === label)
} 