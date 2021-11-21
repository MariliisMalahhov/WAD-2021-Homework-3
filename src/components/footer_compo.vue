<template>
  <div class="footer_compo">
    <footer id="footer">
      <router-link to="/contacts">Contact us</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer_compo",
};
</script>

<style>
#footer a{
  padding: 20px;
  font-weight: bold;
  color: #2c3e50;
  
}
#footer a.router-link-exact-active {
  color: #2c9465;
}
</style>
