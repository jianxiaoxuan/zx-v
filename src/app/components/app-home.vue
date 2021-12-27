<template>
  <div>欢迎访问唑下宠物官方网站：）{{ isLoggedIn }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
};
</script>
