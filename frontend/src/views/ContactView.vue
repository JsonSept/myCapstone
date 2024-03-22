<template>
    <div class="contact-form">
      <h2>Contact Us</h2>
      <form action="https://formspree.io/f/xyyrdjdl"
  method="POST">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea name="message" id="message" rows="4" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Here you can implement logic to send the form data to your backend or perform any other action
        console.log('Form submitted with data:', this.formData);
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-form {
    padding-top: 10%;
    font-size: small;
    max-width: 300px;
    margin: 0 auto;
    height:100vh;
    /* box-shadow: 1px 1px 5px rgb(6, 2, 2); */
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    color:#000000;
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 4px;
    box-shadow: 1px 1px 5px rgb(6, 2, 2);
  }
  
  button {
    padding: 10px 20px;
    background-color: #7bff00;
    color: #0b0a0a;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 1px 1px 5px rgb(6, 2, 2);
  }
  
  button:hover {
    background-color: #00b321;
  }
  @media screen and (max-width: 300px) {
    .form-group {
        padding-top: 10%;
        margin-top: 20%;
        margin-bottom:30px;
    }
    input {
        width: 200px;
    }
    button:hover {
        background-color: #0b0a0a;
        color:white;
    }
  }
  </style>