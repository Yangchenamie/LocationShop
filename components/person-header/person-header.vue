<template>
  <view class="content">
    <view class="content-header">
      <view class="con-left">
        <img src="../../static/2.jpg" alt="">
      </view>
      <view class="con-right">
        <view class="con-name">
          大白
        </view>
        <view class="con-num">
          100******86
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  export default {
    name:"person-header",
    data() {
      return {
        
      };
    }
  }
</script>

<style>
  .content-header{
    padding-left: 80rpx;
    padding-top: 20rpx;
    width: 100%;
    height: 260rpx;
    display: flex;
    background-color: #6792FF;
    box-sizing: border-box;
  }
  .con-left {
    margin-right: 34rpx;
  }
  
  .con-left image{
    width: 130rpx;
    height: 130rpx;
    border-radius: 50%;
  }
  .con-right{
    display: flex;
    flex-flow: column;
    line-height: 56rpx;
    padding-top: 10rpx;
  }
  .con-name{
    font-size: 40rpx;
  }
  .con-num{
    font-size: 36rpx;
  }
  .content-icon{
    margin-top: -40rpx;
    width: 100%;
    height: 160rpx;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-top-left-radius: 32rpx;
    border-top-right-radius: 32rpx;
    font-size: 36rpx;
    padding-top: 40rpx;
  }
  .content-icon image{
    width: 60rpx;
    height: 60rpx;
  }
</style>