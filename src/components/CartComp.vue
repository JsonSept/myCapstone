<template>
    <div class="cart">
      <h2>Your Shopping Cart</h2>
      <div v-if="cartItems.length === 0">Your cart is empty</div>
      <div v-else>
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <span>{{ item.name }}</span>
          <span>{{ item.price }}</span>
          <button @click="deleteProduct(index)">Remove</button>
        </div>
        <div>Total: {{ total }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: []
      };
    },
    computed: {
      total() {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
      }
    },
    methods: {
      removeItem(index) {
        this.cartItems.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .cart {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .cart h2 {
    margin-bottom: 10px;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .cart-item button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .cart-item button:hover {
    background-color: darkred;
  }
  </style>
  