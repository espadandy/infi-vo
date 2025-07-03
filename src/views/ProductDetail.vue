<template>
  <div class="product-detail" v-if="product">
    <div class="breadcrumb">
      <router-link to="/" class="breadcrumb-link">首页</router-link>
      <span class="breadcrumb-separator"> > </span>
      <span class="breadcrumb-current">{{ product.shortName }}</span>
    </div>

    <div class="product-container">
      <!-- Product Image Section -->
      <div class="product-image-section">
        <div class="main-image">
          <img :src="selectedImage" :alt="product?.name" />
        </div>
        <div class="image-thumbnails">
          <img
            v-for="img in getProductImages(product?.id)"
            :key="img"
            :src="img"
            class="thumbnail"
            :class="{ selected: img === selectedImage }"
            @click="selectedImage = img"
            :alt="product?.name"
          />
        </div>
      </div>

      <!-- Product Info Section -->
      <div class="product-info-section">
        <h1 class="product-title">{{ product.name }}</h1>
        
        <div class="rating-stock-row">
          <div class="product-rating">
            <div class="stars">
              <span v-for="i in 5" :key="i" class="star" :class="{ 'filled': i <= Math.floor(product.rating) }">★</span>
            </div>
            <span class="rating-text">{{ product.rating }} ({{ product.reviews }} 评价)</span>
          </div>
        </div>

        <div class="product-price">
          <span class="price-amount">¥{{ product.price }}</span>
        </div>

        <div class="product-description">
          <h3>产品描述</h3>
          <p>{{ product.description }}</p>
        </div>

        <div class="product-actions">
          <button class="add-to-cart-btn" @click="addToCartHandler">
            加入购物车
          </button>
        </div>
      </div>
    </div>

    <!-- Product Details Tabs -->
    <div class="product-tabs">
      <div class="tab-buttons">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          class="tab-button"
          :class="{ 'active': activeTab === tab.id }"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="tab-content">
        <!-- Details Tab -->
        <div v-if="activeTab === 'details'" class="tab-panel">
          <h3>产品详情</h3>
          <ul class="details-list">
            <li v-for="detail in product.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>

        <!-- Specifications Tab -->
        <div v-if="activeTab === 'specifications'" class="tab-panel">
          <h3>产品规格</h3>
          <div class="specifications-table">
            <div v-for="(value, key) in product.specifications" :key="key" class="spec-row">
              <span class="spec-label">{{ key }}:</span>
              <span class="spec-value">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="product-not-found">
    <h2>产品未找到</h2>
    <p>抱歉，您查找的产品不存在。</p>
    <router-link to="/" class="back-home">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById, getProductByLabel, type Product } from '../data/products'
import { useCart } from '../stores/cart'
import { getProductImages } from '../utils/productImages'

const route = useRoute()
const { addToCart } = useCart()

const product = ref<Product | undefined>(undefined)
const activeTab = ref('details')
const selectedImage = ref('')

const tabs = [
  { id: 'details', label: '产品详情' },
  { id: 'specifications', label: '产品规格' },
]

onMounted(() => {
  const productId = route.params.id as string
  product.value = getProductById(productId)
  
  if (!product.value) {
    // Try to find by label as fallback
    const productLabel = route.params.id as string
    product.value = getProductByLabel(productLabel)
  }
  if (product.value) {
    const imgs = getProductImages(product.value.id)
    selectedImage.value = imgs.length > 0 ? imgs[0] : ''
  }
})

watch(product, (newProduct) => {
  if (newProduct) {
    const imgs = getProductImages(newProduct.id)
    selectedImage.value = imgs.length > 0 ? imgs[0] : ''
  }
})

const addToCartHandler = () => {
  if (product.value) {
    addToCart(product.value)
    alert(`已将 ${product.value.name} 加入购物车`)
  }
}

</script>

<style scoped>
.product-detail {
  margin: 0 auto;
  padding: 20px 0;
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 14px;
  text-align: left;
}

.breadcrumb-link {
  color: #0a2342;
  text-decoration: none;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-separator {
  margin: 0 10px;
  color: #666;
}

.breadcrumb-current {
  color: #666;
}

.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 40px;
}

.product-image-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-image img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.image-thumbnails {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.2s;
}

.thumbnail.selected {
  border: 2px solid #0a2342;
}

.product-info-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.product-title {
  font-size: 2em;
  color: #333;
  margin: 0;
  text-align: left;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ddd;
  font-size: 18px;
}

.star.filled {
  color: #f39c12;
}

.rating-text {
  color: #666;
  font-size: 14px;
}

.product-price {
  margin: 20px 0;
}

.price-amount {
  font-size: 2.5em;
  font-weight: bold;
  color: #e74c3c;
}

.product-description {
  text-align: left;
}

.product-description h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.product-description p {
  color: #666;
  line-height: 1.6;
}

.product-actions {
  display: flex;
  gap: 15px;
  margin: 20px 0;
}

.add-to-cart-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn {
  background: #0a2342;
  color: white;
}

.add-to-cart-btn:hover:not(:disabled) {
  background: #1a3a5a;
}

.add-to-cart-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.product-tabs {
  margin: 40px 0;
}

.tab-buttons {
  display: flex;
  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
}

.tab-button {
  padding: 12px 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab-button.active {
  color: #0a2342;
  border-bottom-color: #0a2342;
}

.tab-button:hover {
  color: #0a2342;
}

.tab-panel h3 {
  margin: 0 0 20px 0;
  color: #333;
}

.details-list {
  list-style: none;
  padding: 0;
}

.details-list li {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  color: #2c3e50;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
}

.details-list li:before {
  content: "✓";
  color: #27ae60;
  font-weight: bold;
  margin-right: 10px;
}

.specifications-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  font-size: 13px;
}

.spec-row {
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  background-color: #fafafa;
}

.spec-label {
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  font-size: 12px;
}

.spec-value {
  color: #999;
  font-size: 13px;
  line-height: 1.4;
  word-break: break-word;
}

.product-not-found {
  text-align: center;
  padding: 60px 20px;
}

.product-not-found h2 {
  color: #333;
  margin-bottom: 20px;
}

.product-not-found p {
  color: #666;
  margin-bottom: 30px;
}

.back-home {
  display: inline-block;
  background: #0a2342;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.back-home:hover {
  background: #1a3a5a;
}

@media (max-width: 768px) {
  .product-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .product-actions {
    flex-direction: column;
  }
  
  .tab-buttons {
    flex-wrap: wrap;
  }
}

.rating-stock-row {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style> 