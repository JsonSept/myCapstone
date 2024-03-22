
<template>
    <div>

    </div v-if='getProducts'>
    <!-- <spinner-comp/> -->
    <div>
        
            <div class="row">
                
                <!-- <div class="col-lg-4" v-for="item in $store.state.products" :key='item'> -->
                  <div class="struct">
      <div class="card" v-for="item in $store.state.products" :key="item" style="width: 15rem;">
          <img :src="item.image" alt="" style="height:100px; width:150px; margin-left: 14%;" >
              <div class="card-body">
                <h6 class="card-title">{{item.name}}</h6>
                <p class="card-text">{{item.description}}</p>
                <h6>R{{item.price}}.00</h6>
                <a href="#" class="btn"><button>Add to cart</button></a>
              </div>
      </div>
  </div>
                </div>
                    
            </div>
  
  
  
        <!-- </slot> -->
    <!-- </div> -->
  </template>
  
  <script>
   import SpinnerComp from '../components/SpinnerComp.vue'
   export default {
       components: {
        SpinnerComp,
    },
      data() {
        return {
          products:null,
        };
      },
      methods: {
      
      },
      computed: {
        async getProducts(){
           await this.$store.dispatch('getProducts')
          },
       async getproduct() {
        await this.store.dispatch('getProduct')
      },
      async deleteProduct() {
          await this.$store.dispatch('')
      }
        },
      mounted() {
        this.getProducts
        // this.getProduct
        this.deleteProduct
      }
    };
  </script>
  
  <style>

  img {
    /* display: flex;
    justify-content: center;
    text-align: center; */

    margin-right: 2%;
  }
  .card {
    display:grid;
    justify-content: center;
    
  font-size: 10px;
  box-shadow: 1px 1px 5px rgb(255, 255, 255);
  
   padding: 10px; 
  height : 40vh;
  
  border:1px solid black;
  }
  @media screen and (max-width: 300px) {
    img {
        width: 10px;
        
    }
 .card {
    
 }
 p {
    font-size: 8px;
 }
 h6 {
    font-size: 9px;
 }
 
 button {
    height: 20px;
    width: 80px;
    font-size: 5px;
 }
 button:hover {
    box-shadow: 3px 2px 3px #000000;
 }
.struct {
    
}
 
  }
  .card:hover{
  transform: scale(1.05);
  box-shadow: 3px 2px 3px #000000;
  }
  img{
  /* padding-top: 3%;
  padding-right: 0%;
  padding-left: 0%;
  margin-left: 0%;
  margin-bottom: 5%; */
  width: 50px;
  height: 10px;
  }
  
  button:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em #ffffff,
      0 0 0 2px rgb(0, 0, 0),
      0em 0em 1em #000000;
    }
    .struct  {
      justify-content: space-around;
          /* justify-content:center; */
          display: flex;
          flex-wrap:wrap;
          /* padding:20px; */
      }
  </style>