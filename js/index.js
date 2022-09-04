// 自定义抽奖弹窗组件
const CustomLuckyDrawDrawer = {
  data() {
    return {
      // 显示状态
      visible: false,
      // 自定义列表
      customs: []
    }
  },


  methods: {
    // 显示抽屉
    showDrawer() {
      // 获取自定义列表
      this.customs = JSON.parse(localStorage.getItem('customs')) || []
      // 显示
      this.visible = true
    },
    // 关闭抽屉
    onClose() {
      // 过滤空名称奖项
      const customs = this.customs.filter(item => {
        return !!item.name
      })
      // 转成 json
      const jsonString = JSON.stringify(customs)
      // 存储到 localStorage
      localStorage.setItem('customs', jsonString)
      // 关闭窗口
      this.visible = false
      // 回调
      this.$emit('close')
    },
  }
}

// 主视图
new Vue({
  el: '#app',
  components: {
    CustomLuckyDrawDrawer
  },
  template: `
    <div class="import-view">
      <div id="content">
        <div id='localtime'></div>
        <div id='localtime1'></div>
      </div>
      <div class="contextmenu" id="context">
        <ul>
          <li @click="go_seven"><a><a-icon type="trophy"/> 七班</a></li>
          <li @click="ClosePage"><a><a-icon type="logout"/> 关闭</a></li>
        </ul>
      </div>
    </div>
  `,
  data() {
    return {
      // 0 默认抽奖模式，1 自定义抽奖模式
      modeType: 0,
      // 上传文件列表
      fileList: [],
      // 上传状态
      isLoading: false,
      // 用户列表
      users: [],
      // 是否导入了用户列表
      isImportUsers: false,
      // 是否有自定义奖项配置
      isImportMode: false
    }
  },
  created() {

  },
  methods: {
    // 跳转
    go_six() {
      window.open('./html/class_six.html')
    },
    go_seven() {
      window.open('./html/class_seven.html')
    },
    ClosePage() {
      open(location, '_self').close();
    }

  }
})