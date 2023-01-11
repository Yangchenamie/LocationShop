<template>
  <view class="container">
    <scroll-view scroll-y="true" class="scroll-x">
      <!-- <view class="items" :class="active===index?'active':''"  @click="activeChanged(item.cateId);change(index)">饮料</view> -->
      <!-- <view class="items" :class="active===index?'active':''"  @click="activeChanged(item.cateId);change(index)">零食</view> -->
      <!-- <view class="items" :class="active===index?'active':''"  ">纸巾</view> -->
      <view class="items" :class="active===index?'active':''">饮料</view>
      <view class="items" :class="active===index?'active':''">零食</view>
      <view class="items" :class="active===index?'active':''">纸巾</view>
    </scroll-view>
    <!-- <view class="commodity" @click="toCommodityInfo(item.commodityId,item.commodityImg,item.commodityTitle,item.commodityPrice,item.commodityStatus)" v-for="(item,index) in commodity" :key="item.commodityId">
          <image :src="item.commodityImg" mode=""></image>
          <view class="commodity-info">
            <p>{{item.commodityTitle}}</p>
            <p class="price">￥{{item.commodityPrice}}</p>
          </view>
        </view> -->
    <scroll-view scroll-y class="right-scroll-view">
      <view class="cate-rv-con">
        <!-- <navigator :url="'/pages/commodityInfo/commodityInfo?gid='+item2.id" class="goods-item"> -->
        <view class="goods-item" @click="showPop()">
          <!-- 商品左侧图片区域 -->
          <view class="goods-item-left">
            <image src="../../static/4.png" class="goods-pic"></image>
          </view>
          <!-- 商品右侧信息区域 -->
          <view class="goods-item-right">
            <!-- 商品标题 -->
            <view class="goods-name">可口可乐500ml</view>

            <!-- 商品价格 -->
            <!-- <view class="goods-price">$3.50</view> -->
            <view class="goods-num">$3.50</view>
            <view v-show="flag" class="btnNum">
              <view class="btn" @click="OddAnbSub">-</view>
              <view class="">{{total}}</view>
              <view class="btn" @click="AddAnbSub">+</view>
            </view>
            <view v-show="!flag" @click="flag = !flag" class="showTotal">x{{total}}</view>
          </view>
        </view>
        <view class="goods-item">
          <!-- 商品左侧图片区域 -->
          <view class="goods-item-left">
            <image src="../../static/6.png" class="goods-pic"></image>
          </view>
          <!-- 商品右侧信息区域 -->
          <view class="goods-item-right">
            <!-- 商品标题 -->
            <view class="goods-name">七喜柠檬汽水350ml</view>

            <!-- 商品价格 -->
            <!-- <view class="goods-price">$5.00</view> -->
            <view class="goods-num">$5.00</view>
            <view v-show="flag" class="btnNum">
              <view class="btn" @click="OddAnbSub">-</view>
              <view class="">{{total}}</view>
              <view class="btn" @click="AddAnbSub">+</view>
            </view>
            <view v-show="!flag" @click="flag = !flag" class="showTotal">x{{total}}</view>
          </view>
        </view>
        <view class="goods-item">
          <!-- 商品左侧图片区域 -->
          <view class="goods-item-left">
            <image src="../../static/5.png" class="goods-pic"></image>
          </view>
          <!-- 商品右侧信息区域 -->
          <view class="goods-item-right">
            <!-- 商品标题 -->
            <view class="goods-name">雪碧350ml</view>

            <!-- 商品价格 -->
            <!-- <view class="goods-price">$4.00</view> -->
            <view class="goods-num">$4.00</view>
            <view v-show="flag" class="btnNum">
              <view class="btn" @click="OddAnbSub">-</view>
              <view class="">{{total}}</view>
              <view class="btn" @click="AddAnbSub">+</view>
            </view>
            <view v-show="!flag" @click="flag = !flag" class="showTotal">x{{total}}</view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="addGoods" @click="gotoAdd">
      <image src="../../static/add.png" mode=""></image>
    </view>
  </view>
</template>

<script>
  export default {
    name: "choiceIndex",
    data() {
      return {
        flag:false,
        total:5
      };
    },
    methods:{
      OddAnbSub(){
        this.total--;
      },
      AddAnbSub(){
        this.total++;
      },
      gotoAdd(){
        uni.navigateTo({
          url:'../../pages/addDetail/addDetail'
        })
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    position: relative;
    border-top: 18rpx solid #F1F1F1;
    background-color: #fff;
  }

  .scroll-x {
    width: 180rpx;
    background-color: #fff;
  }

  .scroll-x .items {
    width: 180rpx;
    text-align: center;
    line-height: 80rpx;
    height: 80rpx;
    font-size: 28rpx
  }

  .active {
    background-color: rgba(217, 217, 217, 0.8);
    font-weight: 600;
  }

  .bread .bread-item {
    padding: 10rpx 20rpx;
    border-radius: 30rpx;
    text-align: center;
    font-size: 28rpx;
    line-height: 20rpx;
    height: 20rpx;
    border: 4rpx solid #999999;
  }

  .bread {
    display: flex;
    flex-flow: wrap;
    margin-bottom: 20rpx;
    padding: 20rpx;
  }

  .bread .bread-item {
    margin-right: 20rpx;
    font-size: 26rpx;
    color: #999999;
  }

  .move {
    background-color: #f3f9ff;
    color: #177FFF;
    border: 4rpx solid #177FFF !important;
  }

  .con-right {
    width: 540rpx;
    margin-left: 20rpx;
  }

  .goods-item {
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #f0f0f0;
  }

  .goods-item-left {
    margin-right: 5px;
  }

  .goods-pic {
    width: 140rpx;
    height: 140rpx;
    display: block;
  }


  .goods-item-right {
    width: 80%;
    font-size: 28rpx;
    position: relative;
  }

  .goods-num {
    margin-top: 80rpx;
  }

  .goods-name {
    transform: translateY(50%);
    float: left;
    font-size: 28rpx;
    /* margin-top: 20rpx; */
  }

  .right-scroll-view {
    border-left: 2rpx solid #f0f0f0;
    
  }
  .btnNum{
    position: absolute;
    display: flex;
    line-height: 50rpx;
    text-align: center;
    right:  50rpx;
    bottom: 0rpx;
  }
  .btnNum .btn{
    width: 50rpx;
    height: 50rpx;
    background-color: #D9D9D9;
  }
  .btnNum view{
    width: 50rpx;
    height: 50rpx;
    background-color: #fff;
  }
  .showTotal{
    position: absolute;
    height: 50rpx;
    width: 50rpx;
    border: 2rpx solid #575555;
    color: #575555;
    line-height: 50rpx;
    text-align: center;
    right:  60rpx;
    bottom: 0rpx;
  }
  .addGoods{
    position: fixed;
    bottom: 50rpx;
    right: 80rpx;
  }
  .addGoods image{
    width: 116rpx;
    height: 116rpx;
  }
</style>
