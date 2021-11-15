<template>
  <div id="posts-container">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="post-header">
        <img class="avatar" :src="post.author.avatar" />
        <h5 class="name">{{ post.author.name }}</h5>
      </div>
      <h5 class="create-time">{{ post.create - time }}</h5>
      <img class="media" :src="post.media.url" />
      <p class="post-text">{{ post.post_text }}</p>
      <button class="like-icon">
        <img class="url" :src="post.like_icon.url" />
        <div class="icon-text">{{ post.icon - text }}</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts_compo",
  data: function () {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
