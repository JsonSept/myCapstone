<template>
    <div class="user">
        
      <div class="user-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
       <h1>Firstname:</h1>
       <h1>Lastname:</h1>
       <h1>Email:</h1>
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
        this.$Store.dispatch('edit');
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