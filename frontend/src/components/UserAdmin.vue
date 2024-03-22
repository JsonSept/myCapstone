<template lang="">
    <div>
    <h3>All Products</h3>
        <br><br>
        <Spinner-comp v-if="loadingProducts" />
          <slot-comp>
            <div class="cards">
                <table class="table table-striped">
                <tr>
                  <th>profile</th>
                  <th>firstname</th>
                  <th>lastname</th>
                  <th>email</th>
                  <th>password</th>
                </tr>
                <tbody v-for="item in $store.state.users" :key="item">
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="dark" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </td>
                <td>{{ item.firstname }}</td>
                <td>{{ item.lastname }}</td>
                <td>{{item.email}}</td>
                <td>{{item.password}}</td>
                <!-- <td><img :src="item.image" alt="" height="80px" width="90px"></td> -->
                <td><button  @click.prevent="rmvUser">Delete</button></td> 
            <td><router-link to="/editUser"><button>Edit</button></router-link></td>
            </tbody>
            
        </table>
            </div>
          </slot-comp>
        
    </div>
</template>

<script>
// import SlotComp from '@/components/CardSlots.vue'
// import Spinner from '@/components/Spinner.vue'
export default {
    data() {
      return {
        users:null,
        email:null,
        password:null,


      };
    },
    methods: {
        rmvUser(){
        console.log(userID);
        this.$store.dispatch('deleteUser', userID)
    }
    },
    computed: {
      async getUsers(){
         await this.$store.dispatch('getUsers')
        },
        async deleteUser() {
            await this.$store.dispatch('getUsers')
        }
      },
    mounted() {
    
      this.getUsers
      this.deleteUser
    }
  };
  </script>
  
  <style scoped>
table{
    font-size: 9px;
  border: solid white 3px;
}
  tbody,td ,th{
    border: solid white 3px;
  }
  </style>
  