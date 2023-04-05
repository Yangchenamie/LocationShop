function checkPhone(mobile) {
  return RegExp(/^1[34578]\d{9}$/).test(mobile)
}


module.exports = {
  checkPhone: checkPhone
}
