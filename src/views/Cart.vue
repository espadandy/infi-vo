<template>
  <div class="cart">
    <h2 class="title">购物车</h2>
    <div class="cart-content">
      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>您的购物车是空的</p>
        <router-link to="/" class="continue-shopping">继续购物</router-link>
      </div>
      <div v-else class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <!-- img :src="item.product.img" :alt="item.product.name" class="item-image" /-->
          <div class="item-details">
            <h3>{{ item.product.name }}</h3>
            <p class="price">¥{{ item.product.price }}</p>
            <div class="quantity-controls">
              <button @click="updateQuantity(item.id, item.quantity - 1)" class="quantity-btn">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="updateQuantity(item.id, item.quantity + 1)" class="quantity-btn">+</button>
            </div>
          </div>
          <div class="item-actions">
            <p class="item-total">¥{{ (item.product.price * item.quantity).toFixed(2) }}</p>
            <button @click="removeFromCart(item.id)" class="remove-btn">删除</button>
          </div>
        </div>
        <div class="cart-summary">
          <div class="summary-row">
            <span>商品总数:</span>
            <span>{{ totalItems }} 件</span>
          </div>
          <div class="summary-row total">
            <span>总计:</span>
            <span>¥{{ totalPrice.toFixed(2) }}</span>
          </div>
          <button class="checkout-btn">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '../stores/cart'

const { 
  cartItems, 
  totalItems, 
  totalPrice, 
  removeFromCart, 
  updateQuantity 
} = useCart()
</script>

<style scoped>

.cart {
  padding: 10px 0;
}

.title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}
.cart-content {
  margin: 0 auto;
  max-width: 800px;
}
.empty-cart {
  text-align: center;
  padding: 50px;
}
.continue-shopping {
  display: inline-block;
  background: #0a2342;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}
.cart-items {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.cart-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.item-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
}
.item-details {
  flex: 1;
}
.item-details h3 {
  margin: 0 0 10px 0;
  color: #333;
}
.price {
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
  margin: 0 0 10px 0;
}
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}
.quantity-btn {
  background: #f0f0f0;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.quantity-btn:hover {
  background: #e0e0e0;
}
.quantity {
  font-weight: bold;
  min-width: 30px;
  text-align: center;
}
.item-actions {
  margin-left: 20px;
  text-align: right;
}
.item-total {
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
  margin: 0 0 10px 0;
}
.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.remove-btn:hover {
  background: #c0392b;
}
.cart-summary {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 0 0 8px 8px;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
}
.summary-row.total {
  font-size: 20px;
  font-weight: bold;
  color: #e74c3c;
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-top: 10px;
}
.checkout-btn {
  background: #27ae60;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
}
.checkout-btn:hover {
  background: #229954;
}
</style> 