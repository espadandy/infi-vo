<template>
  <div class="header">
    <div class="logo">
      <img src="/infi-vo.png" alt="INFI-VO" />
    </div>
    
    <nav class="navigation">
      <router-link to="/" class="nav-item" active-class="active">
        首页
      </router-link>
      <router-link to="/cart" class="nav-item cart-link" active-class="active">
        购物车
        <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
      </router-link>
      <router-link to="/profile" class="nav-item" active-class="active">
        我的
      </router-link>
    </nav>    
  </div>
</template>

<script setup lang="ts">
import { useCart } from '../stores/cart'

const { totalItems } = useCart()
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #eee;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
  gap: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5em;
}

.logo img {
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}

.navigation {
  display: flex;
  gap: 20px;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item:hover {
  background: #f5f5f5;
  color: #0a2342;
}

.nav-item.active {
  background: #0a2342;
  color: white;
}

.cart-link {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}
</style> 