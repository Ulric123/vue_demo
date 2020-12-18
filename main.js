import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import axios from "axios";
import VueAxios from "vue-axios";
import "./url.js";


window.sHost = "http://10.6.0.111:8180/hcerp"; //这里是本地的请求url


// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err ? err : null)
// }
//import './plugins/languageResources.js' 语言包
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = [obj => Qs.stringify(obj)]

Vue.config.productionTip = false; //生产模式下，减少提示 可以减少开发体积
//与后端进行数据交换的时候带上cookie
axios.defaults.withCredentials = true;
// 请求超时时间
axios.defaults.timeout = 0;

Vue.use(VueAxios, axios);
var count = 0;
var errcount = 0;

//下列url不需要转圈圈
const urlArr = [];

// axios.interceptors.request.use(function (res) {
//     console.log(res)
//   })
// request拦截器
axios.interceptors.request.use(
  (config) => {
    /* let _url=config.url;
    let n_url="";
    if(_url.indexOf("?")!=-1){
      console.log(_url.lastIndexOf("/")+1,_url.indexOf("?"));
      n_url=_url.substring(_url.lastIndexOf("/")+1,_url.indexOf("?"));
    }else{
      n_url=_url.substr(_url.lastIndexOf("/")+1);
    }
    console.log(n_url);
    if(urlArr.includes(_url)){
      return config;
    } */

    for (let i = 0; i < urlArr.length; i++) {
      if (config.url.indexOf(urlArr[i]) != -1) {
        return config;
      }
    }
    window.master.fLoadingOpen();
    //在head中增加 sign(加密)
    if (sessionStorage.getItem("identity")) {
      let posInfo = {
        "posAuth": JSON.parse(sessionStorage.getItem("identity")).posAuth,
        "orgCode": JSON.parse(sessionStorage.getItem("identity")).orgCode,
        "posId": JSON.parse(sessionStorage.getItem("identity")).posId,
        "posCode": JSON.parse(sessionStorage.getItem("identity")).posCode
      };
      let sign = window.master.Encrypt(JSON.stringify(posInfo));
      config.headers["sign"] = sign;
    }
    // if (getToken()) {
    //   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    // config.headers['Content-Type'] = 'application/json'
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config;
  },
  (error) => {
    // Do something with request error
    // console.log(error) // for debug
    window.master.loadingCount = 0
    window.master.loading.close();
    Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    let flag = false;
    errcount = 0; //正确回复后初始错误计数
    for (let i = 0; i < urlArr.length; i++) {
      if (response.config.url.indexOf(urlArr[i]) != -1) {
        flag = true
      }
    }
    if (!flag) {
      window.master.fLoadingClose();
    }
    // if (response.timeOut) {
    //   window.master.fLoadingClose();
    // }
    // 对响应数据做点什么
    if (response) {
      if (response.data.timeOut) {
        if (window.master.$router.history.current.path == "/login") {
          return null;
        }
        if (!response.data.success && count == 0) {
          count++; //限制弹一次
          window.master.fErrorMes(response.data.msg);
          window.master.$router.push({
            path: "/login",
          });
        }
      } else {
        count = 0;
        return response;
      }
    }

  },
  function (error) {
    window.master.loadingCount--
    window.master.loading.close();
    if (window.location.href.indexOf("login") > 0) {
      if (error && count == 0) {
        // 对响应错误做点什么
        // window.master.$router.push({ name: 'Login' })
        window.master.fErrorMes(error);
      }
    } else {
      if (error && count == 0 && errcount == 0) {
        // 对响应错误做点什么
        errcount++;
        // window.master.$router.push({ name: 'Login' })
        window.master.fErrorMes(error);
      }
    }
  }
);
//解决精度问题
//加法函数
function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}
//日期格式化
Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    "S": this.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
  return format;
}
//Number增加.add方法
Number.prototype.add = function (arg) {
  return parseFloat(accAdd(arg, this)).toFixed(2);
};

//字符串占位符替换
(String.prototype.format = function () {
  if (arguments.length == 0) return this;
  for (var s = this, i = 0; i < arguments.length; i++) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
  }
  return s;
}),
//实现http地址自动检测并添加URL链接
(String.prototype.httpHtml = function () {
  var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
  return this.replace(reg, '<a target="_blank" href="$1$2">$1$2</a>');
});

// toFixed兼容方法
Number.prototype.toFixed = function (n) {
  if (n > 20 || n < 0) {
    throw new RangeError("toFixed() digits argument must be between 0 and 20");
  }
  const number = this;
  if (isNaN(number) || number >= Math.pow(10, 21)) {
    return number.toString();
  }
  if (typeof n == "undefined" || n == 0) {
    return Math.round(number).toString();
  }

  let result = number.toString();
  const arr = result.split(".");

  // 整数的情况
  if (arr.length < 2) {
    result += ".";
    for (let i = 0; i < n; i += 1) {
      result += "0";
    }
    return result;
  }

  const integer = arr[0];
  const decimal = arr[1];
  if (decimal.length == n) {
    return result;
  }
  if (decimal.length < n) {
    for (let i = 0; i < n - decimal.length; i += 1) {
      result += "0";
    }
    return result;
  }
  result = integer + "." + decimal.substr(0, n);
  const last = decimal.substr(n, 1);

  // 四舍五入，转换为整数再处理，避免浮点数精度的损失
  if (parseInt(last, 10) >= 5) {
    const x = Math.pow(10, n);
    result = (Math.round(parseFloat(result) * x) + 1) / x;
    result = result.toFixed(n);
  }

  return result;
};
//this.$root=window.master
window.master = new Vue({
  router,
  store,
  render: (h) => h(App),
  data() {
    return {
      loading: null,
      isLogin: true,
      loadingCount: 0,
      msgPromise: Promise.resolve(),
    };
  },

  methods: {
    //-------------根组件的实例方法
    //获取当前日期
    fGetNowFormatDate: function () {
      let date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    //列表高亮选中行
    tableRowClassName: function ({
      row
    }, selectRow, k) {
      // if (tableHightArray.length !== 0) {
      //   for (let i = 0, len = tableHightArray.length; i < len; i++) {
      //     if (row.id === tableHightArray[i].id) {
      //       return 'background-color:rgba(185, 221, 249, 0.75)'
      //     }
      //   }
      // }
      if (selectRow.includes(k ? k : row.id)) {
        return {
          "background-color": "rgba(185, 221, 249, 0.75) !important",
        };
        // return { "background": "#fbec88 url('./assets/img/high_light.png') 50% 50% repeat-x" };
      }
    },
    //行点击
    clickRow: function (row, b, a) {
      a[b].toggleRowSelection(row);
    },

    //url替换
    fUrlRepalce: function (url, str, param) {
      // console.log(url.indexOf(str))
      return url.indexOf(str) != -1 ? url.replace(str, param) : url;
    },


    //查询替换
    strReplace: function (str) {
      let ss = str ? str.replace(/(^\s*)|(\s*$)/g, "") : null;
      return ss ? ss.replace(/\*/g, "%") : null;
    },

    //CST格式的日期转换为制定格式String

    fDateFormat: function (dates, format) {
      let date = new Date(dates);

      var o = {
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(), //day
        "H+": date.getHours(), //hour
        "m+": date.getMinutes(), //minute
        "s+": date.getSeconds(), //second
        S: date.getMilliseconds(), //millisecond
      };

      if (/(y+)/.test(format))
        format = format.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );

      for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
          format = format.replace(
            RegExp.$1,
            RegExp.$1.length == 1 ?
            o[k] :
            ("00" + o[k]).substr(("" + o[k]).length)
          );
      if (format == "NaN-aN-aN") {
        return (format = null);
      }
      return format;
    },



    //生成uuid
    fCreateuuid: function (len, radix) {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
      var uuid = [],
        i;
      radix = radix || chars.length;

      if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
      } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | Math.random() * 16;
            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
          }
        }
      }

      return uuid.join('');
    },


    //提示通知成功信息不需要确定
    fWarningMes: function (des) {
      this.$notify({
        title: "警告",
        message: des,
        type: "warning",
      });
    },

    /**错误提示弹框需要确定*/
    fErrorMes: function (des) {
      this.$confirm(des, "提示", {
        confirmButtonText: "确定",
        type: "error",
        showCancelButton: false, //是否显示取消按钮
        closeOnClickModal: false,
        closeOnPressEscape: false,
        center: true,
      });
    },

    //警告提示弹框需要确定
    fWarningCenterMes: function (des) {
      this.$confirm(des, "提示", {
        confirmButtonText: "确定",
        type: "warning",
        showCancelButton: false, //是否显示取消按钮
        closeOnClickModal: false,
        closeOnPressEscape: false,
        center: true,
      });
    },
    //提示通知成功信息不需要确定
    fSuccessMes: function (des) {
      this.$notify({
        title: "成功",
        message: des,
        type: "success",
      });
    },
    //-------全局--加载model层打开
    fLoadingOpen: function () {
      // window.master.isLoading = true;
      this.loadingCount++;
      this.loading = this.$loading({
        lock: true,
        text: "加载中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });

    },
    fLoadingClose: function () {
      let _this = this;
      this.loadingCount--
      if (this.loadingCount == 0) {
        _this.loading.close();
        // window.master.isLoading = false;
      }
    },

  },
}).$mount("#app");