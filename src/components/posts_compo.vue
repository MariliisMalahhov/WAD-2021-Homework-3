<template>
  <div id="posts-container">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="post-header">
        <img class="avatar" :src="post.author.avatar" />
        <h5 class="name">{{ post.author.name }}</h5>
      </div>
      <h5 class="create-time">{{ post.create_time }}</h5>
      <img class="media" :src="post.media.url" />
      <p class="post-text">{{ post.post_text }}</p>
      <button class="like-icon" v-on:click="IncreaseLikeNumber">
        <img class="url" :src="post.like_icon.url" />
        <div class="icon-text">{{ post.like_icon.icon_text }}</div>
      </button>
    </div>
    <button class="reset-icon" v-on:click="ResetLikeNumber">reset</button>
  </div>
</template>

<script>
export default {
  name: "posts_compo",
  data: function () {
    return {};
  },
  methods: {
    IncreaseLikeNumber() {
      this.$store.commit("IncreaseLikeNumber")
    },
    ResetLikeNumber() {
      this.$store.commit("ResetLikeNumber")
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
<style>
#posts-container {
  flex-direction: column;
  margin-top: 20px;
  margin-right: 70px;
  margin-left: 70px;
}
.post {
  margin: 20px 0;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
}
.post-header {
  display: flex;
  justify-content: flex-start;
}
.avatar {
  height: 45px;
  width: 50px;
  border-radius: 4px;
}
.create-time{
  color: darkcyan;
  font-weight: lighter;
  display: flex;
  justify-content: flex-start;
}
.media {
  width: 100%;
  height: 100%;
  margin-top: 5px;
  object-fit: cover;
}
.post-text {
  font-size: 16px;
  font-weight: bolder;
}
.like-icon {
  display: flex;
}
.url{
  margin: 5px, 5px;
  justify-content: flex-start;
  height: 50px;
  border-radius: 4px;
  text-align: left;
}

.name{
  font-weight: bold;
  margin: 5px 5px;
  color: darkolivegreen;
}
.reset-icon {
  margin: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  background-color: rgb(50, 88, 50);
  color: whitesmoke;
  border-radius: 5px;
  border-color: rgb(53, 94, 58);
}
</style>
