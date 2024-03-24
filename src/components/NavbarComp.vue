<template>
    <nav class="navbar fixed-top navbar-light bg-dark">
 <div class="container-fluid">
   <a id='js' class="navbar-brand text-light" href="#">JS Pastry's</a>
 </div>
 <div class="container-fluid">
       <nav  v-if="showNavbar">
         <router-link to="/">Landing</router-link> |
         <!-- <router-link v-if="!$cookies.get('jwt')" to="/register">Register</router-link> | -->
         <router-link to="/login">Login</router-link> |
         <router-link to="/home">Home</router-link> |
         <router-link to="/about">About</router-link> |
         <router-link to="/store">Store</router-link> |
         <router-link to="/checkout">Checkout</router-link> |
         <router-link to="/contact">Contact</router-link>
       </nav>
       <router-link to="/cart">
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
       </router-link>
      <router-link to="/profile">
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
      </router-link>
       <!-- <button v-if="$cookies.get('jwt')" @click="logout">Logout</button> -->
       <!-- Button trigger modal -->
      <router-link to="userAdmin">view Users</router-link>

      
         
     
   
   
      
   </div>
</nav>
</template>
<script>

export default {
  
   data() {
   return {
     showNavbar: true
   };
 },
 created() {
   
   if (this.$routes === '/login' || this.$routes === '/register') {
     this.showNavbar = true;
   }
 }
}
</script>
<style>
#js {
   box-shadow: 2px 4px 7px rgb(6, 2, 2);
   border-radius: 30px;
}
body {
   padding-top: 10%;
}
.navbar {
   flex-wrap: nowrap;

}

@media screen and (max-width: 299px) {
    

    nav a {
        font-size: 3px;
        font-weight: 2px;
    }
}
   .main {
       display:flex;
       text-align: center;
   }
</style>