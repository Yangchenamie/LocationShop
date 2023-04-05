<template>
  <view class="con-item" @click="gotoDetail(item)">
    <!-- <view class="triangle">
      新
    </view> -->
    <view class="item-left">
      <image :src="item.driver.avatar" mode=""></image>
    </view>
    <view class="item-right">
      <view class="item-title">
        {{item.driver.userNickname}}共{{item.orderDescriptions.length}}件
      </view>
      <view class="item-date">
        {{item.gmtCreate}}
      </view>
    </view>
    <view class="con-right-item">
      <view class="price">
        +{{item.orderPrice}}
      </view>
      <!-- <view class="pickUp">
          待取货
        </view> -->
    </view>
  </view>
</template>

<script>
  export default {
    name: "orderCom",
    props: ['item'],
    data() {
      return {

      };
    },
    onLoad() {
      console.log('1111', this.item);
    },
    methods: {
      gotoDetail(item) {
        // uni.navigateTo({
        //   url: '/pages/orderDetail/orderDetail'+id
        // })
        // this.$emit('gotoDetail',item)
        uni.navigateTo({
          url:'/pages/GotoOrderDetail/GotoOrderDetail'
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .con-item {
    display: flex;
    align-items: center;
    // justify-content: space-around;
    height: 154rpx;
    width: 100%;
    border-bottom: 2rpx solid #C5C5C5;
    position: relative;

    .triangle {
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
      clip-path: polygon(0 0, 100% 0, 0 100%, 0 0);
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

    .item-right {
      width: 55%;
      display: flex;
      flex-flow: column;
      margin-left: 28rpx;

      .item-title {
        font-size: 28rpx;
        margin-bottom: 8rpx;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .item-date {
        font-size: 24rpx;
        color: #808080;
        // padding-left: 16rpx;
        box-sizing: border-box;
      }
    }


    .con-right-item {
      text-align: center;
      // font-size: 28rpx;

      .price {
        // margin-top: -40rpx;
        font-size: 28rpx;
      }

      .pickUp {
        color: #E03030;
        font-size: 20rpx;
        margin-top: 6rpx;
        // margin-left: -50rpx;
      }
    }

  }
</style>
