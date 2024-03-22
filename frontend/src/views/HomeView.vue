<template>
  <div class="container">
   <h1 class="header text-white">WELCOME</h1>
  </div>
  
  
  
      
  </template>
  
  
  
  <style>
  
  * {
    margin:0;
    padding:0;
  }
  img {
   /* height: fit-content; */
   height:max-content;
   width: max-content;
    
  }
  body {
     background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/V2Qr25y/bgo.jpg');

     background-size:cover;
     background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  
  }
  .container {
    display:flex;
    justify-content: center;
    
  }
  @media screen and (max-width: 300px) {
    .container {
      margin-top: 100%;
      margin-bottom: 40%;
    }
  }
  .logo {
    height:60vh;
    width:40%;
    padding-bottom: 10%;
    /* margin-bottom: 8%; */
  }
  .header {
    box-shadow: 9px 9px 9px black;
    text-align: center;
  }
  
  /* .firstdiv {
    background-color: rgb(15, 14, 14);
  }
  .seconddiv {
    background-color: rgb(29, 28, 28);
  } */
  </style>
  <script>
  export default {
   
    data() {
      return {
      
    }
  },
  }
  </script>
  