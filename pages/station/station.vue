<template>
  <view class="con">
    <view class="con-item">
      <view class="item-fl photo">
        头像
      </view>
      <view class="item-fr">
        <image :src="avatarurl" mode="" @click="preview"></image>
      </view>
    </view>
    <view class="con-item">
      <view class="item-fl">
        昵称
      </view>
      <view class="item-fr">
        {{nickname}}
      </view>
    </view>
    <view class="con-item">
      <view class="item-fl">
        绑定号码
      </view>
      <view class="item-fr">
        {{phone}}
      </view>
    </view>
    <view class="con-item">
      <view class="item-fl">
        身份验证
      </view>
      <view class="item-fr">
        个人认证
      </view>
    </view>
    <view class="con-item">
      <view class="item-fl">
        站场名
      </view>
      <view class="item-fr">
        {{stationName}}
      </view>
    </view>
    <view class="con-item">
      <view class="item-fl">
        营业时间
      </view>
      <view class="item-fr">
        {{hours}}
      </view>
    </view>
    <view class="con-item">
      <view class="item-fl">
        站场地址
      </view>
      <view class="item-fr address">
        {{address}}
      </view>
    </view>
    <!-- <navigator url="../privacy/privacy.vue" class="privacy">用户隐私政策</navigator> -->
    <button class="change" @click="gotoChange">修改信息</button>
  </view>

</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState('m_user', ['avatarurl', 'nickname', 'uId', 'phone', 'stationName', 'hours', 'address'])
    },
    methods: {
      ...mapMutations('m_user', ['updateavatarurl']),
      // gotoPage(){
      //   uni.navigateTo({
      //     url:'../../pages/person/person'
      //   })
      // },
      gotoChange() {
        uni.navigateTo({
          url: '../changeStation/changeStation'
        })
      },
      preview() {
        const imgUrl = uni.getStorageSync('avatarurl')
        let imgList = [];
        imgList.push(imgUrl)
        console.log(imgList);
        uni.previewImage({
          current: 0,
          urls: imgList,
        })
        console.log(2222222);
      },
    }
  }
</script>

<style lang="less">
  .con {
    width: 100%;

    // border-top: 36rpx solid #f1f1f1;
    .con-item {
      display: flex;
      justify-content: space-between;
      padding: 50rpx 66rpx 20rpx;
      border-bottom: 2rpx solid #f1f1f1;
      // padding: 0 66rpx;
      box-sizing: border-box;
      vertical-align: bottom;

      & image {
        width: 100rpx;
        height: 100rpx;
      }

      .item-fl {
        color: #000;
        font-size: 40rpx;
      }

      & .address {
        width: 400rpx;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .item-fr {
        color: #595959;
      }

      .photo {
        margin-top: 50rpx;
      }
    }

    .change {
      width: 60%;
      margin: 80rpx auto 0;
      border-radius: 20rpx;
      border-color: transparent;
      background-color: #6792FF;
      color: #fff;
    }
  }

  .privacy {
    text-align: center;
    color: #6792FF;
    margin-top: 100rpx;
  }
</style>