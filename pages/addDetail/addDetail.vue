<template>
  <view>
    <view class="tabNav">
      <image src="/static/left.png" mode=""></image>
      <view class="title">
        添加商品
      </view>
      <view class="save">
        保存
      </view>
    </view>
    <view class="addPic" @click="postPic">
      <image src="/static/add.png" mode=""></image>
    </view>
    <view class="con">
      <view class="con-item">
        <view class="itemName">
          名称
        </view>
        <input type="text">
      </view>
      <view class="con-item">
        <view class="itemName">
          类别
        </view>
        <input type="text">
      </view>
      <view class="con-item">
        <view class="itemName">
          价格
        </view>
        <input type="text">
      </view>
    </view>
    <view class="ispromotional">
      <view class="">
        是否促销
      </view>
      <switch checked color="#A53131" @change="switch1Change" />
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // docModel:true
      }
    },
    methods: {
      switch1Change: function(e) {
        console.log('switch1 发生 change 事件，携带值为', e.detail.value)
      },
      postPic(){
        uni.showActionSheet({
          itemList:['拍摄','从相册选择图片'],
          success(e) {
            var index = e.tapIndex;
            if(index === 0){
              console.log("拍摄");
            }else if(index ===1 ){
              uni.chooseImage({
                count:1,
                sizeType:['original','compressed'],
                success(res) {
                  console.log(res.tempFilePaths[0]);
                }
              })
            }
          }
        })
      }
    },

  }
</script>

<style scoped lang="less">
  .tabNav {
    width: 100%;
    height: 92rpx;
    line-height: 92rpx;
    display: flex;
    justify-content: space-between;
    padding: 0 40rpx;
    box-sizing: border-box;
    color: #000;
    font-size: 40rpx;

    & image {
      width: 40rpx;
      height: 40rpx;
      margin-top: 30rpx;
    }
  }

  .addPic {
    width: 100%;
    height: 200rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & image {
      width: 116rpx;
      height: 116rpx;
    }
  }

  .con {
    width: 100%;
    border-bottom: 18rpx solid #F1F1F1;

    .con-item {
      width: 100%;
      display: flex;
      justify-content: space-around;
      height: 120rpx;
      align-items: center;
      border-top: 2rpx solid #F1F1F1;

      & input {
        width: 400rpx;
        // border: 2rpx solid #000;
      }
    }

    .itemName {
      margin-left: 20rpx;
      font-size: 40rpx;
    }
  }

  .ispromotional {
    margin-top: 44rpx;
    display: flex;
    justify-content: space-between;
    padding: 0 80rpx;
    font-size: 40rpx;

    & switch {
      // margin-left: 80rpx;
    }
  }
</style>
