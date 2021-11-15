<template>
  <div id="contacts">
    <h3 id="headline">Contact information</h3>
    <p class="contact" v-for="contact in contacts" :key="contact.id">
      <span class="name"> Name: {{ contact.name }} </span>
      <span class="email"> E-mail: {{ contact.email }} </span>
      <span class="phone"> Phone: {{ contact.phone }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "contacts_compo",
  data: function () {
    return {};
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>
