<template>
  <view class="">

    <view class="pic">
      <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image class="avatar" :src="avatarUrl"></image>
      </button>
    </view>
    <view class="nickname" >场站名
      <input class="weui-input" placeholder="请输入场所名" v-model="msg.name"/>
    </view>
    <view class="nickname" @change="getPhone">手机号码
      <input class="weui-input" placeholder="请输入手机号码" @change="getPhone" v-model="msg.phone" />
    </view>
    <view class="nickname">
      营业时间
    
      <input class="weui-input" placeholder="请输入营业时间" v-model="msg.hours" />
    </view>
    <view class="nickname">场所地址
      <input class="weui-input" placeholder="请输入场所地址" @click="getLocation" v-model="msg.local" ref="local" />
    </view>
    <view class="btnBuy" @click="gotoReg">
      授权
    </view>
    <view class="btn">
      <checkbox></checkbox>
      <view class="tip">
        我已阅读并同意使用<navigator url="../privacy/privacy.vue">用户隐私政策</navigator>
      </view>
    </view>
  </view>
</template>

<script>
  import amap from '../../util/amap-wx.130.js';
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import {
    watch
  } from "vue";
  import {
    checkPhone
  } from 'util/util.js'
  const defaultavatarUrl =
    'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
  export default {
    data() {
      return {
        avatarUrl: defaultavatarUrl,
       msg:{
         phone:"",
         name:"",
         hours:'',
         local: '',
       },
        
        addressName: '',
        weather: {
          hasData: false,
          data: []
        },
        amapPlugin: null,
        key: '190ef223233bd8fe08b3adc8c796dd3c',
        position: {
          longitude: null,
          latitude: null
        }
      }
    },
    onLoad() {
      this.amapPlugin = new amap.AMapWX({
        key: this.key
      });
    },
    computed: {
      ...mapState('m_user', ['avatarurl', 'nickname'])
    },
    methods: {
      ...mapMutations('m_user', ['updateavatarurl', 'updateNickname','updatePhone','updateStationName','updateHours','updateAddress']),
      onChooseAvatar(e) {
        console.log(e.detail);
        const {
          avatarUrl
        } = e.detail
        // this.setData({
        //   avatarUrl,
        // })
        console.log('e.detail', e.detail.avatarUrl)
        this.avatarUrl = e.detail.avatarUrl
        console.log(this.avatarUrl);
        this.updateavatarurl(this.avatarUrl)
        // this.updateNickname(this.nickname)
        // this.uploadFile();
      },
      getPhone(e) {
        const {
          value
        } = e.target;
        console.log("手机号码检测到变化" + value);
        this.phone = value
        if (!/^1[34578]\d{9}$/.test(this.phone)) {
          uni.showToast({
            title: '手机格式错误',
            icon: 'none'
          })
        }
      },
      gotoIndex() {

        if (uni.getStorageSync('nickname') && uni.getStorageSync('avatarurl')) {
          console.log(11111111);
          uni.navigateTo({
            url: '../../pages/index/index'
          })
        }
      },
      // 定位授权
      getLocation() {
        let that = this;
        // 1、判断手机定位服务【GPS】 是否授权
        uni.getSystemInfo({
          success(res) {
            console.log("判断手机定位服务是否授权:", res);
            let locationEnabled = res.locationEnabled; //判断手机定位服务是否开启
            let locationAuthorized = res.locationAuthorized; //判断定位服务是否允许微信授权
            if (locationEnabled == false || locationAuthorized == false) {
              //手机定位服务（GPS）未授权
              uni.showToast({
                title: "请打开手机GPS",
                icon: "none",
              });
            } else {
              console.log('已授权');
              //手机定位服务（GPS）已授权
              // 2、判断微信小程序是否授权位置信息
              // 微信小程序已授权位置信息
              uni.authorize({
                //授权请求窗口
                scope: "scope.userLocation", //授权的类型
                success: (res) => {
                  console.log('实现fnGetlocation（）');
                  that.fnGetlocation();
                },
                fail: (err) => {
                  err = err["errMsg"];
                  uni
                    .showModal({
                      content: "需要授权位置信息",
                      confirmText: "确认授权",
                    })
                    .then((res) => {
                      console.log('是否确认授权', res);
                      if (res[1]["confirm"]) {
                        uni.openSetting({
                          success: (res) => {
                            if (res.authSetting["scope.userLocation"]) {
                              // 授权成功
                              uni.showToast({
                                title: "授权成功",
                                icon: "none",
                              });
                              that.fnGetlocation();
                            } else {
                              // 未授权
                              uni.showToast({
                                title: "授权失败,请重新授权",
                                icon: "none",
                              });
                              uni.showModal({
                                title: "授权",
                                content: "获取授权" +
                                  authouName +
                                  "失败,是否前往授权设置？",
                                success: function(result) {
                                  if (result.confirm) {
                                    uni.openSetting();
                                  }
                                },
                                fail: function() {
                                  uni.showToast({
                                    title: "系统错误！",
                                    icon: "none",
                                  });
                                },
                              });
                            }
                          },
                        });
                      }
                      if (res[1]["cancel"]) {
                        // 取消授权
                        uni.showToast({
                          title: "你拒绝了授权，无法获得周边信息",
                          icon: "none",
                        });
                      }
                    });
                },
                complete(res) {
                  // console.log('授权弹框', res);
                  if (res.errMsg == "authorize:ok") {
                    that.fnGetlocation();
                  } else {
                    uni.showModal({
                      title: "授权",
                      content: "获取授权" + authouName + "失败,是否前往授权设置？",
                      success: function(result) {
                        if (result.confirm) {
                          uni.openSetting();
                        }
                      },
                      fail: function() {
                        uni.showToast({
                          title: "系统错误！",
                          icon: "none",
                        });
                      },
                    });
                  }
                },
              });
            }
          },
        });
      },
      // 定位获取
      fnGetlocation() {
        let that = this
        console.log('开始实现fnGetlocation');
        uni.chooseLocation({
          type: 'wgs84',
          // geocode: true, //设置该参数为true可直接获取经纬度及城市信息
          success: function(res) {
            console.log(res)
            // that.addrDel = res;
            console.log('res', res);
            that.msg.local = res.address
            console.log('this.local', that.msg.local);
            that.position.longitude = res.longitude
            that.position.latitude = res.latitude
          },
          fail: function() {
            uni.showToast({
              title: '获取地址失败，将导致部分功能不可用',
              icon: 'none'
            });
          }
        });
      },
      gotoReg() {
        // const file = uni.getStorageSync('')
        console.log(this.msg.name);
        let that = this
        const arr= Object.keys(that.position).map(item => that.position[item]);
        
        console.log(arr);
        uni.uploadFile({ 
          url: "http://1.12.244.193:80/map/add",
          filePath: that.avatarUrl,
          name: 'file',
          formData: {
            // "supplementId": 2,
            "latitude":that.position.latitude,
            "longitude":that.position.longitude,
            "mobilePhone": that.msg.phone,
            "name": that.msg.name,
            "hours": that.msg.hours,
            "address": that.msg.local,
            "file": that.avatarUrl,
          },
          success: (res) => {
            console.log(res);
            this.updatePhone(that.msg.phone)
            this.updateStationName(that.msg.name)
            this.updateHours( that.msg.hours)
            this.updateAddress(that.msg.local)
            uni.navigateTo({
              url:'/pages/person/person'
            })
          },
          fail: (res) => {
            console.log('失败了',res);
          }
        })
      }
    }

  }
</script>

<style scoped lang="less">
  .pic {
    border-bottom: 2rpx solid #f1f1f1;

    .avatar-wrapper {
      padding: 0;
      width: 56px !important;
      border-radius: 8px;
      margin-top: 40px;
      margin-bottom: 40px;
      border-bottom: 2rpx solid #f1f1f1;
    }

    .avatar {
      display: block;
      width: 56px;
      height: 56px;
    }
  }

  .nickname {
    display: flex;
    border-bottom: 2rpx solid #f1f1f1;
    padding: 36rpx;
    justify-content: space-between;

    .weui-input {
      width: 70%;
      border: 0;
      outline: 0;
      -webkit-appearance: none;
      background-color: transparent;
      font-size: inherit;
      color: inherit;
      height: 1.41176471em;
      line-height: 1.41176471;
      // margin-left: 50rpx;
    }
  }


  .btnBuy {
    margin: 50rpx auto 30rpx;
    width: 60%;
    padding: 30rpx 0;
    border-radius: 20rpx;
    background-color: #6792FF;
    color: #fff;
    text-align: center;
  }

  .btn {
    justify-content: center;
    display: flex;

    & .tip {
      display: flex;

      & navigator {
        color: #6792FF;
      }
    }
  }
</style>