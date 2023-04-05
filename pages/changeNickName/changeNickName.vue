<template>
  <view class="con">
    <input type="text" v-model="nickName">
    <button @click="send">保存</button>
  </view>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    data() {
      return {
        nickName:uni.getStorageSync('nickname')
      }
    },
    mounted() {

    },
    computed:{
      ...mapState('m_user',['uId','nickname'])
    },
    methods: {
      ...mapMutations('m_user',['updateNickname']),
      async send() {
        console.log(this.nickName);
        const {data} = await this.request({
          url:'/shop/member/updateU',
          method:'POST',
          header:{
            'Content-Type': 'application/json',
          },
          data:{
            "id":this.uId,
            "nickname":this.nickName
          },
          
        })
        this.updateNickname(this.nickName)
        uni.navigateBack({
          url:'../../pages/settings/settings'
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .con {
    width: 100%;

    & input {
      padding: 0 30rpx;
      box-sizing: border-box;
      width: 100%;
      border-bottom: 2rpx solid #d7d7d7;
      height: 80rpx;
    }

    & button {
      width: 50%;
      margin: 60rpx auto;
      background-color: #6792FF;
      color: #fff;
    }
  }
</style>