<template>
  <div class="profile">
    <h2 class="title">我的</h2>
    <div class="profile-content">
      <div class="user-info">
        <div class="avatar">
          <img src="/avator_default.png" alt="用户头像" />
        </div>
        <div class="user-details">
          <h3>用户名</h3>
          <p>user@example.com</p>
        </div>
      </div>
      
      <div class="menu-section">
        <h3>账户管理</h3>
        <div class="menu-item">
          <span>个人信息</span>
          <span class="arrow">></span>
        </div>
        <div class="menu-item">
          <span>收货地址</span>
          <span class="arrow">></span>
        </div>
        <div class="menu-item">
          <span>支付方式</span>
          <span class="arrow">></span>
        </div>
      </div>
      
      <div class="menu-section">
        <h3>订单管理</h3>
        <div class="menu-item">
          <span>我的订单</span>
          <span class="arrow">></span>
        </div>
        <div class="menu-item">
          <span>待付款</span>
          <span class="arrow">></span>
        </div>
        <div class="menu-item">
          <span>待收货</span>
          <span class="arrow">></span>
        </div>
      </div>
      
      <div class="menu-section">
        <h3>设置</h3>
        <div class="menu-item">
          <span>通知设置</span>
          <span class="arrow">></span>
        </div>
        <div class="menu-item">
          <span>隐私设置</span>
          <span class="arrow">></span>
        </div>
        <div class="menu-item">
          <span>关于我们</span>
          <span class="arrow">></span>
        </div>
      </div>
      
      <div class="logout-section">
        <button class="logout-btn">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 这里可以添加用户信息管理和退出登录的逻辑
</script>

<style scoped>
.profile {
  padding: 20px;
}
.title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}
.profile-content {
  max-width: 800px;
  margin: 0 auto;
}
.user-info {
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}
.avatar {
  margin-right: 20px;
}
.avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.user-details h3 {
  margin: 0 0 5px 0;
  color: #333;
}
.user-details p {
  margin: 0;
  color: #666;
}
.menu-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}
.menu-section h3 {
  padding: 15px 20px;
  margin: 0;
  border-bottom: 1px solid #eee;
  color: #333;
  font-size: 16px;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  transition: background-color 0.2s;
}
.menu-item:hover {
  background-color: #f8f9fa;
}
.menu-item:last-child {
  border-bottom: none;
}
.arrow {
  color: #ccc;
  font-size: 18px;
}
.logout-section {
  margin-top: 30px;
}
.logout-btn {
  width: 100%;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
.logout-btn:hover {
  background: #c0392b;
}
</style> 