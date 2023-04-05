<template>
  <view>
    <view class="pic">
      <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image class="avatar" :src="avatarUrl"></image>
      </button>
    </view>
    <view class="nickname">昵称
      <input type="nickname" class="weui-input" placeholder="请输入昵称" @change="onchange" />
    </view>
    <view class="btn">
      <view class="btnBuy" @click="gotoIndex">
        保存
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import {
    watch
  } from "vue";
  const defaultavatarUrl =
    'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
  export default {
    data() {
      return {
        avatarUrl: defaultavatarUrl,
      }
    },
    computed:{
      ...mapState('m_user', ['avatarurl', 'nickname'])
    },
    methods: {
      ...mapMutations('m_user', ['updateavatarurl', 'updateNickname']),
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
      onchange(e) {
        const {
          value
        } = e.target;
        console.log("检测到变化" + value);
        if (value != ' ') {
          this.updateNickname(value)
        }
      },
      // uploadFile() {
      //   uni.uploadFile({
      //     url: this.action, //后台接口
      //     filePath: this.avatarUrl, // 上传图片 url
      //     name: 'file',
      //     header: {
      //       'content-type': 'multipart/form-data',
      //       'token': this.header.token
      //     }, // header 值
      //     success: res => {
      //       let obj = JSON.parse(res.data)
      //       this.avatarUrl = obj.data
      //     },
      //     fail: e => {
      //       this.$refs.uToast.show({
      //         title: `上传失败`
      //       });
      //     }
      //   });avatarurl
      // },
      gotoIndex() {
          uni.uploadFile({
            url:"http://1.12.244.193:80/oss/upload", //后台接口
            filePath: this.avatarUrl, // 上传图片 url
            name: 'file',
            header: {
              'content-type': 'multipart/form-data',
            }, // header 值
            success: res => {
              if (uni.getStorageSync('nickname') && uni.getStorageSync('avatarurl')) {
                console.log(11111111);
                uni.navigateBack({
                  url:'../../pages/index/index'
                })
              }
            },
            fail: e => {
              this.$refs.uToast.show({
                title: `上传失败`
              });
            }
          });
        },
    },
    
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

    .weui-input {
      width: 80%;
      border: 0;
      outline: 0;
      -webkit-appearance: none;
      background-color: transparent;
      font-size: inherit;
      color: inherit;
      height: 1.41176471em;
      line-height: 1.41176471;
      margin-left: 50rpx;
    }
  }

  .btn {
    margin-top: 150rpx;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .btnBuy {

      width: 60%;
      padding: 30rpx 0;
      border-radius: 20rpx;
      background-color: #6792FF;
      color: #fff;
      text-align: center;
    }
  }
</style>
