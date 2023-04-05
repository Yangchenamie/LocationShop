<template>
  <view class="con">
    <!-- <view class="tabNav">
      <image src="/static/left.png" mode=""></image>
      <view class="title">
        添加商品
      </view> -->
    <!-- <view class="save">
        保存
      </view> -->
    <!-- </view> -->

    <!-- <view class='top-selected' @click='bindShowMsg'>
        <text>{{grade_name}}</text>
      </view> -->
    <!-- 下拉需要显示的列表 -->
    <!-- <view class="select_box" v-if="select">
        <view v-for="(item,index) in grades" :key="index">
          <view class="select_one" bindtap="mySelect">{{item}}</view>
        </view>
      </view> -->
    <!-- <view class="choiceBox">
      <picker @change="bindPickerChange" :range="array">
        <label class="">商品类别</label>
        <label class="bindBox">{{array[index]}}</label>
      </picker>
    </view> -->
    <!-- <view class="con"> -->
    <!-- <view class="con-item">
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
      </view> -->
    <!-- <view class="con-item">
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
      </view> -->
    <!-- <view class="con-item">
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
      </view> -->
    <view class="addPic" @click="handleUImg">
      <view class=""  v-if="addpic == ''">
        +
      </view>
      <!-- <input type="file" ref="fileInput" @change="getFilePath"/> -->
      <image :src="addpic" mode="" v-else></image>

    </view>
    <view class="con-item">
      <view class="itemName">
        名称
      </view>
      <input type="text" placeholder="选择商品" v-model="detail.productName">
    </view>
    <!-- <view class="add">
        <image src="../../static/add.png" mode=""></image>
      </view> -->
    <!-- </view> -->
    <view class="con-item">
      <view class="itemName">
        类别
      </view>
      <!-- <input type="text" placeholder="选择商品类别">
      <image src="../../static/right.png" mode=""></image> -->
      <view class="uni-list">
        <view class="uni-list-cell">
          <view class="uni-list-cell-db">
            <picker @change="bindPickerChange" :value="index" :range="array" v-model="detail.productVariety">
              <view class="uni-input">{{array[index]}}</view>
            </picker>
          </view>
        </view>
      </view>
    </view>
    <view class="con-item">
      <view class="itemName">
        价格
      </view>
      <input type="text" placeholder="输入商品价格" v-model="detail.productPrice">
    </view>
    <view class="ispromotional">
      <view class="">
        是否促销
      </view>
      <switch checked color="#A53131" @change="switch1Change" />
    </view>
    <view class="con-item">
      <view class="itemName">
        促销价格
      </view>
      <input type="text" placeholder="输入商品促销价格" class="price"  v-model="detail.productPrice">
    </view>
    <view class="btn">
  <!--    <view class="save">
        保存
      </view> -->
      <!-- <input type="button" value="保存"  class="save" @click="send"/> -->
      <button  class="save" @click="send">保存</button>
    </view>
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
          '饮料',
          '零食',
          '纸巾',
          '糖',
        ],
        index: 0,
        addpic: '',
        detail:{
          productName:"",
          productPrice:null,
          productStock:null,
          productVariety:null,
          file:"",
          supplementNumber:8007,
        }
      }
    },
    onLoad() {
      // this.handleUImg()
    },
    methods: {
      
      getFilePath(){
         // const file = this.$refs.fileInput.files[0];
              console.log(this.$refs);
      },
      bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.index = e.detail.value
      },
      switch1Change: function(e) {
        console.log('switch1 发生 change 事件，携带值为', e.detail.value)
      },
      handleUImg() {
        let that = this
        let str=""
        // uni.showActionSheet({
        //     itemList: ['拍摄', '从相册选择图片'],
        //     success(e) {
        //       var index = e.tapIndex;
        //       if (index === 0) {
        //         console.log('拍摄');
        //         that.takePhoto()
        //       } else if (index === 1) {
          // let file;
                uni.chooseImage({
                  count: 6, //默认9
                  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
                  sourceType: ['camera','album'], //从相册选择
                  success: function(res) {
                    console.log(res);
                    // console.log(this);
                    str = JSON.stringify(res.tempFilePaths[0])
                    console.log(res.tempFilePaths[0]);
                    that.addpic = str.substring(1,str.length-1)
                    console.log(that.addpic);
                    console.log(JSON.stringify(res.tempFilePaths[0]));
                    that.detail.file = res.tempFilePaths;
                     console.log('1111',that.detail.file);
                  },
                  
                });
               
          //     }
          //   }
          // })

      },
      takePhoto(){
        const ctx = uni.createCanvasContext()
        ctx.takePhoto({
          quality:'high',
          success:(res)=>{
            console.log(res);
          }
        })
      },
      async send(supplementNumber){
        // this.detail.file = this.addpic
        this.detail.productVariety = this.array[this.index]
        if(supplementNumber == null){
          supplementNumber = 8007
        }
        console.log('22',this.detail);
        console.log('33',this.detail.file);
        let that = this
        console.log('44',that.detail.file);
        uni.uploadFile({
          url: "http://1.12.244.193:80/supplement/product/add",
          filePath: that.detail.file[0],
          name: 'file',
          formData: {
            // 'user': 'test'
            "productName":that.detail.productName,
            "productPrice":that.detail.productPrice,
            "productStock":1,
            "productVariety":1,
            "file":that.detail.file,
            "supplementNumber":8007,
            // "file":tempFilePaths[0],
          },
          success: (uploadFileRes) => {
            console.log(uploadFileRes.data);
          },
          fail:(res)=>{
            
            console.log(res);
          }
        })
        // const res = await this.request({
        //   url:"/supplement/product/add",
        //   method:'POST',
        //   header:{
        //     'Content-Type': 'multipart/form-data',
        //   },
        //   data:{
        //     "productName":this.detail.productName,
        //     "productPrice":this.detail.productPrice,
        //     "productStock":1,
        //     "productVariety":this.detail.productVariety,
        //     "file":this.detail.file,
        //     "supplementNumber":8007
        //   }
        // })
        // console.log(res);
      },
     //  async addGoods(info){
     //   const res = await this.request({
     //     url:"http://1.12.244.193/supplement/product/add",
     //     method:'POST',
     //     data:{
     //       "productName":info.productName
     //     }
     //   })
     // }
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

  .choiceBox {
    border-top: 20rpx solid #F1F1F1;
    display: flex;
    justify-content: space-evenly;
    height: 140rpx;
    align-items: center;
    font-size: 28rpx;

    .bindBox {
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
    border-top: 20rpx solid #F1F1F1;

    .addPic {
      height: 270rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 100rpx;
      color: #FFE6E6;
      border-bottom: 2rpx solid #f1f1f1;

      & view {
        height: 136rpx;
        width: 136rpx;
        border: 1px solid #FFE6E6;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
        text-align: center;
      }

      & image {
        width: 150rpx;
        height: 150rpx;
      }
    }

    .con-item {
      width: 100%;
      display: flex;
      // height: 214rpx;
      padding: 36rpx 80rpx;
      // justify-content: space-around;
      align-items: center;
      // height: 120rpx;
      // border-top: 2rpx solid #F1F1F1;
      font-size: 36rpx;
      border-bottom: 2rpx solid #f1f1f1;
      box-sizing: border-box;



      & input,
      & .uni-list {
        margin-left: 100rpx;
        width: 280rpx;
        font-size: 34rpx;
        // border: 2rpx solid #ccc;
      }

      & input::-webkit-input-placeholder {
        font-size: 24rpx;
        color: #C5C0C0;
      }

      .price {
        margin-left: 40rpx;
      }

      // margin-left: -20rpx;
      & image {
        margin-left: 100rpx;
        width: 30rpx;
        height: 30rpx;
        // transform: rotateY(-270deg);
      }
    }
  }

  // .itemName {
  //   margin-left: 20rpx;
  //   font-size: 40rpx;
  // }


  .ispromotional {
    // margin-top: 44rpx;
    display: flex;
    justify-content: space-between;
    padding: 36rpx 80rpx;
    font-size: 40rpx;
    border-top: 18rpx solid #f1f1f1;
    border-bottom: 2rpx solid #f1f1f1;
    box-sizing: border-box;

    & switch {
      // margin-left: 80rpx;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50rpx;

    .save {
      width: 200rpx;
      height: 70rpx;
      background-color: #A53131;
      text-align: center;
      line-height: 70rpx;
      border-radius: 30rpx;
      color: #fff;
    }
  }
</style>
