<template>
    <div class="user">
      <img :src="user.image" alt="User Image" class="user-image" />
      <div class="user-info">
        <p class="user-name">{{ user.firstName }} {{ user.lastName }}</p>
        <p class="user-email">{{ user.email }}</p>
      </div>
      <button @click="editUser" class="edit-button">Edit</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    methods: {
      editUser() {
        // Emit an event to notify parent component about edit action
        this.$emit('edit');
      }
    }
  };
  </script>
  
  <style scoped>
  .user {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .user-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  .user-info {
    flex: 1;
  }
  
  .user-name {
    font-size: 1.2em;
    margin-bottom: 5px;
  }
  </style>