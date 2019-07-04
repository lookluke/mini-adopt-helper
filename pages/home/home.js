const photoPrefix = 'https://melody.memorychilli.com/';

const app = getApp()
var userId

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '登录中',
    })
    var that = this
    app.IfAccess().then(function (res) {
      if (res) {
        //only authorized user can get platform information
        if (app.globalData.authorized) {
          userId = app.globalData.userId;
          that.setData({
            userInfo:app.globalData.userInfo
          })
        }else{
          wx.hideLoading()
          wx.redirectTo({
            url: '../login/login',
          })
        }
      }
    })
  },
  toAdoptionDetail:function(){
    wx.navigateTo({
      url: '../adoption/adoption',
    })
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

  }
})