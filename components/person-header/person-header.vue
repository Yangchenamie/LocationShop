<template>
  <view class="content">
    <view class="content-header">
      <view class="con-left" @click="preview">
        <img :src="avatarurl" alt="">
      </view>
      <view class="con-right">
        <view class="con-name">
          {{nickname}}
        </view>
        <view class="con-num">
          {{phone}}
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:"person-header",
    data() {
      return {
        
      };
    },
    computed:{
      ...mapState('m_user',['avatarurl','nickname','phone'])
    },
    methods:{
      
      preview(){
        const imgUrl = uni.getStorageSync('avatarurl')
        let imgList=[];
        imgList.push(imgUrl)
        console.log(imgList);
        uni.previewImage({
          current:0,
          urls:imgList,
        })
        console.log(2222222);
      },
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