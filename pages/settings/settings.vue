<template>
  <view>
    <view class="tabNav">
      <view @click="gotoPage" class="tabImg">
        <image src="/static/left.png"></image>
      </view>
      <view class="title">
        设置
      </view>
      <!-- <view class="save">
        保存
      </view> -->
    </view>
    <view class="con">
      <view class="con-item">
        <view class="item-fl photo" >
          头像
        </view>
        <view class="item-fr">
          <image src="../../static/2.jpg" mode=""></image>
        </view>
      </view>
      <view class="con-item">
        <view class="item-fl">
          昵称
        </view>
        <view class="item-fr">
          大白
        </view>
      </view>
      <view class="con-item">
        <view class="item-fl">
          绑定号码
        </view>
        <view class="item-fr">
          100****86
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
          站场地址
        </view>
        <view class="item-fr">
          韶关市韶关...
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      gotoPage(){
        uni.navigateTo({
          url:'../../pages/person/person'
        })
      }
    }
  }
</script>

<style lang="less">
  .tabNav {
    position: relative;
    width: 100%;
    // height: 92rpx;
    line-height: 92rpx;
    text-align: center;
    padding: 0 40rpx;
    box-sizing: border-box;
    color: #000;
    font-size: 40rpx;
    border-bottom: 20rpx solid #F1F1F1;
  
    .tabImg {
      position: absolute;
      left: 20px;
      width: 40rpx;
      height: 40rpx;
      // margin-top: 20rpx;
       
       & image{
         width: 100%;
         height: 100%;
       }
    }
  }
  .con{
    width: 100%;
    .con-item{
      display: flex;
      justify-content: space-between;
      padding: 50rpx 66rpx 20rpx;
      border-bottom:2rpx solid #f1f1f1;
      // padding: 0 66rpx;
      box-sizing: border-box;
      vertical-align: bottom;
      & image{
        width: 100rpx;
        height: 100rpx;
      }
      .item-fl{
        color: #000;
        font-size: 40rpx;
      }
      .item-fr{
        color: #595959;
      }
      .photo{
        margin-top: 50rpx;
      }
    }
  }
</style>
