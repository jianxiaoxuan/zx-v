<template>
  <div v-if="showPost">
    <PostShowHeader :post="post" />
    <PostShowMedia :post="post" />
    <PostShowContent :post="post" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import PostShowMedia from './components/post-show-media.vue';
import PostShowHeader from './components/post-show-header.vue';
import PostShowContent from './components/post-show-content';

export default defineComponent({
  title() {
    if (this.showPost) {
      return this.post.title;
    }
  },

  props: {
    postId: String,
  },

  created() {
    this.getPostById(this.postId);
  },

  computed: {
    ...mapGetters({
      loading: 'post/show/loading',
      post: 'post/show/post',
    }),

    showPost() {
      return !this.loading && this.post;
    },
  },

  methods: {
    ...mapActions({
      getPostById: 'post/show/getPostById',
    }),
  },

  components: {
    PostShowMedia,
    PostShowHeader,
    PostShowContent,
  },
});
</script>
