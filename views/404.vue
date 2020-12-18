<template>
  <div class="PageBox">
    <h1>不好意思！没有找到你要的页面。</h1>
    <h2>Not Found!</h2>
    <el-button type="primary" plain @click="fBackIndex">返回首页</el-button>
  </div>
</template>

<style lang='scss' scope>
//1.vw：1vw等于视口宽度的1%。
//2.vh：1vh等于视口高度的1%。
/* 标题首页 */
.PageBox {
  text-align: center;
  margin-top: 10vh;
  h1 {
    font-size: 22px;
  }
  img {
    height: 9vh;
  }
}
</style>
<script>
export default {
  name: "notFound",
  mounted() {},
  data() {
    return {};
  },
  methods: {
    fBackIndex: function () {
      this.$store.state.bMenuShowFlag = false;
      this.$router.push({ name: "Main" });
    },
  },
};
</script>
