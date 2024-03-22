import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = "http://localhost:8076";
// const baseUrl = "https://capstone-social-app.onrender.com";



export default createStore({
  state: {
    products: null,
    users: null,
    loggedIn:false
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.products;
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setProduct(state, payload) {
      state.products = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    setLogged(state, payload) {
      state.loggedIn = payload;
    },
    setUser(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async registerUser({commit}, newUser){
      console.log(newUser);
      let {data} = await axios.post(baseUrl+'/users',newUser)
      alert(data.msg)
      window.location.reload()
     },
     async loginUser({commit}, currentUser){
      console.log(user);
      let {data} = await axios.post(baseUrl+'/login',currentUser)
      $cookies.set('jwt',data.token)
      alert(data.msg)
      await router.push('/') 
      //push - keeps the browser histore of the visited page
      commit('setLogged',true)

      window.location.reload()
     },

      async logout(context){
        let cookies = $cookies.keys()
        $cookies.remove('jwt')
        window.location.reload()
        let {data} = await axios.delete(baseUrl + '/logout')
        alert(data.msg)
        
      },


    async getProducts({commit}) {
      let { data } = await axios.get(baseUrl + "/products");
      commit("setProducts", data);
    },
    async getProduct({ commit }) {
      let { data } = await axios.get(baseUrl + "/products");
      commit("setProduct", data);
    },
    async deleteProduct({ commit }, name) {
      let { data } = await axios.get(baseUrl + "/products/" + name);
      commit("setProduct", data);
      window.location.reload();
    },

    //users
    async getUsers({ commit }) {
      let { data } = await axios.get(baseUrl + "/users");
      commit("setUsers", data);
    },

    async addUser(context, newUser) {
      try {
        console.log(newUser);
        let result = (await axios.post(baseUrl + "/users", newUser)).data;
        if (result) {
          context.dispatch("getUsers");
        }
        alert(data.msg)
        window.location.reload()
      } catch (e) {
        alert(e.message);
      }
    },

    async deleteUser(context,userID) {
        let result = (await axios.delete(baseUrl + "/users/" + userID)).data
        console.log(result);
        if(result) {
          context.dispatch('getUsers')
        }
      
    },

    async editUser({ commit }) {
      let { data } = await axios.get(baseUrl + "/users/"+ userID);
      commit("setUser", data);
    },
  },
  modules: {},
});