<template>
  <view class="content">
    <indexNav></indexNav>
    <order></order>
    <uni-popup ref="uPopup" :mask-click="false" type="center">
      <view class="agreement-view" :style="{ width: scrollWidth * 0.80 + 'px', height: scrollHeight * 0.70 + 'px' }">
        <!-- 弹框提示头 -->
        <view class="u-text-center">用户使用须知</view>
        <scroll-view scroll-y class="agreement-content" :style="{ height: (scrollHeight - 110) * 0.70 + 'px' }">
          尊敬的用户，欢迎阅读本协议：
          您的隐私对我们很重要。并且我们致力于保护您的隐私。因此，我们制定了隐私政策。本隐私政策（“隐私政策”）解释了当您使用软件和服务时，我们如何处理您的信息并保护您的隐私，以及与您的信息有关的可用权利和选项。我们认为，您有权了解我们在使用软件和服务时可能收集和使用的信息的做法。如果您不同意此处设定的条款和条件，请不要使用该软件和服务。
        </scroll-view>
        <view class="agreement-btns" :style="{ height: (scrollHeight*0.7 - (scrollHeight - 120) * 0.70) - 42 + 'px' }">
          <navigator class="no-btn text" target="miniProgram" open-type="exit">
            暂不使用
          </navigator>
          <view class="yse-btn text" @tap="admit">同意</view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
  import indexNav from '../../components/indexNav/indexNav.vue'
  import order from '../../components/order/order.vue'
  import {
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        scrollWidth: uni.getSystemInfoSync().windowWidth,
        scrollHeight: uni.getSystemInfoSync().windowHeight,

      }
    },
    mounted() {
      this.getUserProfile()
      this.judge();
    },
    methods: {
      // gotoSearch(){
      //   console.log(1);
      //   uni.navigateTo({
      //     url:'/search/search'
      //   })
      // }
      ...mapMutations('m_user', ['updateUserInfo', 'updateToken', 'updateUId']),
      getUserProfile() {
        uni.showModal({
          title: '提示',
          content: "是否授权登录",
          success: (res) => {
            uni.getUserProfile({
              desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
              success: (res) => {
                console.log('222222222222', res);
                this.updateUserInfo(res.userInfo)
                this.getToken(res)
              },
              fail: (res) => {
                console.log('333333', res);
              }
            })
          },
          fail: () => {
            uni.showToast({
              title: '您取消了授权',
              icon: "error",
            })
          }
        })
      },
      async getToken(info) {
        const [err, res] = await uni.login().catch(err => err)
        if (res.errMsg !== "login:ok") return uni.$showMsg('登录失败！123')
        console.log('22', info);
        console.log('33', res);
        const {
          data
        } = await
        this.request({
          url: "/supplement/umember/login",
          header: {
            'Content-Type': 'application/json',
          },
          data: {
            "code": res.code,
            "rawData": info.rawData,
            "signature": info.signature
          },
          method: 'POST'
        })
        console.log(data);
        this.updateToken(data.token)
        this.getUId()
      },
      async getUId() {
        const {
          data
        } = await this.request({
          url: "/supplement/umember/getLoginInfo",
          header: {
            'token': uni.getStorageSync('token')
          }
        })
        console.log(data);
        this.updateUId(data.user.id)
        uni.navigateTo({
          url: '../register/register'
        })
      },
      judge() {
        uni.getStorage({
          key: 'agreement_key',
          success: () => {
            // 获取到了不显示弹窗
            this.$refs.uPopup.close();
            uni.showTabBar({
              animation: true
            })
          },
          fail: () => {
            uni.hideTabBar({
              animation: true
            })
            this.$refs.uPopup.open('center');
          }
        })
      },
      // 同意按钮
      admit() {
        try {
          uni.setStorageSync('agreement_key', 'yes');
          uni.setStorageSync('agreement_Date', new Date().toLocaleString())
        } catch (e) {
          //TODO handle the exception
        }
        this.$refs.uPopup.close();
        uni.showTabBar({
          animation: true
        })
        // 注册场站
        this.regShop()
      },
      async visit(){
        const data = await this.request({
          url:"/shop/count/add"
        })
        console.log(data);
      },
      regShop(){
        uni.showModal({
          title: '注册场站',
          content: "是否注册新场站",
          success: (res) => {
            uni.navigateTo({
              url:'/pages/locationReg/locationReg'
            })
          }
        })
      }
    },
    components: {
      indexNav,
      order
    }
  }
</script>

<style>
  .line {
    /* line-height: 18px; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    vertical-align: middle;
    font-weight: normal
  }

  .agreement-view {
    margin-top: 20px;
    box-shadow: 0 5rpx 20rpx 0rpx rgba(0, 0, 150, .2);
    border-radius: 20rpx;
    padding: 20rpx 0rpx 0rpx 0rpx;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    align-items: center;
    /* justify-content: center; */
    background-color: #fff;
  }

  .u-text-center {
    font-size: 15px;
    padding-bottom: 20rpx;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    width: 100%;
    height: 30px;
    text-align: center;
  }

  .agreement-content {
    overflow-y: scroll;
    padding: 0rpx 20rpx 10rpx 20rpx;
    font-size: 36rpx;
  }

  .agreement-btns {
    width: 100%;
    /* height: 85rpx; */
    display: flex;
    flex-direction: row;
  }

  .yse-btn {
    color: #fff;
    background-color: red;
    flex: 1;
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 0 0 20rpx 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .no-btn {
    /* background-color: aquamarine; */
    flex: 1;
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 0 0 0 20rpx;
  }

  .text {

    line-height: 46px;
  }
</style>