<template>
  <div class="flex flex-col about items-center space-y-2">
    <span class="font-semibold">Login With</span>
    <button v-for="user of avlUsers" @click="login(user)" class="shadow-lg p-3 w-max mx-auto" :key="user.userId">
      <span>
        {{ user.userName }}
      </span>
    </button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data: () => ({
    avlUsers: []
  }),
  created() {
    for (let i=1; i<=10; i++) {
      this.avlUsers.push({ userId: i, userName: 'User ' + i })
    }
  },
  methods: {
    login(user) {
      store.dispatch('authenticate', user)
      this.$router.push({ name: 'Posts' })
    }
  },
}
</script>
