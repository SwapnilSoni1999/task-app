<template>
  <div class="flex flex-col p-5 pt-0 space-y-4">
    <div class="flex w-max flex-col space-y-4 max-2xl p-4 shadow rounded mx-auto">
    <input
      type="text"
      required
      class="border rounded-lg p-2"
      placeholder="title"
      v-model="newPost.title"
    />
    <input
      type="text"
      required
      class="border rounded-lg p-2"
      placeholder="body"
      v-model="newPost.body"
    />
    <button @click="createPost()" class="text-white bg-green-500 p-3 rounded">Post</button>
  </div>
    <Post v-for="post of posts" :postId="post.id" :key="post.id" :userId="post.userId" :title="post.title" :body="post.body" :comments="post.comments" />
  </div>
</template>

<script>
import Post from "@/components/Post";
import axios from "axios";
import store from '@/store'

export default {
  data: () => ({
    posts: [],
    newPost: {
      title: '',
      body: ''
    }
  }),
  components: {
    Post,
  },
  methods: {
    async createPost() {
      const res = await axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
          userId: store.getters.currUser.userId,
          title: this.newPost.title,
          body: this.newPost.body
        }
      })
      this.posts.unshift(res.data)
    }
  },
  async mounted() {
    try {
      const posts = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts?userId=" + store.getters.currUser.userId,
      });
      // console.log(res);
      this.posts = posts.data
      // for (let post of this.posts) {
      // const servePost = []
      // for (let post of gotPosts) {
      //   // console.log('Postid', post.id)
        
      //   servePost.push(post.comments)
      // // })
      // }
      // this.posts = servePost
    } catch(err) {
      console.log(err)
    }
  },
};
</script>

<style>
</style>