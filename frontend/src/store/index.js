import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = "http://localhost:8076";
// const baseUrl = "https://capstone-social-app.onrender.com/";

// function ProductDetails(props) {
//   const { prodID } = props.match.params; // Get the product ID from route parameters
//   const [product, setProduct] = useState({});
//   useEffect(() => {
//     axios.get(`https://nodejs-eomp-vi7f.onrender.com`)
//       .then((res) => {
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.error('Error fetching product details:', err);
//       });
//   }, [prodID]);
//   return (
//     <div>
//       <h1>{products.prodName}</h1>
//       <p>{product.amount}</p>
//     </div>
//   );
// }



export default createStore({
  state: {
    products: null,
    users: null,
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
        let result = (await axios.delete(baseUrl + "/users/" + payload.userID)).data
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