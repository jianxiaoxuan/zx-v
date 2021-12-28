<template>
  <div class="app-meiti">
    <AppMeitiItem />
    <AppMeitiItemWeixin />
    <AppMeitiItemWeibo />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppMeitiItem from './components/app-meiti-item-douyin.vue';
import AppMeitiItemWeixin from './components/app-meiti-item-weixin.vue';
import AppMeitiItemWeibo from './components/app-meiti-item-weibo.vue';

export default defineComponent({
  name: 'AppMeiti',

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
    AppMeitiItem,
    AppMeitiItemWeixin,
    AppMeitiItemWeibo,
  },
});
</script>

<style scoped>
@import './styles/app-meiti.css';
</style>
