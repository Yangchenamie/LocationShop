<template>
  <view class="content">
    <personHeader></personHeader>
    <personCon></personCon>
  </view>
</template>

<script>
  import personHeader from '../../components/person-header/person-header.vue'
  import personCon from '../../components/person-con/person-con.vue'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    components:{
      personHeader,personCon
    }
  }
</script>

<style>
  .content{
    background-color: #f1f1f1;
  }
  
</style>

