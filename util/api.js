export const request = (options) => {
  return new Promise((resolve,reject) => {
     const baseUrl ="http://1.12.244.193:80"
    uni.request({
      url:baseUrl+options.url,
      method:options.method || 'GET',
      // header:{token:uni.getStorageSync('user')?uni.getStorageSync('user').token:'',
      // "Access-Control-Allow-Origin":"*"},
      header:options.header ||{
      "Access-Control-Allow-Origin":"*",
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      } ,
      data:options.data || {},
      success: (res) => {
        const data = res.data
        console.log(data)
        // if(data.code === '401') {
        //   uni.navigateTo({
        //     url:'/pages/login/login.vue'
        //   })
        //   return 
        // }else if(res.code=='200') {
          if(res.code=='200') {
          uni.showToast({
            icon:'error',
            title:'操作错误'
          })
        }
        resolve(data)
      },
      fail: (error) => {
        uni.showToast({
          icon:'error',
          title:'系统错误'
        })
        reject(error)
      }
    })
  })
}
