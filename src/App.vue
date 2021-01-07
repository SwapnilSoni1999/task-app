<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link :to=" { name: 'Home' } ">Home</router-link> | -->
      <router-link v-if="!isAuth" to="/login">Login</router-link>
      <span v-else>{{ getUser }}</span> <span v-if="isAuth"> | </span>
      <router-link v-if="isAuth" to="/post">Posts</router-link> <span v-if="isAuth"> | </span>
      <router-link v-if="isAuth" to="/create-post">Create Post</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import store from '@/store'

export default {
  computed: {
    getUser() {
      const currUser = store.getters.currUser
      return currUser.userName
    },
    isAuth() {
      return store.getters.isAuth
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
