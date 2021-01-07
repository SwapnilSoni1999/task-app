<template>
  <div class="flex flex-col p-5 space-y-4">
    <Post v-for="post of posts" :key="post.id" :userId="post.userId" :title="post.title" :body="post.body" />
  </div>
</template>

<script>
import Post from "@/components/Post";
import axios from "axios";

export default {
  data: () => ({
    posts: [],
  }),
  components: {
    Post,
  },
  async created() {
    const res = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    });
    console.log(res);
    this.posts = res.data;
  },
};
</script>

<style>
</style>