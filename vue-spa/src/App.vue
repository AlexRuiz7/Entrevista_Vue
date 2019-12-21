<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="!isLogged()" to="/login">Login</router-link>
      <a v-else to="/login" @click="logout()" class="fake-router-link">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods:{
    logout() {
      // eslint-disable-next-line no-console
      console.log('Logged out');
      this.$store.dispatch('logout');
    },

    isLogged() {
      return this.$store.getters.isLogged;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fake-router-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
</style>
