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
         linkie
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