<template>
  <div class="home">
    <posts_compo> </posts_compo>
  </div>
</template>

<script>
// @ is an alias to /src
import posts_compo from "@/components/posts_compo.vue";

export default {
  name: "Home",
  components: { posts_compo },
  props: ["posts"],
  data() {
    return {};
  },
};
</script>
