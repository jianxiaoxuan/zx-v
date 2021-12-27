<template>
  <div class="page-header">
    <div class="container">
      <div class="header">
        <div class="ha">只注于宠，呵护于宠。</div>
        <div class="hb"><AppLogo /></div>
        <div class="hc">抖音，微信，微博，小红书</div>
      </div>
      <div class="menu">
        首页，产品中心，疾病科普，技术问诊，营销与服务，联系我们
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppLogo from '@/app/components/app-logo.vue';

export default defineComponent({
  name: 'PageHeader',

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
    AppLogo,
  },
});
</script>

<style scoped>
@import './styles/page-header.css';
</style>
