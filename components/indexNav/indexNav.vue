<template>
  <view class="content">
    <view class="conHeader">
      <!-- <image src="../../static/3.png" mode=""></image> -->
      <!-- <view class="" v-for="(item,index) in videoList" :key="index">
        <video :src="item.coverURL" autoplay></video>
      </view> -->
      <swiper  indicator-dots circular autoplay >
        <swiper-item v-for="(item,index) in videoList" :key="index" id="swiperView">
          <!-- <image src="../../static/3.png"></image> -->
        <!--  <view class=""> -->
            <video :src="item[0].playURL" autoplay muted></video>
          <!-- </view> -->
        </swiper-item>
       <!-- <swiper-item>
          <image src="../../static/3.png"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../static/3.png"></image>
        </swiper-item> -->
      </swiper>
    </view>
    <view class="con">
      <view class="con-title" @click="gotoStation">
        <image src="../../static/shoplogo.png" mode=""></image>
        <view class="con-text">
          <view class="conTitle">
            Hello
          </view>
          <view class="" v-if="stationName">
            {{stationName}}
          </view>
        </view>
      </view>
    </view>
    <view class="con-sear">
      <image src="../../static/search.png" mode=""></image>
      <input type="text" placeholder="搜索" @click="goto">
    </view>
  </view>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name:"indexNav",
    data() {
      return {
        videoList:[],
        vedioUrl:'',
        swiperHeight:null,
      };
    },
    mounted() {
      this.getVideoList()
    },
    components:{
     
    },
    computed:{
      ...mapState('m_user',['stationName'])
    },
    methods:{
      goto(){
        console.log(1);
        uni.navigateTo({
          url:'../search/search'
        })
      },
      gotoStation(){
        uni.navigateTo({
          url:'/pages/station/station'
        })
      },
      async getVideoList(){
        const {data} = await this.request({
          url:"/manage/video/getPlayInfo"
        })
        console.log(111);
        console.log(data);
        console.log(111);
        this.videoList = data.list
        console.log('55555',this.videoList);
      },
      
    }
  }
</script>

<style scoped lang="less">
  .content{
    border-bottom: 20rpx solid #f1f1f1;
    
  }
  .conHeader{
    width: 100%;
    background-color: #F5F5F5;
    
    & video{
      width: 100%;
    }
  }
  .con{
    position: relative;
  }
  .con-title{
    height: 266rpx;
    width: 88%;
    background-color: red;
    display: flex;
    position: absolute;
    align-items: center;
    transform: translate(7%,-50%);
    // margin-left: 44%;
    border-radius: 8rpx;
    background-color: #fff;
    box-shadow: 0rpx 8rpx 8rpx 0 rgba(0, 0, 0,.3);
    
    & image{
      width: 100rpx;
      height: 100rpx;
      margin-left: 54rpx;
    }
    
    .con-text{
      display: flex;
      flex-flow: column;
      font-size: 32rpx;
      margin-left: 60rpx;
      
      .conTitle{
        font-size: 48rpx;
      }
    }
  }
  
  .con-sear{
     // margin-top: 180rpx;
     width: 100%;
     position: relative;
     height: 92rpx;
     margin: 180rpx 0 12rpx;
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