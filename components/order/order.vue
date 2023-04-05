<template>
  <view class="container">
    <view class="con-title">
      <view class="date">
        今日
      </view>
      <picker mode="date" fields="month" :value="dataMonth" @change="bindDateChange">
        <view>
          <span class="tabMonth">{{dataMonth}}</span>月/{{dataYear}}
        </view>
      
      </picker>
    </view>
    <view class="content">
      <orderCom v-for="(item,index) in orderList" :key="index" :item="item"></orderCom>
    </view>
  </view>
</template>

<script>
  export default {
    name: "order",
    data() {
      return {
        orderList: {},
        dataMonth: this.getCurrentMonth(),
        dataYear: this.getCurrentYear()
      };
    },
    mounted() {
      this.getOrderList()
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
      },
      async getOrderList(id) {
        if (id == null) {
          id = 11000
        }
        const {data} = await this.request({
          url: `/supplement/order/select/${id}`
        })
        console.log('----',data);
        this.orderList = data.order
        console.log('this.orderList'+this.orderList);
      }
    }
  }
</script>

<style scoped lang="less">
  .con-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 140rpx;
    padding: 0 64rpx;
    border-bottom: 2rpx solid #C5C5C5;
    & picker {
      display: flex;
    
      .tabMonth {
        font-size: 52rpx;
        font-weight: 500;
        margin-right: 6rpx;
      }
    }
    .date {
      font-size: 52rpx;
    }

    & navigator {
      // display: block;
      height: 36rpx;
      font-size: 20rpx;
      padding: 4rpx 10rpx;
      background-color: #000;
      color: #fff;
      border-radius: 4rpx;
      line-height: 36rpx;
    }
  }

</style>
