<template>
    <view class="con-sear">
      <image src="../../static/search.png" mode=""></image>
      <input type="text" placeholder="搜索" @click="goto">
    </view>
</template>

<script>
  export default {
    name:"search",
    data() {
      return {
        
      };
    },
    methods:{
      goto(){
        console.log(1);
        uni.navigateTo({
          url:'../search/search'
        })
      }
    }
  }
</script>

<style scoped>
 .con-sear{
    width: 100%;
    position: relative;
    height: 92rpx;
    margin: 12rpx 0;
    background-color: #fff;
  }
  .con-sear input{
    margin:0  50rpx;
    width: 85%;
    border: 2rpx solid #5081FF;
    height: 68rpx;
    border-radius: 18rpx;
    padding-left: 80rpx;
    padding-right: 30rpx;
    box-sizing: border-box;
    font-size: 24rpx
  }
  .con-sear image{
    width: 40rpx;
    height: 40rpx;
    position: absolute;
    top: 16rpx;
    left: 10rpx;
    margin-left: 64rpx;
  }
</style>