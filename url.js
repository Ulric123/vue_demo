//url分别请求地址
window.sUrl = {
    //系统管理
    systemUrl: {
        randCode: '/randCode', //获取验证码
        userLogin: '/userLogin', //用户登录
        logout: '/logout', //退出登录
        queryUserList: '/system/user/queryUserList', //获取用户列表
        saveUserInfo: '/system/user/saveUserInfo', //保存用户信息
        getUserByUserName: '/system/user/getUserByUserName', //获取单个用户
        getUserInfoById: '/system/user/getUserInfoById', //获取单个用户
        updateUserInfo: '/system/user/updateUserInfo', //修改用户信息
        lockOrUnlockUser: '/system/user/lockOrUnlockUser', //启用/禁用用户
        deleteUserInfoById: '/system/user/deleteUserInfoById', //删除用户信息
        initPassword: '/system/user/initPassword', //初始化密码
        updateUserPassword: '/system/user/updateUserPassword', //修改密码
        queryUserPositionList: '/system/user/queryUserPositionList', //分页查询人员岗位信息
        getRepairUser: '/system/user/getRepairUser', //获取技术支持岗位人员
        queryRoleList: '/system/role/queryRoleList', //获取角色列表
        saveRole: '/system/role/saveRole', //保存角色信息
        getRoleByCode: '/system/role/getRoleByCode', //获取单个角色
        getRoleById: '/system/role/getRoleById', //获取单个角色
        updateRole: '/system/role/updateRole', //修改角色信息
        deleteRoleById: '/system/role/deleteRoleById', //删除角色信息
        getRolesByPosId: '/system/role/getRolesByPosId', //根据岗位id获取角色
        saveRoleMenus: '/system/role/saveRoleMenus', //保存角色与菜单关系
        queryMenuList: '/system/menu/queryMenuList', //获取菜单列表
        saveMenu: '/system/menu/saveMenu', //保存菜单信息
        getMenuById: '/system/menu/getMenuById', //获取单个菜单
        updateMenu: '/system/menu/updateMenu', //修改菜单信息
        lockOrUnlockMenu: '/system/menu/lockOrUnlockMenu', //启用/禁用菜单
        deleteMenuById: '/system/menu/deleteMenuById', //删除菜单信息
        getButtonByMenuId: '/system/menuButton/getButtonByMenuId', //根据菜单id获取按钮信息
        saveMenuButton: '/system/menuButton/saveMenuButton', //保存菜单操作按钮
        updateMenuButton: '/system/menuButton/updateMenuButton', //编辑保存菜单操作按钮
        deleteMenuButtonById: '/system/menuButton/deleteMenuButtonById', //删除菜单操作按钮
        getMenuButtonByCode: '/system/menuButton/getMenuButtonByCode', //验证code是否存在
        getMenuByRoleId: '/system/menu/getMenuByRoleId', //根据角色id获取菜单
        findMenuByUserId: '/system/menu/findMenuByUserId', //获取用户菜单
        getMenuButtonById: '/system/menuButton/getMenuButtonById', //根据按钮Id获取按钮信息
        getOperationList: '/system/opt/getOperationList', //根据roleId、menuId获取按钮
        getButtonAuth: '/system/menuButton/getButtonAuth', //根据posId、menuId获取按钮权限
        saveOperation: '/system/opt/saveOperation', //保存按钮菜单关系
        savePosition: '/system/position/savePosition', //保存角色信息
        getPositionByCode: '/system/position/getPositionByCode', //获取单个岗位
        getPositionById: '/system/position/getPositionById', //获取单个岗位
        updatePosition: '/system/position/updatePosition', //修改岗位信息
        deletePositionById: '/system/position/deletePositionById', //删除岗位信息
        findAllPositionList: '/system/position/findAllPositionList', //下拉框中级联选择岗位
        getPositionList: '/system/position/getPositionList', //获取所有岗位列表
        savePositionRoles: '/system/position/savePositionRoles', //保存岗位与角色关系
        getUserListByPosId: '/system/user/getUserListByPosId', //根据岗位获取下级人员信息，参数posId
        updatePasswordSelf: '/system/user/updatePasswordSelf', //
        checkOldPwd: '/system/user/checkOldPwd',
        updateUserInfoSelf: '/system/user/updateUserInfoSelf',
        saveOrg: '/system/org/saveOrg',
        getOrgByCode: '/system/org/getOrgByCode',
        getOrgById: '/system/org/getOrgById',
        updateOrg: '/system/org/updateOrg',
        getOrgByPid: '/system/org/getOrgByPid',
        findAllOrgList: '/system/org/findAllOrgList',
        deleteOrgById: '/system/org/deleteOrgById',
        getPositionByOrgId: '/system/position/getPositionByOrgId',
        getUserInfoByPosId: '/system/position/getUserInfoByPosId',
        queryUserForPosition: '/system/user/queryUserForPosition',
        saveUserPosition: '/system/position/saveUserPosition',
        deleteUserPosition: '/system/position/deleteUserPosition'
    },

    //基础数据管理
    basicDataUrl: {
        queryMaraGroupList: '/mdm/maraGroup/queryMaraGroupList', //获取物料大类列表
        saveMaraGroup: '/mdm/maraGroup/saveMaraGroup', //保存物料大类
        getMaraGroupByMaktl: '/mdm/maraGroup/getMaraGroupByMaktl', //获取单个大类
        getMaraGroupById: '/mdm/maraGroup/getMaraGroupById', //获取单个大类
        updateMaraGroup: '/mdm/maraGroup/updateMaraGroup', //修改物料大类
        updateMaraGroupKemu: '/mdm/maraGroup/updateMaraGroupKemu', //修改物料大类科目
        exportMaraGroup: '/mdm/maraGroup/exportMaraGroup', //物料大类-导出
        deleteMaraGroupById: '/mdm/maraGroup/deleteMaraGroupById', //删除物料大类
        getAllMaraGroup: '/mdm/maraGroup/getAllMaraGroup', //获取物料大类
        queryMaraList: '/mdm/mara/queryMaraList', //获取物料列表
        saveMara: '/mdm/mara/saveMara', //保存物料信息
        getMaraByNorms: '/mdm/mara/getMaraByNorms', //获取单个物料
        getMaraById: '/mdm/mara/getMaraById', //获取单个物料
        showMaraDetailByMatnr: '/mdm/mara/showMaraDetailByMatnr', //获取单个物料详情
        updateMara: '/mdm/mara/updateMara', //修改物料信息
        deleteMaraById: '/mdm/mara/deleteMaraById', //删除物料信息
        searchMaraList: '/mdm/mara/searchMaraList', //自动匹配带入获取物料

        getMaraByMatnr: '/mdm/mara/getMaraByMatnr', //根据编码获取数据

        searchWxMaraList: '/mdm/mara/searchWxMaraList', //自动匹配带入获取物料-外协

        uploadDrawBatch: '/mdm/drawInfo/uploadDrawBatch', //图纸管理上传批量
        uploadDrawMultiFile: '/mdm/drawInfo/uploadDrawMultiFile', //图纸管理上传
        queryDrawInfoList: '/mdm/drawInfo/queryDrawInfoList', //图纸管理查询
        deleteDrawFile: '/mdm/drawInfo/deleteDrawFile', //图纸管理删除批量
        downOneDrawFile: '/mdm/drawInfo/downOneDrawFile', //图纸管理下载文件
        downMutiDrawFile: '/mdm/drawInfo/downMutiDrawFile', //图纸管理下载文件
        findDrawListByMatnr: '/mdm/drawInfo/findDrawListByMatnr', //获取文件

        queryAllKunnrList: '/mdm/kunnr/queryAllKunnrList', //获取所有客户信息
        queryKunnrInfoList: '/mdm/kunnr/queryKunnrInfoList', //获取客户列表
        exportKunnrInfoList: '/mdm/kunnr/exportKunnrInfoList', //客户列表-导出
        saveKunnrInfo: '/mdm/kunnr/saveKunnrInfo', //保存客户信息
        getKunnrInfoByKunnr: '/mdm/kunnr/getKunnrInfoByKunnr', //获取单个客户
        getKunnrInfoById: '/mdm/kunnr/getKunnrInfoById', //获取单个客户
        updateKunnrInfo: '/mdm/kunnr/updateKunnrInfo', //修改客户信息
        deleteKunnrInfoById: '/mdm/kunnr/deleteKunnrInfoById', //删除客户信息
        searchKunnrInfoList: '/mdm/kunnr/searchKunnrInfoList', //自动匹配带入获取客户信息
        queryDeviceInfoList: '/mdm/device/queryDeviceInfoList', //获取设备列表
        saveDeviceInfo: '/mdm/device/saveDeviceInfo', //保存设备信息
        getDeviceInfoBySN: '/mdm/device/getDeviceInfoBySN', //获取单个设备
        getDeviceInfoById: '/mdm/device/getDeviceInfoById', //获取单个设备
        updateDeviceInfo: '/mdm/device/updateDeviceInfo', //修改设备信息
        deleteDeviceInfoById: '/mdm/device/deleteDeviceInfoById', //删除设备信息
        searchDeviceInfoList: '/mdm/device/searchDeviceInfoList', //自动匹配带入获取设备信息

        queryDicByType: '/mdm/dataDic/{0}/queryDicByType', //数据字典

        querySupplierInfoList: '/mdm/supplier/querySupplierInfoList', //获取供应商列表
        exportSupplierInfoList: '/mdm/supplier/exportSupplierInfoList', // 供应商列表-导出
        saveSupplierInfo: '/mdm/supplier/saveSupplierInfo', //保存供应商信息
        checkSupplierInfoByCode: '/mdm/supplier/checkSupplierInfoByCode', //获取单个供应商-检查编码
        getSupplierInfoByCode: '/mdm/supplier/getSupplierInfoByCode', //获取单个供应商
        getSupplierInfoById: '/mdm/supplier/getSupplierInfoById', //获取单个供应商
        updateSupplierInfo: '/mdm/supplier/updateSupplierInfo', //修改供应商信息
        deleteSupplierInfoById: '/mdm/supplier/deleteSupplierInfoById', //删除供应商信息
        searchSupplierInfoList: '/mdm/supplier/searchSupplierInfoList', //自动匹配带入获取供应商信息

        findBankInfoByCompany: '/mdm/bankInfo/findBankInfoByCompany', //根据公司获取银行账户
        queryBankInfoList: '/mdm/bankInfo/queryBankInfoList', //银行账户-分页查询
        saveBankInfo: '/mdm/bankInfo/saveBankInfo', //银行账户-保存
        updateBankInfo: '/mdm/bankInfo/updateBankInfo', //银行账户-修改
        getBankInfoById: '/mdm/bankInfo/getBankInfoById', //银行账户-根据ID获取数据
        deleteBankInfoById: '/mdm/bankInfo/deleteBankInfoById', //银行账户-删除

        getAllDicType: '/mdm/dataDic/getAllDicType', //
        queryDataDicList: '/mdm/dataDic/queryDataDicList', //
        getDataDictionaryByCode: '/mdm/dataDic/getDataDictionaryByCode', //
        getDataDictionaryById: '/mdm/dataDic/getDataDictionaryById', //
        saveDataDictionary: '/mdm/dataDic/saveDataDictionary', //
        updateDataDictionary: '/mdm/dataDic/updateDataDictionary', //
        deleteDataDictionaryById: '/mdm/dataDic/deleteDataDictionaryById', //

        exportKdMaraExcel: '/mdm/mara/exportKdMaraExcel', //按金蝶系统要求导出物料信息
        exportMara: '/mdm/mara/exportMara', //基础数据物料维护导出
        getMaraImportTemplate: '/mdm/mara/getMaraImportTemplate', //基础数据下载模板
        getKdImportExcel: '/mdm/mara/getKdImportExcel', //获取金蝶模板
        analysisMaraExcel: '/mdm/mara/analysisMaraExcel', //基础数据物料维护导入

        findAllDeviceInfoList: '/mdm/device/findAllDeviceInfoList', //
        uploadMultiFile: '/mdm/attachInfo/uploadMultiFile', //
        uploadOneFile: '/mdm/attachInfo/uploadOneFile', //上传文件（单个）
        deleteOneFile: '/mdm/attachInfo/deleteOneFile', //上传文件删除（单个）
        uploadMultiTempFile: '/mdm/attachInfo/uploadMultiTempFile', //上传文件（多个）
        getAttachInfoByOrderNo: '/mdm/attachInfo/getAttachInfoByOrderNo', //获取文件

        getAttachInfoByTempId: '/mdm/attachInfo/getAttachInfoByTempId', //获取文件（外购）
        deleteFilesByTempId: '/mdm/attachInfo/deleteFilesByTempId', //删除文件
        uploadFileByAddRepairOrder: '/mdm/attachInfo/uploadFileByAddRepairOrder', //
        searchKdMaraList: '/mdm/mara/searchKdMaraList', //

        queryQualityInfoList: '/mdm/qualityInfo/queryQualityInfoList', //
        saveQualityInfo: '/mdm/qualityInfo/saveQualityInfo', //
        getQualityInfoByCode: '/mdm/qualityInfo/getQualityInfoByCode', //
        getQualityInfoById: '/mdm/qualityInfo/getQualityInfoById', //
        updateQualityInfo: '/mdm/qualityInfo/updateQualityInfo', //
        deleteQualityInfoById: '/mdm/qualityInfo/deleteQualityInfoById', //
        getAllQualityInfo: '/mdm/qualityInfo/getAllQualityInfo', //

        queryProjectInfoList: '/mdm/projectInfo/queryProjectInfoList', //
        saveProjectInfo: '/mdm/projectInfo/saveProjectInfo', //
        getProjectInfoByCode: '/mdm/projectInfo/getProjectInfoByCode', //
        getProjectInfoById: '/mdm/projectInfo/getProjectInfoById', //
        updateProjectInfo: '/mdm/projectInfo/updateProjectInfo', //
        deleteProjectInfoById: '/mdm/projectInfo/deleteProjectInfoById', //
        getAllProjectInfo: '/mdm/projectInfo/{0}/getAllProjectInfo', //
        getProjectInfoByCompany: '/mdm/projectInfo/getProjectInfoByCompany', //根据公司获取项目类别

        repairMaraByDeviceList: '/saleServer/repairOrder/repairMaraByDeviceList', //
        repairOrderByDeviceList: '/saleServer/repairOrder/repairOrderByDeviceList', //
        syncKdMara: '/mdm/mara/syncKdMara', //金蝶同步

        updateMaraVersion: '/mdm/bom/updateMaraVersion', //更新版本号
        queryMaraBomList: '/mdm/bom/queryMaraBomList', //bom物料查询
        getBomListByPid: '/mdm/bom/getBomListByPid', //通过id获取所有子级
        deleteMaraBomById: '/mdm/bom/deleteMaraBomById', //通过id删除
        getMaraListBylevele: '/mdm/bom/getMaraListBylevele', //新增弹框获取物料数据列表
        saveMaraBom: '/mdm/bom/{0}/saveMaraBom', //保存
        updateMaraBom: "/mdm/bom/updateMaraBom", //编辑确定

    },
    //配置管理
    confUrl: {

        queryJobTaskList: '/msg/job/queryJobTaskList', //debug配置
        saveJobTaskMq: '/msg/job/saveJobTaskMq', //debug配置新增
        deleteJobTaskMq: '/msg/job/deleteJobTaskMq', //debug配置删除
        sendInfoToKd: '/msg/job/sendInfoToKd', //同步操作

        queryQmTemplateList: '/qm/qmTemplate/queryQmTemplateList', //质检模板查询
        saveQmTemplate: '/qm/qmTemplate/saveQmTemplate', //质检模板保存
        getQmTemplateByCode: '/qm/qmTemplate/getQmTemplateByCode', //根据编号获取数据
        getQmTemplateById: '/qm/qmTemplate/getQmTemplateById', //根据id获取数据
        updateQmTemplate: '/qm/qmTemplate/updateQmTemplate', //修改数据
        deleteQmTemplate: '/qm/qmTemplate/deleteQmTemplate', //删除数据
        getAllQmTemplateList: '/qm/qmTemplate/getAllQmTemplateList', //获取所有模板


        queryProcessConfigList: '/mdm/processConfig/queryProcessConfigList', //分页查询
        getProcessConfigById: '/mdm/processConfig/getProcessConfigById', //根据id获取数据
        saveProcessConfig: '/mdm/processConfig/saveProcessConfig', //保存
        updateProcessConfig: '/mdm/processConfig/updateProcessConfig', // 修改
        deleteProcessConfigById: '/mdm/processConfig/deleteProcessConfigById', //删除


        queryMsgConfigList: '/msg/msgConfig/queryMsgConfigList', //消息模板分页查询
        getMsgConfigById: '/msg/msgConfig/getMsgConfigById', //根据id获取数据，参数id
        saveMsgConfig: '/msg/msgConfig/saveMsgConfig', //保存数据
        deleteMsgConfigById: '/msg/msgConfig/deleteMsgConfigById', //根据id删除数据，单条，不支持批量
        updateMsgConfig: '/msg/msgConfig/updateMsgConfig', //修改，只能修改消息模板和url
        findUserToSendMsg: '/system/user/findUserToSendMsg', //获取用户下拉数据
        sendDDMsg: '/msg/msgConfig/sendDDMsg', //发送钉钉消息

        queryTaskConfigList: '/mdm/task/queryTaskConfigList', //待办模板查询
        saveTaskConfig: '/mdm/task/saveTaskConfig', // 保存数据
        getTaskListByPosCode: '/mdm/task/getTaskListByPosCode', //获取当前选择数据
        getTaskConfigById: '/mdm/task/getTaskConfigById', //获取当前选择数据
        updateTaskConfig: '/mdm/task/updateTaskConfig', //修改数据
        deleteTaskConfig: '/mdm/task/deleteTaskConfig', //删除数据
        getTaskPositionList: '/mdm/task/getTaskPositionList', //获取岗位列表
        saveTaskPosition: '/mdm/task/saveTaskPosition', //保存待办与岗位关系

        queryWarehouseList: '/store/warehouse/queryWarehouseList', //获取仓库列表
        saveWarehouse: '/store/warehouse/saveWarehouse', //保存仓库
        getWarehouseByCode: '/store/warehouse/getWarehouseByCode', //仓库编码验证
        getWarehouseById: '/store/warehouse/getWarehouseById', //根据id获取仓库
        updateWarehouse: '/store/warehouse/updateWarehouse', //更新仓库
        deleteWarehouseById: '/store/warehouse/deleteWarehouseById', //删除仓库
        getWarehouseByCompany: '/store/warehouse/{0}/getWarehouseByCompany', //获取仓库列表
        queryWarehousePosList: '/store/warehousePos/queryWarehousePosList', //获取仓位列表
        saveWarehousePos: '/store/warehousePos/saveWarehousePos', //保存仓库
        getWarehousePosByCode: '/store/warehousePos/getWarehousePosByCode', //仓位编码验证
        getWarehousePosById: '/store/warehousePos/getWarehousePosById', //根据id获取仓位
        updateWarehousePos: '/store/warehousePos/updateWarehousePos', //更新仓位
        deleteWarehousePosById: '/store/warehousePos/deleteWarehousePosById', //删除仓位
        getWarehousePosList: '/store/warehousePos/getWarehousePosList', //根据项目类别和仓库获取仓位
        getWarehousePosByWareCode: '/store/warehousePos/getWarehousePosByWareCode', //根据仓库获取仓位
    },
    //售后管理
    afterSaleUrl: {
        queryKunnrDeviceList: '/saleServer/kunnrDevice/queryKunnrDeviceList', //获取客户设备列表
        checkDataExist: '/saleServer/kunnrDevice/checkDataExist', //根据客户编号和设备SN检测是否存在
        saveKunnrDevice: '/saleServer/kunnrDevice/saveKunnrDevice', //保存数据
        deleteKunnrDeviceById: '/saleServer/kunnrDevice/deleteKunnrDeviceById', //删除数据
        searchDeviceListByKunnr: "/saleServer/kunnrDevice/searchDeviceListByKunnr", //模糊匹配根据客户编码获取设备信息
        saveRepairOrder: '/saleServer/repairOrder/saveRepairOrder', //新增维修单
        waitConfirmRepairOrderList: '/saleServer/repairOrder/waitConfirmRepairOrderList', //分页查询待确认维修单
        confirmYesRepairOrder: '/saleServer/repairOrder/confirmYesRepairOrder', //维修单确认通过
        confirmNoRepairOrder: '/saleServer/repairOrder/confirmNoRepairOrder', //维修单确认不通过
        assignRepairOrder: "/saleServer/repairOrder/assignRepairOrder", //指派维修单
        receiveRepairOrder: '/saleServer/repairOrder/receiveRepairOrder', //领取报修单
        waitReceiveRepairOrderList: '/saleServer/repairOrder/waitReceiveRepairOrderList', //分页查询待领取的报修单
        waitDealRepairOrderList: '/saleServer/repairOrder/waitDealRepairOrderList', //分页查询待处理的报修单
        waitApplyRepairPlanList: '/saleServer/repairOrder/waitApplyRepairPlanList', //查询待审批的维修方案
        saveApplyRepairPlan: '/saleServer/repairOrder/saveApplyRepairPlan', //部门领导通过维修方案
        toBackApplyRepairPlan: '/saleServer/repairOrder/toBackApplyRepairPlan', //部门领导否决维修方案

        toBackRepairOrder: '/saleServer/repairOrder/toBackRepairOrder', //维修员退回报修单
        getRepairOrderByOrderNo: '/saleServer/repairOrder/getRepairOrderByOrderNo', //根据单号获取单据信息
        saveRepairOrderItem: '/saleServer/repairOrder/saveRepairOrderItem', //批量保存单据行信息
        updateRepairOrderFinish: '/saleServer/repairOrder/updateRepairOrderFinish', //维修人确认维修单处理完毕
        waitExpressOldMaraList: '/saleServer/repairMara/waitExpressOldMaraList', //查询坏件待邮寄列表
        waitReceiveOldMaraList: '/saleServer/repairMara/waitReceiveOldMaraList', //查询坏件待收货列表(商务部)
        waitDeptApplyMaraList: '/saleServer/repairMara/waitDeptApplyMaraList', //查询新件待部门领导审批列表
        waitCommApplyMaraList: '/saleServer/repairMara/waitCommApplyMaraList', //查询新件待商务部领导审批列表
        waitExpressNewMaraList: '/saleServer/repairMara/waitExpressNewMaraList', //查询新件待邮寄列表
        waitReceiveNewMaraList: '/saleServer/repairMara/waitReceiveNewMaraList', //查询新件待收货列表
        saveExpressMara: '/saleServer/repairMara/saveExpressMara', //保存邮寄信息(退坏和换新)
        saveReceiveMara: '/saleServer/repairMara/saveReceiveMara', //确认收货(退坏和换新)
        deptApplyMara: '/saleServer/repairMara/deptApplyMara', //部门领导审批换新单据
        commApplyMara: '/saleServer/repairMara/commApplyMara', //商务部审批换新单据
        waitDeptApplyOrderList: '/saleServer/repairOrder/waitDeptApplyOrderList', //查询待确认的单据(已处理完成的单据)


        deptApplyYesRepairOrder: '/saleServer/repairOrder/deptApplyYesRepairOrder', //
        deptApplyNoRepairOrder: '/saleServer/repairOrder/deptApplyNoRepairOrder', //
        waitQmApplyOrderList: '/saleServer/repairOrder/waitQmApplyOrderList', //
        qmApplyYesRepairOrder: '/saleServer/repairOrder/qmApplyYesRepairOrder', //
        qmApplyNoRepairOrder: '/saleServer/repairOrder/qmApplyNoRepairOrder', //



        waitRepairOrderFinishList: '/saleServer/repairOrder/waitRepairOrderFinishList', //待提交维修单查询
        repairOrderReportList: '/saleServer/repairOrder/repairOrderReportList', //报修单跟踪报表查询
        exportRepairOrder: '/saleServer/repairOrder/exportRepairOrder', //报修单跟踪报表导出
        repairOrderByKunnrList: '/saleServer/repairOrder/repairOrderByKunnrList', //
        repairOrderDetailList: '/saleServer/repairOrder/repairOrderDetailList', //
        findDeviceListByKunnr: '/saleServer/kunnrDevice/findDeviceListByKunnr', //
        sendRepairOrderMsg: '/saleServer/sendMsg/sendRepairOrderMsg', //
        cancelRepairOrder: '/saleServer/repairOrder/cancelRepairOrder', //
        updateKunnrDeviceFlag: '/saleServer/kunnrDevice/updateKunnrDeviceFlag' //

    },

    //条码管理
    barCodeUrl: {
        queryAllReagentList: '/pp/barCodeReq/queryAllReagentList', //获取试剂类型
        saveBarCodeReq: '/pp/barCodeReq/saveBarCodeReq', //保存条码申请单
        submitBarCodeReq: '/pp/barCodeReq/submitBarCodeReq', //提交条码申请单
        waitSubmitBarCodeReqList: '/pp/barCodeReq/waitSubmitBarCodeReqList', //查询条码申请单-待提交
        deleteBarCodeReqByIdList: '/pp/barCodeReq/deleteBarCodeReqByIdList', ////查询条码申请单-待提交-删除
        getBarCodeList: '/pp/barCodeReq/getBarCodeList', //查看条码

        updateBarCodeReq: '/pp/barCodeReq/updateBarCodeReq', //修改保存条码申请单
        updateSubmitBarCodeReq: '/pp/barCodeReq/updateSubmitBarCodeReq', //修改提交条码申请单

        waitApplyBarCodeReqList: '/pp/barCodeReq/waitApplyBarCodeReqList', //查询待审批条码申请单
        applyBarCodeReq: '/pp/barCodeReq/applyBarCodeReq', //审批条码申请单

        barCodeReqReport: '/pp/barCodeReq/barCodeReqReport', //条码申请单报表

        getBarCodeReqById: '/pp/barCodeReq/{0}/getBarCodeReqById', //根据id获取数据

        exportBarCodeList: '/pp/barCodeReq/exportBarCodeList', //导出txt
    },


    //询价
    enquiryUrl: {
        getReqExcelTemplate: '/sd/enquiry/getReqExcelTemplate', //新增询价下载模板
        analysisReqExcel: '/sd/enquiry/analysisReqExcel', //新增询价导入
        saveMaraEnquiry: '/sd/enquiry/saveMaraEnquiry', //新增询价保存
        saveSubmitMaraEnquiry: '/sd/enquiry/saveSubmitMaraEnquiry', //新增询价提交
        waitSubmitMaraEnquiry: '/sd/enquiry/waitSubmitMaraEnquiry', //新增询价待提交查询
        getMaraEnquiryById: '/sd/enquiry/getMaraEnquiryById', //询价编辑
        showMaraEnquiry: '/sd/enquiry/showMaraEnquiry', //询价详情查看
        submitMaraEnquiry: '/sd/enquiry/submitMaraEnquiry', //询价列表提交
        updateMaraEnquiry: '/sd/enquiry/updateMaraEnquiry', //询价编辑保存
        updateSubmitMaraEnquiry: '/sd/enquiry/updateSubmitMaraEnquiry', //询价编辑提交
        deleteMaraEnquiry: '/sd/enquiry/deleteMaraEnquiry', //新增询价待提交删除
        waitPMApplyEnquiry: '/sd/enquiry/waitPMApplyEnquiry', //询价待项目负责人审批
        pmApplyMaraEnquiry: '/sd/enquiry/pmApplyMaraEnquiry', //询价待项目负责人审批-审批

        waitDeptApplyEnquiry: '/sd/enquiry/waitDeptApplyEnquiry', //询价待部门审批
        deptApplyMaraEnquiry: '/sd/enquiry/deptApplyMaraEnquiry', //通过审批
        waitPDApplyEnquiry: '/sd/enquiry/waitPDApplyEnquiry', //待采购部审批查询
        pdApplyMaraEnquiry: '/sd/enquiry/pdApplyMaraEnquiry', //待采购部审批-审批
        waitReceiveToAskPrice: '/sd/enquiry/waitReceiveToAskPrice', //询价待执行
        receiveAskPrice: '/sd/enquiry/receiveAskPrice', //领取
        assignAskPrice: '/sd/enquiry/assignAskPrice', //指派询价，参数idList，enquiryBy
        waitToAskPrice: '/sd/enquiry/waitToAskPrice', //询价待反馈查询
        feedBackEnquiry: '/sd/enquiry/feedBackEnquiry', //询价待反馈询价确定
        purchaserRejectEnquiry: '/sd/enquiry/purchaserRejectEnquiry', //询价待反馈退回
        saveEnquiryPrice: '/sd/enquiry/saveEnquiryPrice', //询价待反馈保存单价和交期
        importEnquiryPrice: '/sd/enquiry/importEnquiryPrice', //询价待反馈导入
        exportEnquiryPrice: '/sd/enquiry/exportEnquiryPrice', //询价待反馈导出
        enquiryResultList: '/sd/enquiry/enquiryResultList', //询价结果查询
        enquiryReportList: '/sd/enquiry/enquiryReportList', //询价跟踪报表查询
        exportEnquiryReport: '/sd/enquiry/exportEnquiryReport' //询价跟踪报表导出

    },
    //外协管理
    processUrl: {
        saveOrderReqWx: '/sd/orderReqWx/saveOrderReqWx', //新增采购申请保存
        saveSubmitOrderReqWx: '/sd/orderReqWx/saveSubmitOrderReqWx?sendMsg=Y', //新增采购申请提交
        waitSubmitOrderReqWxList: '/sd/orderReqWx/waitSubmitOrderReqWxList', //待提交查询
        submitOrderReqWx: '/sd/orderReqWx/submitOrderReqWx?sendMsg=Y', //待提交列表提交
        updateSaveOrderReqWx: '/sd/orderReqWx/updateSaveOrderReqWx', //采购申请待提交编辑保存
        updateSubmitOrderReqWx: '/sd/orderReqWx/updateSubmitOrderReqWx?sendMsg=Y', //采购申请待提交编辑提交
        deleteOrderReqWx: '/sd/orderReqWx/deleteOrderReqWx', //采购申请待提交删除
        getOrderReqWxById: '/sd/orderReqWx/getOrderReqWxById', //获取采购申请详情页面
        showOrderReqWxDetail: '/sd/orderReqWx/showOrderReqWxDetail', //申请详情页面
        showWxReqDetail: '/sd/orderReqWx/showWxReqDetail', //申请详情页面（不含附件）

        waitQMApplyWxList: '/sd/orderReqWx/waitQMApplyWxList', //待质控确认查询列表
        qmApplyOrderReqWx: '/sd/orderReqWx/qmApplyOrderReqWx?sendMsg=Y', ////待质控确认列表审批
        qmSubmitOrderReqWx: '/sd/orderReqWx/qmSubmitOrderReqWx?sendMsg=Y', //待质控确认列表附件上传提交
        qmSaveOrderReqWx: '/sd/orderReqWx/qmSaveOrderReqWx', //待质控确认列表附件上传保存
        waitPMApplyWxList: '/sd/orderReqWx/waitPMApplyWxList', //待项目组确认查询列表
        pmApplyOrderReqWx: '/sd/orderReqWx/pmApplyOrderReqWx?sendMsg=Y', //待项目组确认列表审批
        waitPDApplyReqWxList: '/sd/orderReqWx/waitPDApplyReqWxList', //待采购部审批
        pdDeptApplyReqWx: '/sd/orderReqWx/pdDeptApplyReqWx?sendMsg=Y', //待采购部审批-审批
        waitPDDealReqWxList: '/sd/orderReqWx/waitPDDealReqWxList', //待采购执行查询
        assignOrderReqWx: '/sd/orderReqWx/assignOrderReqWx', //待采购执行列表指派
        receiveOrderReqWx: '/sd/orderReqWx/receiveOrderReqWx', //待采购执行列表领取
        waitToPurchaseReqWxList: '/sd/orderReqWx/waitToPurchaseReqWxList', //待创建采购订单
        exportReqWxPriceExcel: '/sd/orderReqWx/exportReqWxPriceExcel', //待创建采购订单导出
        importReqWxPriceExcel: '/sd/orderReqWx/importReqWxPriceExcel', ////待创建采购订单导入
        updateWxPurPrice: '/sd/orderReqWx/updateWxPurPrice', //待创建采购订单自动保存价格交期
        purchaserRejectReqWx: '/sd/orderReqWx/purchaserRejectReqWx', //待创建采购订单退回(上一步、申请人)
        downReqWxAttachList: '/sd/orderReqWx/downReqWxAttachList', //下载附件
        downReqWxAttach: '/sd/orderReqWx/downReqWxAttach', //下载附件
        orderReqWxReportList: '/sd/orderReqWx/orderReqWxReportList', //外协申请跟踪报表
        exportOrderReqWxReport: '/sd/orderReqWx/exportOrderReqWxReport', //外协申请跟踪报表导出

    },

    //采购管理
    purchaseUrl: {
        saveOrder: '/sd/order/saveOrder',
        saveSubmitOrder: '/sd/order/saveSubmitOrder',
        showOrderReqDetail: '/sd/orderReq/showOrderReqDetail', //采购申请详情页面
        saveOrderReq: '/sd/orderReq/saveOrderReq', //新增采购申请保存
        saveSubmitOrderReq: '/sd/orderReq/saveSubmitOrderReq?sendMsg=Y', //新增采购申请提交
        waitSubmitOrderReqList: '/sd/orderReq/waitSubmitOrderReqList',
        submitOrderReq: '/sd/orderReq/submitOrderReq?sendMsg=Y',
        waitPMApplyReqList: '/sd/orderReq/waitPMApplyReqList', //待项目组确认查询列表
        pmApplyOrderReq: '/sd/orderReq/pmApplyOrderReq?sendMsg=Y', //待项目组确认通过否决
        waitDeptApplyOrderReqList: '/sd/orderReq/waitDeptApplyOrderReqList', //采购申请待审批列表
        deptApplyOrderReq: '/sd/orderReq/deptApplyOrderReq?sendMsg=Y', //采购申请待审批通过否决
        deleteOrderReq: '/sd/orderReq/deleteOrderReq',
        getOrderReqById: '/sd/orderReq/getOrderReqById',
        updateSaveOrderReq: '/sd/orderReq/updateSaveOrderReq', //采购申请待提交编辑保存
        updateSubmitOrderReq: '/sd/orderReq/updateSubmitOrderReq?sendMsg=Y', //采购申请待提交编辑提交
        waitDeviceQMConfirmList: '/sd/orderReq/waitDeviceQMConfirmList', //待质管部确认列表
        deviceQMConfirmOrderReq: '/sd/orderReq/deviceQMConfirmOrderReq?sendMsg=Y', //待质管部确认列表审批
        waitPDApplyOrderReqList: '/sd/orderReq/waitPDApplyOrderReqList',
        pdDeptApplyOrderReq: '/sd/orderReq/pdDeptApplyOrderReq', //待采购部审批通过否决
        purchaseDeptRejectOrderReq: '/sd/orderReq/purchaseDeptRejectOrderReq',
        waitToPurchaseOrderReqList: '/sd/orderReq/waitToPurchaseOrderReqList',
        exportReqPriceExcel: '/sd/orderReq/exportReqPriceExcel',
        importReqPriceExcel: '/sd/orderReq/importReqPriceExcel',
        purchaserRejectOrderReq: '/sd/orderReq/purchaserRejectOrderReq',
        waitPDDealOrderReqList: '/sd/orderReq/waitPDDealOrderReqList', //采购待执行 
        receiveOrderReq: '/sd/orderReq/receiveOrderReq', //采购待执行领取
        assignOrderReq: '/sd/orderReq/assignOrderReq', //采购待执行指派
        orderReqReportList: '/sd/orderReq/orderReqReportList', //采购申请跟踪报表
        exportOrderReqReport: '/sd/orderReq/exportOrderReqReport', //导出

        saveReqToOrder: '/sd/order/saveReqToOrder',
        saveSubmitReqToOrder: '/sd/order/saveSubmitReqToOrder',
        waitSubmitOrderList: '/sd/order/waitSubmitOrderList',
        waitPDApplyOrderList: '/sd/order/waitPDApplyOrderList',
        getOrderByOrderNo: '/sd/order/getOrderByOrderNo',
        getBillInfoByOrder: '/sd/bill/getBillInfoByOrder', //根据订单获取发票信息 
        getBillInfoByBillId: '/sd/bill/getBillInfoByBillId', // 根据发票ID获取数据 


        updatePurPrice: '/sd/orderReq/updatePurPrice', //创建采购订单单价货期自动保存
        addOrderByReqIdList: '/sd/order/addOrderByReqIdList', //创建采购订单下单获取数据

        findReqListToOrder: '/sd/orderReq/findReqListToOrder', //创建采购订单下单后添加物料

        submitOrder: '/sd/order/submitOrder',
        updateSaveOrder: '/sd/order/updateSaveOrder',
        updateSubmitOrder: '/sd/order/updateSubmitOrder',
        deleteOrder: '/sd/order/deleteOrder', //订单待提交删除
        deptApplyOrder: '/sd/order/deptApplyOrder', //采购订单待审批-审批

        getOrderDetailByOrderNo: '/sd/order/getOrderDetailByOrderNo',


        waitPayOrderList: '/sd/orderPay/waitPayOrderList', //采购订单待付尾款
        getOrderRestMoneySum: '/sd/orderPay/getOrderRestMoneySum', //采购订单待付尾款获取待付金额总计

        // waitDeptApplyPayList:'/sd/orderPay/waitDeptApplyPayList',//分页查询待审核单据
        waitApplyPayList: '/sd/orderPay/waitApplyPayList', //分页查询待审核单据
        applyOrderPayList: '/sd/orderPay/applyOrderPayList', //审核待审核单据

        waitSubmitPayList: '/sd/orderPay/waitSubmitPayList', //待提交付款单
        getPayOrderByPayNo: '/sd/orderPay/{0}/getPayOrderByPayNo', // 获取详情

        orderReportList: '/sd/order/orderReportList', //采购订单跟踪报表-单据
        exportOrderReportList: '/sd/order/exportOrderReportList', //采购订单导出
        orderItemReportList: '/sd/order/orderItemReportList', //采购订单跟踪报表-物料
        exportOrderItemReportList: '/sd/order/exportOrderItemReportList', //采购订单导出
        waitDeliveryOrderList: '/sd/order/waitDeliveryOrderList',
        deliveryOrderItem: '/sd/order/deliveryOrderItem',
        deliveryDiffOrderItem: '/sd/order/deliveryDiffOrderItem',
        waitPDComfirmBackList: '/sd/orderBack/waitPDComfirmBackList',
        backOrderMara: '/sd/orderBack/backOrderMara', //退货操作
        exchangeOrderMara: '/sd/orderBack/exchangeOrderMara', //换货操作
        scrapOrderMara: '/sd/orderBack/scrapOrderMara', //报废操作
        waitToQMOrderDeliveryList: '/sd/orderDelivery/waitToQMOrderDeliveryList',
        storeBackOrderDeliveryList: '/sd/orderDelivery/storeBackOrderDeliveryList', //仓库退回查询
        qmBackOrderDeliveryList: '/sd/orderDelivery/qmBackOrderDeliveryList', //质检退回
        deleteOrderDelivery: '/sd/orderDelivery/deleteOrderDelivery', //作废收货数据
        comfirmDeliveryToQM: '/sd/orderDelivery/comfirmDeliveryToQM',
        deleteQMOrderDelivery: '/sd/orderDelivery/deleteQMOrderDelivery', //质检退回作废收货数据
        waitPDToStoreList: '/sd/orderDelivery/waitPDToStoreList',
        comfirmPDToStore: '/sd/orderDelivery/comfirmPDToStore',
        secondDeliveryToQM: '/sd/orderDelivery/secondDeliveryToQM', //质检退回送检确认
        waitPaymentOrderList: '/sd/order/waitPaymentOrderList', // 待付款查询
        saveOrderPayYFD: '/sd/order/saveOrderPayYFD', //保存预付单据
        saveOrderPay: '/sd/orderPay/saveOrderPay', //保存付款单据
        submitOrderPay: '/sd/orderPay/submitOrderPay', //提交付款单据
        updateOrderPay: '/sd/orderPay/updateOrderPay', // 修改保存付款单
        updateSubmitOrderPay: '/sd/orderPay/updateSubmitOrderPay', //修改提交付款单
        deleteOrderPay: '/sd/orderPay/deleteOrderPay', //删除付款单
        confirmPaymentOrder: '/sd/order/confirmPaymentOrder', // 确认付款操作
        backToWaitApply: '/sd/order/backToWaitApply', //确认付款退回

        queryBillInfoList: '/sd/bill/queryBillInfoList', //发票分页查询

        queryPayHeadReport: '/sd/orderPay/queryPayHeadReport', //预付/付款单报表
        queryPayItemReport: '/sd/orderPay/queryPayItemReport', //预付/付款单报表-明细
        exportPayHeadReport: '/sd/orderPay/exportPayHeadReport', //预付/付款单报表-导出
        exportPayItemReport: '/sd/orderPay/exportPayItemReport', //预付/付款单报表-明细-导出
    },
    //质量管理
    qmUrl: {
        getMaraCensorById: '/qm/maraCensor/getMaraCensorById', //根据id获取详情
        saveInspectResult: '/qm/maraCensor/saveInspectResult', //保存质检单
        getQmCheckResultByCensorId: '/qm/maraCensor/getQmCheckResultByCensorId', //获取质检单数据

        saveBLInspectResult: '/qm/maraCensor/saveBLInspectResult', //保存补录质检单

        applyQmCheckResult: '/qm/maraCensor/applyQmCheckResult', //质检复核

        waitQmReceiveList: '/qm/maraCensor/waitQmReceiveList',
        waitQmInspectList: '/qm/maraCensor/waitQmInspectList',
        waitQmSecondApplyList: '/qm/maraCensor/waitQmSecondApplyList',
        queryMaraCensorList: '/qm/maraCensor/queryMaraCensorList',
        exportMaraCensorList: '/qm/maraCensor/exportMaraCensorList',
        qmConfirmReceiveCensor: '/qm/maraCensor/qmConfirmReceiveCensor',
        backToReceiveCensor: '/qm/maraCensor/backToReceiveCensor',
        saveCensorShip: '/qm/maraCensor/saveCensorShip',
        printCensorShipList: '/qm/censorShip/printCensorShipList',
        printCensorShip: '/qm/censorShip/printCensorShip',
        queryCensorShipList: '/qm/censorShip/queryCensorShipList', //打印质检单查询列表（单据）
        getCensorShipDetail: '/qm/censorShip/getCensorShipDetail',

        queryPrintMaraCensorList: '/qm/maraCensor/queryPrintMaraCensorList', //打印质检单分页查询

        queryCensorShipItemList: '/qm/censorShip/queryCensorShipItemList', //打印质检单查询列表（物料）

        printCensorOrder: '/qm/maraCensor/printCensorOrder', //导出为PDF
        printCensorOrderList: '/qm/maraCensor/printCensorOrderList', //导出为PDF-批量

        qmRejectReceiveCensor: '/qm/maraCensor/qmRejectReceiveCensor',
        queryWaitDeptApplyList: '/qm/maraCensor/queryWaitDeptApplyList', //质检确认查询
        waitQMToStoreList: '/qm/maraCensor/waitQMToStoreList',
        comfirmToStore: '/qm/maraCensor/comfirmToStore', //质检转入库审批
    },

    //销售管理
    saleUrl: {
        saveSalesOrder: '/sales/order/saveSalesOrder', //创建采购订单-保存
        submitSalesOrder: '/sales/order/submitSalesOrder', //创建采购订单-提交
        waitSubmitSalesOrderList: '/sales/order/waitSubmitSalesOrderList', //销售订单待提交-查询
        getSalesOrderByOrderNo: '/sales/order/{0}/getSalesOrderByOrderNo', //根据单号获取数据
        updateSalesOrder: '/sales/order/updateSalesOrder', //修改销售订单
        updateSubmitSalesOrder: '/sales/order/updateSubmitSalesOrder', //修改并提交销售订单
        submitSalesOrderList: '/sales/order/submitSalesOrderList', //销售订单批量提交
    },

    //仓库管理
    storeUrl: {

        saveSpecialOrderIn: '/store/storeOrder/saveSpecialOrderIn', //保存特殊入库单

        queryNoInspectionList: '/sd/orderDelivery/queryNoInspectionList', //免检待入库查询
        queryInspectionList: '/sd/orderDelivery/queryInspectionList', //质检待入库查询
        addPDStoreOrder: '/store/storeOrder/addPDStoreOrder', //免检入库保存
        addQMStoreOrder: '/store/storeOrder/addQMStoreOrder', //质检入库保存
        getStoreInfoList: '/store/storeInfo/getStoreInfoList', //根据项目类别、公司添加物料查询
        waitSubmitStoreReqList: '/store/storeReq/waitSubmitStoreReqList', // //申请单待提交列表

        updateStoreReq: '/store/storeReq/{0}/updateStoreReq', //领料-修改
        saveStoreReq: '/store/storeReq/{0}/saveStoreReq', //领料申请-保存提交
        submitStoreReqList: '/store/storeReq/submitStoreReqList', //领料申请-批量提交
        deleteStoreReq: '/store/storeReq/deleteStoreReq', //删除

        getStoreOrderByStoreNo: '/store/storeOrder/getStoreOrderByStoreNo', //编辑选择获取数据
        getStoreReqById: '/store/storeReq/getStoreReqById', //编辑选择获取数据

        waitApplyStoreReqList: '/store/storeReq/waitApplyStoreReqList', ////待部门领导审批列表
        applyStoreReq: '/store/storeReq/applyStoreReq', //领料审批

        waitOutStoreReqList: '/store/storeReq/waitOutStoreReqList', //待仓库确认列表
        savePickOrder: '/store/storeOrder/savePickOrder', //仓库确认

        wareBackStoreReq: '/store/storeReq/wareBackStoreReq', // 待仓库确认拒绝


        addStoreOrderByReq: '/store/storeReq/addStoreOrderByReq', //确认出库
        getSameStoreReqList: '/store/storeReq/getSameStoreReqList', //获取相同的领料申请数据

        printStoreOrder: '/store/storeOrder/printStoreOrder', //待出库导出
        queryStoreInList: '/store/storeOrder/queryStoreInList', //入库查询
        queryStoreOutList: '/store/storeOrder/queryStoreOutList', //出库查询
        deleteStoreOrderByAdmin: '/store/storeOrder/deleteStoreOrderByAdmin', //出入库删除
        exportStoreInList: '/store/storeOrder/exportStoreInList', //入库导出
        exportStoreOutList: '/store/storeOrder/exportStoreOutList', //出库导出
        addCXStoreOrder: '/store/storeOrder/addCXStoreOrder', //冲销

        queryStoreReqReport: '/store/storeReq/queryStoreReqReport', //领料单查询
        exportStoreReqList: '/store/storeReq/exportStoreReqList', //导出

        addInStoreOrder: '/store/storeOrder/addInStoreOrder', //入库单保存
        addOutOrder: '/store/storeOrder/addOutOrder', //出库单保存
        queryTransferOrderList: '/store/storeInfo/queryTransferOrderList', //调拨单查询
        queryStoreInfoList: '/store/storeInfo/queryStoreInfoList', //库存查询
        saveTransferOrder: '/store/storeInfo/saveTransferOrder', //库存调仓保存
        exportStoreInfoList: '/store/storeInfo/exportStoreInfoList', //库存报表导出
        getTransferOrderByOrderNo: '/store/storeInfo/getTransferOrderByOrderNo', //调拨单号详情
    }
}