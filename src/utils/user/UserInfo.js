// 获取用户自提点地址
export default class UserInfo {
  static getNoutoasiakasAddress() {
    if (this.$parent.globalData.noutoasiakasAddress != null) {
      this.noutoasiakasAddress = this.$parent.globalData.noutoasiakasAddress
    } else {
      // TODO 加载用户默认自提点配置
      let noutoasiakasAddressInfo = [
        {
          address: '北京路某某街某某大道1号街',
          name: '自提点1',
          addressId: 13,
          checked: true
        },
        {
          address: '北京路某某街某某大道2号街',
          name: '自提点2',
          addressId: 14,
          checked: true
        },
        {
          address: '北京路某某街某某大道3号街',
          name: '自提点3',
          addressId: 15,
          checked: true
        }
      ]
      this.noutoasiakasAddress = noutoasiakasAddressInfo
      this.$parent.globalData.noutoasiakasAddress = noutoasiakasAddressInfo
    }
  }
}
