<template>
  <navbar-comp/>
  
  <router-view/>
  <footer-comp/>
  <product-admin/>
</template>

<script>

import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  components : {
    NavbarComp,
    FooterComp,
    
  },
  data() {

  }
 }
</script>

<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f9fbfd;
  /* background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/V2Qr25y/bgo.jpg');

     background-size:cover;
     background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; */
  
}
@media screen and (max-width: 900px){
nav {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  font-size: 7px;
  height:auto;
}
nav a {
  padding:2px;
}
nav a.router-link-exact-active {
  padding: 2px;
}
}

nav a {
  font-weight: bold;
  color: #f5f6f7;
  
}
nav a:hover {
color:aqua;
}
nav a.router-link-exact-active {
  border: solid 1px black;
  padding: 5px;
  color: #000000;
  background: white;
  border-radius: 0 20px 20px 0;
  box-shadow: 2px 4px 7px rgb(6, 2, 2);
  transition: transform .6s;
  
}

nav a.router-link-exact-active:hover {
  transform: scale(0.2); 
}
</style>