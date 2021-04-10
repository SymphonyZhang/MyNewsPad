// pages/test2/test2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"Halo",
    msg2:"<b class='bStyle'>你好</b><p style='color:red'>嘿嘿嘿</p>"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      console.log("下拉了")
      wx.showToast({
        title: '下拉了',
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  clickMe(event){
    console.log("点击了按钮",event.currentTarget.dataset)
  },
  changeMe(event){
    console.log("输入了：",event.detail.value)
  },

  getUserProfile(event){
      wx.getUserProfile({
        desc:'展示用户信息',
        success:(res) => {
          console.log(res)
        }
      })
  },

  getUserPhoneNumber(event){
    console.log(event)
  },
  getContact(event){
    console.log(event)
  },


  showAlert(){
    // wx.showToast({
    //   title:'加载中',
    //   icon:'success',
    //   duration:2000
    // })
    // wx.showLoading({
    //   title: '加载中'
    // })

    // setTimeout(function(){
    //   wx.hideLoading()
    // },2000)

    wx.showModal({
      title:'提示',
      content:"这是一个弹框",
      success(res){
        if(res.confirm){
          console.log("点击了确定",res)
        }else{
          console.log("点击了取消",res)
        }
      }
    })
  },
})