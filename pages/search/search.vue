<template>
  <view>
    <view class="con-sear">
      <image src="../../static/search.png" mode=""></image>
      <input type="text" placeholder="搜索"  @input="input">
    </view>
    
    <!-- 搜素列表 -->
    <view class="sugg-list" v-if="searchResults.length !== 0">
      <view class="sugg-item" v-for="(item,i) in searchResults" :key="i" @click="show(item.id)">
        <image :src="item.productPicture" mode=""></image>
        <view class="goods-name">{{item.productName}}</view>
        <view class="goods-price">${{item.productPrice}}</view>
        <!-- <uni-icons type="arrowright" size="16'"></uni-icons> -->
      </view>
    </view>
    
    <!-- 搜素列表 -->
    <view class="history-box" v-else>
      <view class="history-title">
        <text>搜索历史</text>
        <uni-icons type="trash" size="17" @click="cleanHistory"></uni-icons>
      </view>
     <view class="history-list">
        <uni-tag :text="item" v-for="(item, i) in histories" :key="i" @click="gotoGoodsList(item)"></uni-tag>
      </view>
    </view>
    
  </view>
</template>

<script>
  export default {
    data() {
      return {
        timer: null,
        kw: '',
         searchResults: [],
         historyList: ['a', 'app', 'apple'],
         flag: false,
         goods:{}
      };
    },
    onLoad() {
      this.historyList = JSON.parse(uni.getStorageSync('kw') || '[]')
    },
    methods:{
      async getSearchResults(){
        if(this.kw === ''){
          this.searchResults = []
          return
        }
        // const {data:res} = await uni.$http.get('/api/public/v1/goods/qsearch',{query: this.kw})
        // if(res.meta.status !== 200) return uni.$showMsg()
        // this.searchResults = res.message
        // this.saveSearchHistory()
        console.log(this.kw);
        const res = await this.request({
          url:"/supplement/product/selectByN/8007",
          data:{
            name:this.kw
          }
        })
        // this.searchResults = Object.values(res.data.list)
        this.searchResults = res.data.list
        console.log('==========',this.searchResults);
        this.saveSearchHistory()
        },
      saveSearchHistory() {
      // 2.1 直接把搜索关键词 push 到 historyList 数组中
        // this.historyList.push(this.kw)
        const set = new Set(this.historyList)
        set.delete(this.kw)
        set.add(this.kw)
        this.historyList = Array.from(set)
        // 调用函数让历史记录永远保存
        uni.setStorageSync('kw', JSON.stringify(this.historyList))
      },
      input(e){
        clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
          this.kw = e.target.value
          console.log(this.kw);
          this.getSearchResults()
        },500)
      },
      async show(id){
        this.flag = true
        const {data} = await this.request({
          url:`/supplement/product/selectById/${id}`
        })
        this.goods = data.product
         console.log('11111',this.goods);
      },
      cleanHistory(){
        this.historyList = []
        uni.setStorageSync('kw','[]')
      },
      gotoGoodsList(kw){
        console.log(kw);
        console.log(this.kw);
        this.kw = kw
        console.log(this.kw);
        this.getSearchResults()
      },
      closeMsg(e) {
        console.log(e);
      
        if (e.target.id != "trueShop") {
          this.flag = false;
        }
        console.log(this.flag);
      },
      
    },
    computed: {
      histories(){
        return [...this.historyList].reverse()
      }
    },
  }
</script>

<style lang="scss">
  .sugg-list{
    padding: 0 5px;
  }
  .sugg-item{
    position: relative;
    display: flex;
    // justify-content: space-around;
    align-items: center;
    font-size: 12px;
    padding: 13px 0;
    border-bottom: 1px solid #efefef;
  }
  .sugg-item image{
    width: 200rpx;
    height:  200rpx;
  }
  .goods-name {
    // 文字不允许换行（单行文本）
    white-space: nowrap;
    // 溢出部分隐藏
    overflow: hidden;
    // 文本溢出后，使用 ... 代替
    text-overflow: ellipsis;
    margin-right: 3px;
  }
  .goods-price{
    position: absolute;
    right: 50rpx;
  }
  .history-box{
    padding: 0 5px;
    .history-title{
      display: flex;
      font-style: 13px;
      justify-content: space-between;
      height: 40px;
      border-bottom: 1px solid #efefef;
      align-items: center;
    }
    .history-list{
      display: flex;
      flex-wrap: wrap;
    }
    .uni-tag{
      display: block;
      margin-top: 5px;
      margin-right: 5px;
    }
  }
  .con-sear{
    width: 100%;
    position: relative;
    margin-bottom: 40rpx;
    margin-top: 20rpx;
  }
  .con-sear input{
    margin:0  50rpx;
    width: 85%;
    border: 1px solid #5081FF;
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
  .con-text{
    display: flex;
    flex-flow: column;
  }
  .uniPop {
    /* display: none !important; */
    z-index: 99;
    position: fixed;
    display: block;
    width: 100%;
    height: 500rpx;
    bottom: 50rpx;
    left: 0;
    background-color: #fff;
    border-top-left-radius: 50rpx;
    border-top-right-radius: 50rpx;
  }
  
  .uniPop image {
    width: 300rpx;
    height: 300rpx;
    transform: translateX(50%);
    margin-left: 75rpx;
    margin-top: 50rpx;
    margin-bottom: 20rpx;
  }
  
  .uniPop button {
    width: 260rpx;
    height: 120rpx;
    font-size: 50rpx;
    border-radius: 24rpx;
    color: #fff;
    line-height: 120rpx;
    background-color: #E85757;
  }
</style>

