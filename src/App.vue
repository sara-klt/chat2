<template>
  <Home :list-of-contact="arrData.splice(0,20)"/>

  <div id="nav">
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import Home from "./views/Home.vue"
import {userList} from "../user list"

export default {
  name: 'App',
  components: {Home},
  data: 
  function() {

  return {
   
    arrData : userList,
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
