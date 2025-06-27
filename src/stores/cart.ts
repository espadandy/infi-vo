import { ref, computed } from 'vue'
import type { Product } from '../data/products'

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

// Cart state
const cartItems = ref<CartItem[]>([])

// Computed properties
const totalItems = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0)
})

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.product.price * item.quantity), 0)
})

// Cart actions
const addToCart = (product: Product, quantity: number = 1) => {
  const existingItem = cartItems.value.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cartItems.value.push({
      id: product.id,
      product,
      quantity
    })
  }
}

const removeFromCart = (productId: string) => {
  const index = cartItems.value.findIndex(item => item.id === productId)
  if (index > -1) {
    cartItems.value.splice(index, 1)
  }
}

const updateQuantity = (productId: string, quantity: number) => {
  const item = cartItems.value.find(item => item.id === productId)
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
    }
  }
}

const clearCart = () => {
  cartItems.value = []
}

// Export the cart store
export const useCart = () => {
  return {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
} 