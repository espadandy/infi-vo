<template>
  <div class="home">
    <h2 class="title">Pick your free product below:</h2>
    <div class="grid">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="card"
        @click="goToProduct(product.id)"
      >
        <img :src="product.img" :alt="product.label" />
        <div class="label">{{ product.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { products } from '../data/products'

const router = useRouter()

const goToProduct = (productId: string) => {
  router.push(`/product/${productId}`)
}
</script>

<style scoped>
.title {
  text-align: center;
  margin: 32px 0 24px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}
.card {
  background: #f7f7f7;
  border-radius: 8px;
  padding: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.card img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  margin-bottom: 16px;
}
.label {
  background: #0a2342;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 12px 0;
  font-weight: bold;
  border-radius: 0 0 8px 8px;
  margin-top: auto;
}
</style> 