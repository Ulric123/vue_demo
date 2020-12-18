<template>
  <div id="app">
    <router-view></router-view>
    <!--  清除组件缓存
    使用keep-alive 的 exclude="组件名" 属性-->
    <!-- <keep-alive exclude="NewPurchaseRequisitionForm">
          <router-view ></router-view>
    </keep-alive>-->
  </div>
</template>
<style  lang='scss' >

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  
}
</style>




<script>
export default {
  name: "App",
};
</script>


