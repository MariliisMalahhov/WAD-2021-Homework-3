<template>
    <div class="contacts">
        <contacts_compo> </contacts_compo>
    </div>
</template>


<script>
// @ is an alias to /src
import contacts_compo from "@/components/contacts_compo.vue";

export default {
  name: "Contacts",
  components: { contacts_compo },
  props: ["contacts"],
  data() {
    return {};
  },
};
</script>