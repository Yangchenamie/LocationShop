<template>
  <view>
    <view class="tabNav">
      <view @click="gotoPage" class="tabImg">
        <image src="/static/left.png"></image>
      </view>
      <view class="title">
        我的评价
      </view>
      <!-- <view class="save">
        保存
      </view> -->
    </view>
    <view class="con">
      <view class="con-tab">

        <picker mode="date" fields="month" :value="dataMonth" @change="bindDateChange">
          <view>
            <span class="tabMonth">{{dataMonth}}</span>月/{{dataYear}}
          </view>

        </picker>

        <image src="../../static/down.png" mode=""></image>
      </view>
      <view class="con-item">
        <image src="../../static/pic1.jfif" mode=""></image>
        <view class="item-fr">
          <view class="">
            粤GD10086
          </view>
          <view class="">
            100******86
          </view>
          <view class="eval">
            ：老板人超级无敌好，地址详细，容易找
          </view>
        </view>
        <view class="item-time">
          <view class="item-star">
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
          </view>
          <view class="">
            01-02  10:33
          </view>
        </view>
      </view>
      <view class="con-item">
        <image src="../../static/pic1.jfif" mode=""></image>
        <view class="item-fr">
          <view class="">
            粤GD10086
          </view>
          <view class="">
            100******86
          </view>
          <view class="eval">
            ：老板人超级无敌好，地址详细，容易找
          </view>
        </view>
        <view class="item-time">
          <view class="item-star">
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
          </view>
          <view class="">
            01-02  10:33
          </view>
        </view>
      </view>
      <view class="con-item">
        <image src="../../static/pic1.jfif" mode=""></image>
        <view class="item-fr">
          <view class="">
            粤GD10086
          </view>
          <view class="">
            100******86
          </view>
          <view class="eval">
            ：老板人超级无敌好，地址详细，容易找
          </view>
        </view>
        <view class="item-time">
          <view class="item-star">
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
            <image src="../../static/star.png" mode=""></image>
          </view>
          <view class="">
            01-02  10:33
          </view>
        </view>
      </view>
      
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // data:'',
        dataMonth: this.getCurrentMonth(),
        dataYear: this.getCurrentYear()
      }
    },
    methods: {
      bindDateChange: function(e) {
        this.date = e.target.value
        this.date = this.date.split('-')
        this.dataMonth = this.date[1]
        this.dataYear = this.date[0]
        console.log(this.date)
      },
      getCurrentMonth(){
        const date = new Date()
        let month =  date.getMonth()+1
        month = month > 9 ?month : '0' + month
        return month
      },
      getCurrentYear(){
        const date = new Date()
        return date.getFullYear()
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

      & image {
        width: 100%;
        height: 100%;
      }
    }
  }

  .con {
    .con-tab {
      width: 100%;
      display: flex;
      font-size: 24rpx;
      align-items: baseline;
      padding-left: 48rpx;
      padding-top: 30rpx;

      & picker {
        display: flex;

        .tabMonth {
          font-size: 52rpx;
          font-weight: 500;
          margin-right: 6rpx;
        }
      }

      & image {
        width: 25rpx;
        height: 25rpx;
      }
    }
    .con-item{
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 34rpx;
      font-size: 24rpx;
      height: 200rpx;
      border-bottom: 2rpx solid #f1f1f1;
      & image{
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        margin-top: -10rpx;
      }
      .item-fr{
        display: flex;
        flex-flow: column;
        margin-left: 16rpx;
        margin-top: 8rpx;
        & view{
          margin: 5rpx 0;
        }
        .eval{
          font-size: 28rpx;
          margin-top: 20rpx;
        }
      }
    }
    .item-time{
      width: 30%;
      position: absolute;
      right: 0rpx;
      top: 40rpx;
      font-size: 28rpx;
      color: #808080;
      .item-star{
        & image{
          width: 22rpx;
          height: 22rpx;
        }
      }
    }
  }
</style>
