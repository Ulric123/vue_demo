import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //顶部菜单是否显示
    // bMenuShowFlag:false,
    sCurrentUser: null,
    //顶部菜单当前的索引
    sMenuIndex: "/index",
    //提示只能选择一条数据的描述
    sOnlySelectOneMes: "请选择一条数据",

    currentMenuId: null, //当前菜单id
    //提示没有选择数据的描述
    sRequireSelectMes: "请选择需要操作的数据",
    //按钮类型
    btnTypeEnum: ["success", "warning", "danger", "primary"],
    btnList: [],
    maktlTypeList: [{
        code: 'ZZ',
        name: '自制'
      },
      {
        code: 'WG',
        name: '外购'
      },
    ],
    //加工方式
    workMethodList: [{
        code: "机加",
        name: "机加"
      },
      {
        code: "钣金",
        name: "钣金"
      },
      {
        code: "特殊要求",
        name: "特殊要求"
      },
      {
        code: "PCB",
        name: "PCB"
      },
      {
        code: "PCB-A",
        name: "PCB-A"
      },
      {
        code: "包材包装",
        name: "包材包装"
      },
      {
        code: "画册海报",
        name: "画册海报"
      },
    ],
    //采购单类型
    orderTypeList: [{
        code: "WG",
        name: "外购"
      },
      {
        code: "WX",
        name: "外协"
      },
    ],
    //付款单局类型
    payTypeList: [{
        code: 'YFD',
        name: '预付单'
      },
      {
        code: 'FKD',
        name: '付款单'
      }
    ],
    //发票类型
    billTypeList: [{
        code: 'PP',
        name: '普票'
      },
      {
        code: 'ZP',
        name: '专票'
      }
    ],
    //条码类型
    codeTypeList: [{
        code: '0',
        name: 'GeneMatrix条码',
      },
      {
        code: '1',
        name: '第1通用条码',
      }
    ],
    //公司
    companyEnum: [{
        company: "成都瀚辰光翼科技有限责任公司",
        companyCode: "HCKJ"
      },
      {
        company: "成都瀚辰光翼生物工程有限公司",
        companyCode: "HCSW"
      }
    ],
    //岗位类型
    posAuthEnum: [{
        code: "9",
        name: "普通岗位"
      },
      {
        code: "2",
        name: "二级部门负责人"
      },
      {
        code: "1",
        name: "一级部门负责人"
      },
      {
        code: "0",
        name: "总经理"
      },
      {
        code: "admin",
        name: "系统管理员"
      },
    ],
    //入库单类型
    inStoreEnum: [{
        code: 'CPRK',
        name: '产品入库'
      },
      {
        code: 'PYRK',
        name: '盘盈入库'
      },
      {
        code: 'QTRK',
        name: '其他入库'
      },
    ],

    outStoreEnum: [{
        code: 'LLCK',
        name: '生产领料'
      },
      {
        code: 'BGYP',
        name: '办公用品领用'
      },
      {
        code: 'YFLY',
        name: '研发领用'
      },
      {
        code: 'GDZC',
        name: '固定资产'
      },
      {
        code: 'SHWX',
        name: '售后维修领用'
      },
      {
        code: 'QTCK',
        name: '其他出库'
      },
      {
        code: 'PKCK',
        name: '盘亏出库'
      },
      {
        code: 'XSCK',
        name: '销售出库'
      },
    ],

    //出入库类型
    inOutStoreEnum: [{
        code: 'CGRK',
        name: '外购入库'
      },
      {
        code: 'CPRK',
        name: '产品入库'
      },
      {
        code: 'PYRK',
        name: '盘盈入库'
      },
      {
        code: 'QTRK',
        name: '其他入库'
      },
      {
        code: 'LLCK',
        name: '生产领料'
      },
      {
        code: 'QTCK',
        name: '其他出库'
      },
      {
        code: 'PKCK',
        name: '盘亏出库'
      },
      {
        code: 'XSCK',
        name: '销售出库'
      },
    ],
    //右键点击表头相关数据
    rightClick: {
      menuVisible: false,
      oCol: {
        top: 0,
        left: 0
      }
    }
  },
  mutations: {

  },
  actions: {

  }
})



//日期格式化
window.Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


//Vue公用函数方法
// Vue.prototype.changeData = function (){//changeData是函数名
//   alert('执行成功');
// }