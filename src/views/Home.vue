<template>
  <div class="home">
    <h2 class="title">Pick your product below</h2>
    <div class="grid">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="card"
        @click="goToProduct(product.id)"
      >
        <div class="img-container">
          <img :src="getProductMainImage(product.id)" :alt="product.label" />
          <div class="label-overlay">{{ product.shortName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { products } from '../data/products'
import { getProductMainImage } from '../utils/productImages'

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
  background: none;
  border-radius: 12px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  box-shadow: none;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  transition: box-shadow 0.3s;
}
.card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.img-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.label-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10,35,66,0.85);
  color: #fff;
  text-align: center;
  padding: 6px 0;
  font-size: 0.95em;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  border-radius: 0 0 12px 12px;
  letter-spacing: 0.03em;
}
</style> 