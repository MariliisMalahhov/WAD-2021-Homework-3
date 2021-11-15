<template>
  <div id="app">
    <header_compo> </header_compo>
    <router-view> </router-view>
    <footer_compo> </footer_compo>
  </div>
</template>

<script>
import header_compo from "@/components/header_compo.vue"
import footer_compo from "@/components/footer_compo.vue"

export default {
  name: "App",
  components: { header_compo, footer_compo },
};
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
