<template>
  <view class="container">
    <scroll-view scroll-y="true" class="scroll-x">
      <view class="items" :class="active===index?'active':''" v-for="(item,index) in classify" :key="item.id"
        @click="activeChanged(item.id);change(index)">{{item.name}}</view>
    </scroll-view>
    <scroll-view scroll-y class="right-scroll-view">
      <view class="cate-rv-con">
        <view class="goods-item" v-for="(item,index) in goodsInfo" :key="index" @click="getId(item.id,item.productStock)">
          <!-- 商品左侧图片区域 -->
          <view class="goods-item-left">
            <image :src="item.productPicture" class="goods-pic"></image>
          </view>
          <!-- 商品右侧信息区域 -->
          <view class="goods-item-right">
            <!-- 商品标题 -->
            <view class="goods-name">{{item.productName}}</view>
            <view class="goods-num">${{item.productPrice}}</view>
            <view class="showTotal" v-model="item.productStock">x{{item.productStock}}</view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="addPic" @click="gotoAdd">
      +
    </view>
    <view class="uniPop" ref="uniPop" v-if="addFlag" id="uniPop" @click="closeMsg">
      <view class="title" >
        添加数量
      </view>
      <uni-number-box v-model="num" />
      <button @click="" id="trueShop" @click="add">确认添加</button>
    </view>
  </view>
</template>

<script>
  export default {
    name: "choiceIndex",
    data() {
      return {
        flag: false,
        total: 0,
        goodsInfo: [],
        classify: {},
        classify_id: '',
        active: 0,
        current: 0,
        i: 0,
        arr: [],
        addFlag: false,
        num:1,
        id:''

      };
    },
    mounted() {
      this.getClassify()
      this.getGoodsFirst()
    },
    created() {

    },
    methods: {
      change(value) {
        this.numberValue = value
      },
      closeMsg(e) {
        console.log(e);

        // if (e.target.id != "trueShop") {
        this.flag = false;
        // }
        console.log(this.flag);
      },
      getId(id,val) {
        this.addFlag = true;
        this.id = id
        console.log(this.id);
        this.num = val
      },
      async add(id){
        
        const res = await this.request({
          url:"/supplement/product/update",
          header:{
            "Content-Type":"application/json"
          },
          data:{
            "id": this.id, 
            "productStock": this.num
          },
          method:'POST'
        })
        console.log(res);
        this.addFlag = false
        this.getGoodsFirst()
      },
      gotoAdd() {
        uni.navigateTo({
          url: '../../pages/addDetail/addDetail'
        })
      },
      async getClassify() {
        const {
          data
        } = await this.request({
          url: "/supplement/variety/select/8007"
        })
        console.log(data);
        this.classify = data.list
      },
      activeChanged(i) {
        this.classify_id = i
        this.getGoodsAll(this.classify_id)
      },
      change(index) {
        this.active = index
        this.current = index
      },
      async getGoodsAll(id) {
        console.log(id);
        const {
          data
        } = await this.request({
          url: `/supplement/product/selectByV/8007/${id}`
        })
        console.log(data);
        this.goodsInfo = data.list
      },
      async getGoodsFirst() {
        const {
          data
        } = await this.request({
          url: '/supplement/product/selectAll/8007'
        })
        console.log('全部', data);
        this.goodsInfo = data.list
        for (var i = 0; i < data.list.length; i++) {
          this.arr.push(data.list[i].productStock)
        }
        console.log(this.arr);
      },

    },

    watch: {

    }
  }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    position: relative;
    border-top: 18rpx solid #F1F1F1;
    background-color: #fff;
  }

  .scroll-x {
    width: 180rpx;
    background-color: #fff;
    min-height: 900rpx;
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

  .btnNum {
    position: absolute;
    display: flex;
    line-height: 50rpx;
    text-align: center;
    right: 50rpx;
    bottom: 0rpx;
  }

  .btnNum .btn {
    width: 50rpx;
    height: 50rpx;
    background-color: #D9D9D9;
  }

  .btnNum view {
    width: 50rpx;
    height: 50rpx;
    background-color: #fff;
  }

  .showTotal {
    position: absolute;
    height: 50rpx;
    width: 50rpx;
    border: 2rpx solid #575555;
    color: #575555;
    line-height: 50rpx;
    text-align: center;
    right: 60rpx;
    bottom: 0rpx;
  }

  .addPic {
    position: fixed;
    bottom: 50rpx;
    right: 80rpx;
    height: 116rpx;
    width: 116rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 100rpx;
    color: #FFE6E6;
    border-bottom: 2rpx solid #f1f1f1;
    border: 1px solid #FFE6E6;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
    line-height: 116rpx;
  }

  .uniPop {
    /* display: none !important; */
    z-index: 99;
    position: fixed;
    display: block;
    width: 80%;
    height: 400rpx;
    top: 380rpx;
    left: 10%;
    background-color: #fff;
    border-radius: 50rpx;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 10rpx 10rpx 20rpx 20rpx rgba(0, 0, 0,.3);
    
    & .title{
      margin: 50rpx 0 40rpx;
      font-size: 40rpx;
      text-align: center;
    }
    
    & image {
      width: 300rpx;
      height: 300rpx;
      transform: translateX(50%);
      margin-left: 75rpx;
      margin-top: 50rpx;
      margin-bottom: 20rpx;

    }

    & button {
      margin-top: 50rpx;
      width: 260rpx;
      height: 120rpx;
      font-size: 50rpx;
      border-radius: 24rpx;
      color: #fff;
      line-height: 120rpx;
      background-color: #E85757;
    }
  }
</style>