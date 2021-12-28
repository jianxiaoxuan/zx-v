<template>
  <div class="app-meiti-item user">
    <UserAvatar :user="{ id: 1, avatar: 0 }" link="login" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from '@/user/components/user-avatar.vue';

export default defineComponent({
  name: 'AppMeitiItemUser',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {},

  /**
   * 已创建
   */
  created() {
    //
  },

  /**
   * 组件方法
   */
  methods: {},

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
  },
});
</script>

<style scoped></style>
