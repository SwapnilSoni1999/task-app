<template>
  <div class="p-5 mx-auto max-w-3xl flex flex-col shadow-md">
    <div class="font-semibold">User {{ userId }}</div>
    <div class="text-xl">{{ title }}</div>
    <div>{{ body }}</div>
    <!-- comments -->
    <button @click="showComments(postId)" class="font-semibold border-t-2 border-b-2 p-2">{{ show ? 'Hide' : 'Show' }} comments</button>
    <div v-if="show" class="border-t-2 w-full p-2 bg-gray-200 space-y-3"> 
      <small class="w-full space-x-2 flex">
        <input v-model="commentText" type="text" class="bg-white flex-grow p-2 rounded-md" placeholder="Add comment">
        <button @click="createComment()" class="p-2 bg-blue-500 text-white rounded">Comment</button>
      </small>
      <div v-for="comment of comments" :key="comment.id" class="shadow mx-auto bg-white p-3 rounded w-full">
        => {{  }}
        <span class="font-semibold">{{ comment.name }}</span> |
        <span class="text-sm">{{ comment.email }}</span>
        <div>{{ comment.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'

export default {
  props: [ 'userId', 'title', 'body', 'postId' ],
  data: () => ({
    show: false,
    comments: [],
    commentText: ''
  }),
  methods: {
    async showComments(postId) {
      this.show = !this.show
      const comments = await axios({
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments'
      })
      this.comments = comments.data

    },
    async createComment() {
      const res = await axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/comments',
        data: {
          email: String("User_" + store.getters.currUser.userId + "@test.com"),
          postId: this.postId,
          name: "Custom Comment",
          body: this.commentText
        }
      })
      this.comments.unshift(res.data)
      this.commentText = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
