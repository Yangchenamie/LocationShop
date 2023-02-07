<template>
  <view>
    <view class="tabNav">
      <image src="/static/left.png" mode=""></image>
      <view class="title">
        添加商品
      </view>
      <!-- <view class="save">
        保存
      </view> -->
    </view>
    
      <!-- <view class='top-selected' @click='bindShowMsg'>
        <text>{{grade_name}}</text>
      </view> -->
      <!-- 下拉需要显示的列表 -->
      <!-- <view class="select_box" v-if="select">
        <view v-for="(item,index) in grades" :key="index">
          <view class="select_one" bindtap="mySelect">{{item}}</view>
        </view>
      </view> -->
      <view  class="choiceBox">
        <picker @change="bindPickerChange" :range="array">
          <label class="">商品类别</label>
          <label class="bindBox">{{array[index]}}</label>
        </picker>
      </view>
    <view class="con">
      <view class="con-item">
        <view class="itemName">
          <image src="../../static/4.png" mode=""></image>
          <view class="itemText">
            <view class="">
              可口可乐500ml
            </view>
            <view class="">
              $3.50
            </view>
          </view>
        </view>
        <view class="add">
          <image src="../../static/add.png" mode=""></image>
        </view>
      </view>
      <view class="con-item">
        <view class="itemName">
          <image src="../../static/4.png" mode=""></image>
          <view class="itemText">
            <view class="">
              可口可乐500ml
            </view>
            <view class="">
              $3.50
            </view>
          </view>
        </view>
        <view class="add">
          <image src="../../static/add.png" mode=""></image>
        </view>
      </view>
      <view class="con-item">
        <view class="itemName">
          <image src="../../static/4.png" mode=""></image>
          <view class="itemText">
            <view class="">
              可口可乐500ml
            </view>
            <view class="">
              $3.50
            </view>
          </view>
        </view>
        <view class="add">
          <image src="../../static/add.png" mode=""></image>
        </view>
      </view>
      <!-- <view class="con-item">
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
      </view> -->
    </view>
    <!-- <view class="ispromotional">
      <view class="">
        是否促销
      </view>
      <switch checked color="#A53131" @change="switch1Change" />
    </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // docModel:true
        select: false,
        // grade_name:'--请选择--',
        array: [
          '全部',
          '饮料',
          '零食',
          '纸巾',
        ],
        index: 0
      }
    },
    methods: {
      switch1Change: function(e) {
        console.log('switch1 发生 change 事件，携带值为', e.detail.value)
      },
      // postPic() {
      //   uni.showActionSheet({
      //     itemList: ['拍摄', '从相册选择图片'],
      //     success(e) {
      //       var index = e.tapIndex;
      //       if (index === 0) {
      //         console.log("拍摄");
      //       } else if (index === 1) {
      //         uni.chooseImage({
      //           count: 1,
      //           sizeType: ['original', 'compressed'],
      //           success(res) {
      //             console.log(res.tempFilePaths[0]);
      //           }
      //         })
      //       }
      //     }
      //   })
      // },
      bindPickerChange: function(e) { //改变的事件名
        console.log('picker发送选择改变，携带值为', e.target.value)
        // 用于输出改变索引值
        this.index = e.target.value //将数组改变索引赋给定义的index变量
        this.jg = this.array[this.index] //将array【改变索引】的值赋给定义的jg变量
        console.log("籍贯为：", this.jg) //输出获取的籍贯值，例如：中国
      }

      //   bindShowMsg() {
      //         this.setData({
      //         select: !this.data.select
      //         })
      //       },
      //       /**
      //        * 已选下拉框
      //        */
      //       mySelect(e) {
      //         console.log(e)
      //         var name = e.currentTarget.dataset.name
      //         this.setData({
      //         grade_name: name,
      //         select: false
      //         })
      //       },  
      // },
      //下拉框
      }
    }
</script>

<style scoped lang="less">
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

    & image {
      position: absolute;
      left: 20px;
      width: 40rpx;
      height: 40rpx;
      margin-top: 30rpx;

    }
  }

  .choiceBox{
    display: flex;
    justify-content: space-evenly;
    height: 140rpx;
    align-items: center;
    font-size: 28rpx;
    
    .bindBox{
      display: inline-block;
      width: 192rpx;
      height: 56rpx;
      border: 2rpx solid #d9d9d9;
      // padding: 0 30rpx;
      line-height: 56rpx;
      // box-sizing: border-box;
      margin-left: 50rpx;
      text-align: center;
    }
  }

  .con {
    width: 100%;
    // border-bottom: 18rpx solid #F1F1F1;
    // border-top: 20rpx solid #F1F1F1;

    .con-item {
      width: 100%;
      display: flex;
      height: 214rpx;
      justify-content: space-around;
      align-items: center;
      // height: 120rpx;
      align-items: center;
      border-top: 2rpx solid #F1F1F1;
      font-size: 28rpx;
      border-bottom: 2rpx solid #f1f1f1;
      
      .itemName{
        display: flex;
        align-items: center;
        // margin-left: -20rpx;
        & image {
          width: 140rpx;
          height: 140rpx;
        }
        .itemText{
          display: flex;
          flex-flow: column;
          margin-left: 10rpx;
          
          & view{
            margin: 8rpx 0;
          }
        }
      }
      
      .add image{
        width: 60rpx;
        height: 60rpx;
        
        
      }
    }

    // .itemName {
    //   margin-left: 20rpx;
    //   font-size: 40rpx;
    // }
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
