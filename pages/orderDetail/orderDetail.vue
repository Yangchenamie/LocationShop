<template>
  <view class="container">
    <view class="conHeader">
      <image src="../../static/pic1.jfif" mode=""></image>
      <view class="headerText">
        <view>粤GD10086</view>
        <view>100******86</view>
      </view>
      <view class="date">
        01-02  10:33
      </view>
    </view>
    <view class="content">
      <view class="con-title">
        <view>订单号  12345</view>
        <view>预约时间   当天15：30</view>
      </view>
      <view class="con-item">
        <ul>
          <li>
            <view class="name">农夫山泉矿泉水330ml</view>
            <view class="number">x5</view>
            <view class="money">$23.50</view>
          </li>
          <li>
            <view class="name">乐事 番茄味薯片 40g/每袋</view>
            <view class="number">x5</view>
            <view class="money">$13.50</view>
          </li>
          <li>
            <view class="name">佳得乐饮料500ml</view>
            <view class="number">x5</view>
            <view class="money">$43.50</view>
          </li>
        </ul>
        <view class="computedTotal">
          <view class="name allColor">共15件</view>
          <view class="number allColor">总金额</view>
          <view class="money">$53.50</view>
        </view>
      </view>
      <view class="btnItem">
        <button class="reject">拒接</button>
        <button class="agree">接单</button>
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
      
    }
  }
</script>

<style scoped lang="less">
  .conHeader{
    display: flex;
    height: 200rpx;
    align-items: center;
    border-bottom: 20rpx solid #F1F1F1;
    
    & image{
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      margin-left: 56rpx;
    }
    
    .headerText{
      display: flex;
      color: 36rpx;
      flex-flow: column;
      line-height: 44rpx;
      margin-left: 42rpx;
      font-size: 36rpx;
    }
    .date{
      font-size: 28rpx;
      color: #808080;
      margin-left: 110rpx;
      margin-top: 45rpx;
    }
  }
  
  .content{
    
    .con-title{
      font-size: 28rpx;
      display: flex;
      justify-content: space-between;
      height: 62rpx;
      align-items: center;
      border-bottom: 2rpx solid #C5C5C5;
      padding: 0 50rpx;
      box-sizing: border-box;
    }
    
    .con-item{
       
      & ul li, .computedTotal{
        font-size: 28rpx;
        display: flex;
        // justify-content: space-between;
        flex-flow: row;
        padding: 0 50rpx;
        box-sizing: border-box;
        margin: 44rpx 0;
        line-height: 40rpx;
        
        .name{
          flex:0.6;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #575555;
        }
        .number{
          flex:0.2;
          text-align: center;
          color: #575555;
        }
        .money{
          flex:0.2;
          text-align: center;
        }
      }
    }
    .computedTotal{
      border-bottom: 2rpx solid #C5C5C5;
      margin: 44rpx 0 0 !important;
      padding: 0 50rpx 44rpx !important;
    }
    .allColor{
      color: #000 !important;
    }
    
    .btnItem{
      display: flex;
      // align-items: center;
      justify-content: space-between;
      margin-top: 190rpx;
      
      .reject{
        border: 2rpx solid #A53131;
        width: 160rpx;
        height: 80rpx;
        background-color: #fff;
        line-height: 82rpx;
      }
      .agree{
        background-color: #A53131;
        color: #fff;
        width: 160rpx;
        height: 80rpx;
        border: 2rpx solid #A53131;
        line-height: 82rpx;
      }
    }
  }
</style>
