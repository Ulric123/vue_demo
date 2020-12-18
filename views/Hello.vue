<template>
  <div class="Hello">
    <el-row style="margin-top: 20px">
      <!-- 我的待办 -->
      <el-col :span="11">
        <el-card shadow="never" style="padding-left: 20px">
          <div slot="header" class="clearfix">
            <span style="color: #32c5d2">我的待办</span>
          </div>
          <el-scrollbar style="height: 450px">
            <div v-for="item in toDoList" :key="item.id">
              <div v-if="toDoList.length == 0">暂无数据</div>
              <div
                v-else
                style="color: #82949a; margin-bottom: 7px; font-size: 16px"
              >
                <i style="font-size: 18px" :class="item.icon"></i>
                &nbsp; 【{{ item.taskType }}】
                <span
                  style="cursor: pointer"
                  class="taskNameClas"
                  v-html="item.taskName"
                  @click="fDealAjax(item.menuUrl)"
                ></span>
                <el-button
                  style="float: right"
                  type="text"
                  @click="fDealAjax(item.menuUrl)"
                  >去处理</el-button
                >
              </div>
              <el-divider></el-divider>
            </div>
          </el-scrollbar>
        </el-card>
      </el-col>

      <!-- 时间显示 -->
      <!-- <el-col :span="11" :offset="1">
        <el-card shadow="never" style="height:500px;overflow-y:auto">
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card shadow="never">
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card shadow="never">
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card shadow="never">
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>-->
    </el-row>
  </div>
</template>

<style lang='scss'>
//1.vw：1vw等于视口宽度的1%。
//2.vh：1vh等于视口高度的1%。
/* 标题首页 */
.Hello {
  margin-top: 10vh;
  padding: 30px;
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .taskNameClas:hover {
    color: #409eff;
  }

  .census_cont {
    background-color: red;
    height: 180px;
    text-align: center;
    .census_text {
      padding: 2em 0;
      color: #fff;
      .text_font {
        font-size: 38px;
      }
      h3 {
        font-size: 20px;
        color: #fff;
        margin: 14px 0;
      }
      h4 {
        font-size: 30px;
        margin: 0px;
      }
    }
  }
  h1 {
    font-size: 22px;
  }
  img {
    height: 9vh;
  }
  .el-divider--horizontal {
    margin: 12px 0px;
  }
  //圆角样式
  // .avatar {
  //   width: 25px;
  //   height: 25px;
  //   position: relative;
  //   display: inline-block;
  //   .avatar-title {
  //     display: flex;
  //     width: 100%;
  //     height: 100%;
  //     color: #fff;
  //     background-color: #177dff;
  //     align-items: center;
  //     justify-content: center;
  //   }
  //   .rounded-circle {
  //     border-radius: 50% !important;
  //   }
  // }
}
</style>
<script>
export default {
  name: "Hello",
  data() {
    return {
      toDoList: [],
      menuList: [],
      cencusNum1: 0,
      cencusNum2: 0,
      cencusNum3: 0,
      cencusNum4: 0,
    };
  },

  mounted() {
    // this.fNumberTwinkle(0, 15200, 0.5, 50, "cencusNum1");
    // this.fNumberTwinkle(0, 12686, 0.5, 50, "cencusNum2");
    // this.fNumberTwinkle(0, 5689, 0.5, 50, "cencusNum3");
    // this.fNumberTwinkle(0, 48110, 0.5, 50, "cencusNum4");
    this.fGetTodoList();
    this.fGetMenuList();
  },
  methods: {
    //获取菜单
    fGetMenuList: function () {
      let _this = this;
      _this.axios
        .get(window.sHost + window.sUrl.systemUrl.queryMenuList)
        .then((res) => {
          if (res.data.success) {
            _this.menuList = res.data.obj;
          } else {
            window.master.fErrorMes(res.data.msg);
          }
        })
        .catch();
    },
    //初始值 最大值 所用时间秒 闪烁次数
    fNumberTwinkle: function (min, max, useTime, rate, cencusNum) {
      let _this = this;
      min = Number(min);
      max = Number(max);
      useTime = Number(useTime);
      rate = Number(rate);
      let jg = (max - min) / rate;
      let timeInterval = (useTime * 1000) / rate;
      let interval = setInterval(() => {
        min += jg;
        let minInt = Number(min.toFixed(0));
        _this[cencusNum] = minInt;
        if (minInt === max) {
          clearInterval(interval);
        }
      }, timeInterval);
    },

    //获取待办
    fGetTodoList: function () {
      let _this = this;
      _this
        .axios({
          method: "get",
          url: window.sHost + window.sUrl.confUrl.getTaskListByPosCode,
        })
        .then((response) => {
          if (response.data.success) {
            _this.toDoList = response.data.obj;
            // window.master.fSuccessMes(response.data.msg);
          } else {
            window.master.fErrorMes(response.data.msg);
          }
        })
        .catch();
    },
    //处理待办
    fDealAjax: function (murl) {
      let menuId = this.menuList.filter((item) => item.url == "/" + murl)[0].id;
      sessionStorage.setItem("currentMenuId", menuId);
      this.$store.state.currentMenuId = menuId;
      this.$router.push({ path: murl });
    },
  },
};
</script>
