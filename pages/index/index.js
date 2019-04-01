Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [
            '../../image/lunbo1.jpg',
            '../../image/lunbo2.jpg',
            '../../image/lunbo3.jpg',
            '../../image/lunbo4.jpg',
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 2000,
        circular:true,
        iconHeaderArray:[
            {
                "iconUrl":"../../image/jingdian.jpg",
                "iconText":"景点门票"
            },
            {
                "iconUrl": "../../image/zhoubian.jpg",
                "iconText": "周边游"
            },
            {
                "iconUrl": "../../image/meishi.jpg",
                "iconText": "美食林"
            },
            {
                "iconUrl": "../../image/shanghua.jpg",
                "iconText": "赏花踏青"
            },
            {
                "iconUrl": "../../image/gonglue.jpg",
                "iconText": "攻略"
            }
        ],
        iconMidArray:[
            {
                "iconUrl": "../../image/jiudian.jpg",
                "iconText": "酒店"
            },
            {
                "iconUrl": "../../image/jipiao.jpg",
                "iconText": "机票"
            },
            {
                "iconUrl": "../../image/huoche.jpg",
                "iconText": "火车票·抢票"
            },
            {
                "iconUrl": "../../image/minsu.jpg",
                "iconText": "民宿"
            },
            {
                "iconUrl": "../../image/qiche.jpg",
                "iconText": "汽车票·船票"
            },
            {
                "iconUrl": "../../image/zhuanche.jpg",
                "iconText": "专车·租车"
            },
            {
                "iconUrl": "../../image/jiaotong.jpg",
                "iconText": "交通+酒店"
            },
            {
                "iconUrl": "../../image/gentuan.jpg",
                "iconText": "跟团游"
            },
            {
                "iconUrl": "../../image/gaotie.jpg",
                "iconText": "高铁游"
            }
        ],
        iconFooterArray:[
            {
                "iconUrl": "../../image/yiri.jpg",
                "iconText": "一日游" 
            },
            {
                "iconUrl": "../../image/ziyou.jpg",
                "iconText": "自由行"
            },
            {
                "iconUrl": "../../image/dangdi.jpg",
                "iconText": "当地向导"
            },
            {
                "iconUrl": "../../image/xingli.jpg",
                "iconText": "行李寄送"
            },
            {
                "iconUrl": "../../image/qianzheng.jpg",
                "iconText": "签证"
            },
            {
                "iconUrl": "../../image/youlun.jpg",
                "iconText": "邮轮"
            },
            {
                "iconUrl": "../../image/youting.jpg",
                "iconText": "游艇·帆船"
            },
            {
                "iconUrl": "../../image/jingwai.jpg",
                "iconText": "境外火车票"
            },
            {
                "iconUrl": "../../image/gengduo.jpg",
                "iconText": "更多"
            },
        ],
        iconTehuiArray:[
            {
                "iconUrl":"../../image/tejiajipiao.jpg"
            },
            {
                "iconUrl": "../../image/tejialvyou.jpg"
            },
            {
                "iconUrl": "../../image/tejiamenpiao.jpg"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})






// index.js
//获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })