export interface Product {
  id: string
  name: string
  label: string
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
    id: 'product-1',
    name: '同声传译AI翻译蓝牙耳机Q88精面数显不入耳超好音质降噪耳机工厂',
    label: '同声传译AI翻译蓝牙耳机Q88精面数显不入耳超好音质降噪耳机工厂',
    price: 33.90,
    description: '同声传译AI翻译蓝牙耳机Q88精面数显不入耳超好音质降噪耳机工厂',
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
    id: 'product-2',
    name: 'Infi-vo PSH-400电脑头戴式吃鸡RGB耳机7.1USB电脑电竞游戏有线耳麦',
    label: 'Infi-vo PSH-400电脑头戴式吃鸡RGB耳机7.1USB电脑电竞游戏有线耳麦',
    price: 30.00,
    description: 'Infi-vo PSH-400电脑头戴式吃鸡RGB耳机7.1USB电脑电竞游戏有线耳麦',
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
    id: 'product-3',
    name: 'Infi-vo S602电竞游戏USB耳机头戴式7.1声道吃鸡笔记本台式电脑有线带',
    label: 'Infi-vo S602电竞游戏USB耳机头戴式7.1声道吃鸡笔记本台式电脑有线带',
    price: 45.00,
    description: 'Infi-vo S602电竞游戏USB耳机头戴式7.1声道吃鸡笔记本台式电脑有线带',
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
    id: 'product-4',
    name: '跨境亚马逊爆款S450TWS无线蓝牙耳机5.3透明仓短柄耳机超长续航',
    label: '跨境亚马逊爆款S450TWS无线蓝牙耳机5.3透明仓短柄耳机超长续航',
    price: 26.00,
    description: '跨境亚马逊爆款S450TWS无线蓝牙耳机5.3透明仓短柄耳机超长续航',
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
    id: 'product-5',
    name: '跨境新品孔位带USB插座 家用英规排插面板多孔开关带延长线插排',
    label: '跨境新品孔位带USB插座 家用英规排插面板多孔开关带延长线插排',
    price: 17.30,
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
    id: 'product-6',
    name: 'LED涂鸦wifi智能蓝牙灯泡app控制涂鸦rgb球泡变色led灯泡',
    label: 'LED涂鸦wifi智能蓝牙灯泡app控制涂鸦rgb球泡变色led灯泡',
    price: 6.00,
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
  },
  {
    id: 'product-7',
    name: '新款智能ai翻译耳机彩屏降噪蓝牙耳机跨境爆款私模开放式挂耳式',
    label: '新款智能ai翻译耳机彩屏降噪蓝牙耳机跨境爆款私模开放式挂耳式',
    price: 53.90,
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
  },
  {
    id: 'product-8',
    name: '三合一无线充立式支架15W快充适用苹果手机手表iWatch 无线充电器',
    label: '三合一无线充立式支架15W快充适用苹果手机手表iWatch 无线充电器',
    price: 28.80,
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
  },
  {
    id: 'product-9',
    name: '新款挂耳式XG99蓝牙耳机OWS大电量数显屏幕超长续航跨境批发代发',
    label: '新款挂耳式XG99蓝牙耳机OWS大电量数显屏幕超长续航跨境批发代发',
    price: 34.50,
    description: '新款挂耳式XG99蓝牙耳机OWS大电量数显屏幕超长续航跨境批发代发',
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
  },
  {
    id: 'product-10',
    name: '新款私模手机无线充电器多功能快充15W 时钟闹钟手表耳机无线充电',
    label: '新款私模手机无线充电器多功能快充15W 时钟闹钟手表耳机无线充电',
    price: 47.00,
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
  },
  {
    id: 'product-11',
    name: '新款二合一时钟闹钟无线充适用苹果14ProMax跨境极简风格源头厂家',
    label: '新款二合一时钟闹钟无线充适用苹果14ProMax跨境极简风格源头厂家',
    price: 84.99,
    description: '新款二合一时钟闹钟无线充适用苹果14ProMax跨境极简风格源头厂家',
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
  },
  {
    id: 'product-12',
    name: '带数码管显示通用电容笔适用apple pencil触屏触控苹果ipad手写笔',
    label: '带数码管显示通用电容笔适用apple pencil触屏触控苹果ipad手写笔',
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