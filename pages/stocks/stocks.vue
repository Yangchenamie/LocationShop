<template>
  <view>
    <search></search>
    <choiceIndex></choiceIndex>
  </view>
</template>

<script>
  import search from '../../components/search/search.vue'
  import choiceIndex from '../../components/choiceIndex/choiceIndex.vue'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    components:{
      search,choiceIndex
    }
  }
</script>

<style>
body{
  background-color: #fff;
}
</style>
