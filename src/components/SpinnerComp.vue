<template>
    <div class="spinner-grow" style="width: 6rem; height: 5rem;" role="status">
   <!-- <span class="visually-hidden">Loading...</span> -->
 </div>
 
 </template>
 <script>
 export default {
     
 }
 </script>
 <style>
     @keyframes spinner-border {
   to { transform: rotate(360deg); }
 }
 
 @keyframes spinner-grow {
   0% {
     transform: scale(0);
   }
   50% {
     opacity: 1;
     transform: none;
   }
   
 }
 </style>