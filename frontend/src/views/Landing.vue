<template lang="">
    <div class='btn'>
        <router-link to="/register"><button class='btn1'>Register</button></router-link><br>
        <router-link to="/login"><button class='btn1'>Login</button></router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    body {
        background-color:black;
    }
    .btn {
        margin-top: 8%;
        padding-top:2%; 
    }
    .btn1 {
        width: 100px;
        box-shadow: 3px 3px 5px rgb(0, 0, 0);
        border-radius: 5px 5px 5px 0;
        display:flex;
        flex-wrap: wrap;
        justify-content:center;
       
        /* text-align:center; */

    }
    button:hover {
        transform: scale(1.05);
    }
    
    @media screen and (max-width: 900px) {
.btn {
    margin-top: 50%;
     color:aqua;
}
    }
</style>