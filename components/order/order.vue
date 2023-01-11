<template>
  <view class="container">
    <view class="con-title">
      <view class="date">
        今日
      </view>
      <navigator url="">查看月账单</navigator>
    </view>
    <view class="content">
      <view class="con-item" @click="gotoDetail">
        <view class="triangle">
          新
        </view>
        <view class="item-left">
          <image src="../../static/pic1.jfif" mode=""></image>
        </view>
        <view class="item-right">
          <view class="item-title">
            【粤GD10086】共15件
          </view>
          <view class="item-date">
               12-29 15:33
          </view>
        </view>
        <view class="con-right-item">
          <view class="price">
            +32.50
          </view>
          <!-- <view class="pickUp">
            待取货
          </view> -->
        </view>
      </view>
      <view class="con-item">
<!--        <view class="triangle">
          新
        </view> -->
        <view class="item-left">
          <image src="../../static/pic.jfif" mode=""></image>
        </view>
        <view class="item-right">
          <view class="item-title">
            【粤GD10086】共15件
          </view>
          <view class="item-date">
               12-29 15:33
          </view>
        </view>
        <view class="con-right-item">
          <view class="price">
            +32.50
          </view>
          <!-- <view class="pickUp">
            待取货
          </view> -->
        </view>
      </view>
      <view class="con-item">
       <!-- <view class="triangle">
          新
        </view> -->
        <view class="item-left">
          <image src="../../static/pic2.png" mode=""></image>
        </view>
        <view class="item-right">
          <view class="item-title">
            【粤GD10086】共15件
          </view>
          <view class="item-date">
               12-29 15:33
          </view>
        </view>
        <view class="con-right-item">
          <view class="price">
            +32.50
          </view>
          <view class="pickUp">
            待取货
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "order",
    data() {
      return {

      };
    },
    methods:{
      gotoDetail(){
        uni.navigateTo({
          url:'/pages/orderDetail/orderDetail'
        })
      }
    }
  }
</script>

<style scoped lang="less">
  // .container{
  //   margin-bottom: 30rpx;
  // }
  .con-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 140rpx;
    padding: 0 64rpx;
    border-bottom: 2rpx solid #C5C5C5;

    .date {
      font-size: 52rpx;
    }

    & navigator {
      // display: block;
      height: 36rpx;
      font-size: 20rpx;
      padding: 4rpx 10rpx;
      background-color: #000;
      color: #fff;
      border-radius: 4rpx;
      line-height: 36rpx;
    }
  }

  .content {

    .con-item {
      display: flex;
      align-items: center;
      // justify-content: space-around;
      height: 154rpx;
      width: 100%;
      border-bottom: 2rpx solid #C5C5C5;
      position: relative;

      .triangle{
        position: absolute;
        left: 0;
        top: 0;
        width: 60rpx;
        height: 50rpx;
        font-size: 22rpx;
        color: #fff;
        line-height: 36rpx;
        padding-left: 5rpx;
        box-sizing: border-box;
        clip-path: polygon(0 0, 100% 0 ,0  100%, 0 0);
        background: #A53131;
      }

      .item-left {
        margin-left: 36rpx;
      
        & image {
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
        }
      }
      
      .item-right{
        width: 55%;
        display: flex;
        flex-flow: column;
        margin-left: 28rpx;
        
        .item-title{
          font-size: 28rpx;
          margin-bottom: 8rpx;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        
        .item-date{
          font-size: 24rpx;
          color: #808080;
          padding-left: 16rpx;
          box-sizing: border-box;
        }
      }
      
      
      .con-right-item{
        text-align: center;
         // font-size: 28rpx;
         
        .price{
        // margin-top: -40rpx;
          font-size: 28rpx;
      }
      
      .pickUp{
        color: #E03030;
        font-size: 20rpx;
        margin-top: 6rpx;
        // margin-left: -50rpx;
      }
      }
     
    }

  }
</style>
