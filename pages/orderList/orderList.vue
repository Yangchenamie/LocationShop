<template>
  <view class="container">
    <view class="content">
      <orderCom v-for="(item,index) in orderList" :key="index" :item="item"></orderCom>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        orderList: []
      }
    },
    onLoad() {
      this.getOrderList()
    },
    methods: {
      async getOrderList() {
        const {
          data
        } = await this.request({
          url: "/supplement/order/select/8007"
        })
        console.log(data);
        this.orderList = data.order
      }
    }
  }
</script>

<style scoped lang="" less>

</style>
