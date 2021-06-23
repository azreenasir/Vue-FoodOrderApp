<template>
  <div class="cart">
    <Navigation :updateCart="carts" />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Foods' }" class="text-dark"
                  >Foods
                </router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2><strong>My Cart</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Food</th>
                  <th scope="col">Description</th>
                  <th scope="col">Total</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../images/' + cart.products.image"
                      class="img-fluid shadow mt-3"
                      width="250px"
                    />
                  </td>
                  <td>
                    <strong>{{ cart.products.name }}</strong>
                  </td>
                  <td>{{ cart.description ? cart.description : "-" }}</td>
                  <td>{{ cart.order_quantity }}</td>
                  <td>RM{{ cart.products.price }}</td>
                  <td>
                    <strong
                      >RM{{ cart.products.price * cart.order_quantity }}</strong
                    >
                  </td>
                  <td align="center">
                    <button class="btn btn-danger" @click="deleteCart(cart.id)">
                      <b-icon-trash></b-icon-trash>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Price:</strong>
                  </td>
                  <td>
                    <strong>RM{{ totalPrice }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="name">Name: </label>
              <input v-model="order.name" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="tableNumber">Table number: </label>
              <input
                v-model="order.tableNumber"
                type="text"
                class="form-control"
              />
            </div>

            <button
              @click="checkOut"
              type="submit"
              class="btn btn-success float-right"
            >
              <b-icon-cart></b-icon-cart>
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import axios from "axios";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      carts: [],
      order: {}
    };
  },
  methods: {
    getCarts(data) {
      this.carts = data;
    },
    deleteCart(id) {
      axios
        .delete("http://localhost:3000/carts/" + id)
        .then(() => {
          this.$toast.error("Cart item Deleted", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true
          });

          axios
            .get("http://localhost:3000/carts/")
            .then(response => {
              this.getCarts(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkOut() {
      if (this.order.name && this.order.tableNumber) {
        this.order.carts = this.carts;
        axios.post("http://localhost:3000/orders", this.order).then(() => {
          this.carts.map(function(item) {
            return axios.delete("http://localhost:3000/carts/" + item.id);
          });

          this.$router.push({ name: "OrderSuccess" });
          this.$toast.success("Order Successfull", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true
          });
        });
      } else {
        this.$toast.error("Please fill your name and table number.", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true
        });
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/carts/")
      .then(response => {
        this.getCarts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    totalPrice() {
      return this.carts.reduce(function(items, data) {
        return items + data.products.price * data.order_quantity;
      }, 0);
    }
  }
};
</script>

<style></style>
