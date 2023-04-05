export default{
  namespaced:true,
  state:()=>({
    userInfo:JSON.parse(uni.getStorageSync('userInfo') || '{}'),
    token:uni.getStorageSync('token') || '',
    uId:uni.getStorageSync('uId'),
    avatarurl:uni.getStorageSync('avatarurl'),
    nickname:uni.getStorageSync('nickname'),
    phone:uni.getStorageSync('phone'),
    stationName:uni.getStorageSync('stationName'),
    hours:uni.getStorageSync('hours'),
    address:uni.getStorageSync('address')
  }),
  mutations:{
    updateUserInfo(state,userInfo){
      state.userInfo = userInfo
      this.commit('m_user/saveUserInfoToStorage')
    },
    saveUserInfoToStorage(state){
      uni.setStorageSync('userInfo',JSON.stringify(state.userInfo))
    },
    updateToken(state,token){
      state.token = token;
      this.commit('m_user/saveTokenToStorage')
    },
    saveTokenToStorage(state){
       uni.setStorageSync('token', state.token)
    },
    updateUId(state,uId){
      state.uId = uId
      this.commit('m_user/saveUIdToStorage')
    },
    saveUIdToStorage(state){
      uni.setStorageSync('uId',state.uId)
    },
    updateavatarurl(state,avatarurl){
      state.avatarurl = avatarurl
      this.commit('m_user/saveavatarurlToStorage')
    },
    saveavatarurlToStorage(state){
      uni.setStorageSync('avatarurl',state.avatarurl)
    },
    updateNickname(state,nickname){
      state.nickname = nickname
      this.commit('m_user/saveNicknameToStorage')
    },
    saveNicknameToStorage(state){
      uni.setStorageSync('nickname',state.nickname)
    },
    updatePhone(state,phone){
      state.phone = phone
      this.commit('m_user/savePhoneToStorage')
    },
    savePhoneToStorage(state){
      uni.setStorageSync('phone',state.phone)
    },
    updateStationName(state,stationName){
      state.stationName = stationName
      this.commit('m_user/saveStationNameToStorage')
    },
    saveStationNameToStorage(state){
      uni.setStorageSync('stationName',state.stationName)
    },
    updateHours(state,hours){
      state.hours = hours
      this.commit('m_user/saveHoursToStorage')
    },
    saveHoursToStorage(state){
      uni.setStorageSync('hours',state.hours)
    },
    updateAddress(state,address){
      state.address = address
      this.commit('m_user/saveAddressToStorage')
    },
    saveAddressToStorage(state){
      uni.setStorageSync('address',state.address)
    },
  },
  getters:{
    
  }
}