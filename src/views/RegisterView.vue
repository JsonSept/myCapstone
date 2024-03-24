<template>
    <div>
        <input type="firstname" firstname="firstname" placeholder="firstname" v-model="payload.firstname"><br><br>
        <input type="lastname" lastname="lastname" placeholder="lastname" v-model="payload.lastname"><br><br>
        <input type="email" name="email" placeholder="email" v-model="payload.email"><br><br>
        <input type="password" name="password" placeholder="password" v-model="payload.password"><br><br>
        <router-link to="/login"><button type="button" @click.prevent="registration">SignUp</button></router-link>
         <!-- {{ $store.state.loggedIn }} -->
        <router-link to="/login"><button @click.prevent="loginUser">Login</button></router-link>
    </div>
</template>
<script>
import Swal from 'sweetalert2'

export default {
    name:'sweetalert2demo',
    methods:{
        handleAlertClick(){
            swal("Good job!", "You clicked the button!", "success")
        }
    },
    data(){
        return {
            payload: {
                firstname:null,
                lastname:null,
                email:null,
                password:null
            },
            // showNavbar: false
        }
    },
    created() {
    
    // if (this.$routes === '/login' || this.$routes === '/register') {
    //   this.showNavbar = true;
    // }
  },
    computed: {
        addUser(){
            
            this.$store.dispatch("addUser",this.$data)
        },
        loginUser(){
            this.$store.dispatch('loginUser',this.$data)
        }
    },
    methods : {
        registration(){
            console.log(this.payload);
            this.$store.dispatch('addUser',this.payload)
            // this.$route.push({name: 'login'})
        }
    }
}
</script>
<style>
    text {
        color:black;
    }
</style>

