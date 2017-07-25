exports = window
exports.ZBJ = exports.ZBJ || {}
exports.ZBJ.init = {
  ua: navigator.userAgent.toLowerCase(),
  isZBJ: !1,
  isIOS: !1,
  isAndroid: !1,
  isMobile: !1,
  isWX: !1,
  version: 0,
  getAppPlatform: function () {
    if(ZBJ.init.isZBJ && ZBJ.init.isAndroid) {
      return 'Android';
    }else if(ZBJ.init.isZBJ && ZBJ.init.isIOS) {
      return 'iPhone'
    } else {
      return 'Wap'
    }
  },
  getBrowserInfo: function () {
    var e = this.ua
    var t = e.match('zbj/(.*)')
    this.isZBJ = e.indexOf('zbj') > 0,
    this.version = this.isZBJ ? t[1].replace(/(\s.*)|(\.)/g, '') : 0,
    this.version =  this.version.length === 2 ? this.version + '0' : this.version
    this.isAndroid = e.indexOf('android/') > 0,
    this.isIOS = e.indexOf('iphone/') > 0,
    this.isWX = e.indexOf('micromessenger') > 0,
    this.isMobile = this.isAndroid || this.isIOS
  }
}

window.ZBJ.init.getBrowserInfo()

// 触发请求获取Token
exports.fetchToken = function () {
  // 创建触发事件的方式在Android上不能应用。
  var t = document.getElementById('fetchToken')
  try {
    var o = document.createEvent('Event')
    o.initEvent('click', !0, !0)
    t.dispatchEvent(o)
  } catch (e) {
    console.log(e)
  }
}

// 触发请求获取Token
exports.loginSuccess = function () {
  // 创建触发事件的方式在Android上不能应用。
  var t = document.getElementById('loginSuccess')
  try {
    var o = document.createEvent('Event')
    o.initEvent('click', !0, !0)
    t.dispatchEvent(o)
  } catch (e) {
    console.log(e)
  }
}

// 触发请求获取appInfo
exports.fetchAppInfo = function () {
  // 创建触发事件的方式在Android上不能应用。
  var t = document.getElementById('fetchAppInfo')
  try {
    var o = document.createEvent('Event')
    o.initEvent('click', !0, !0)
    t.dispatchEvent(o)
  } catch (e) {
    console.log(e)
  }
}

// 触发请求获取红包领取成功回调信息
exports.getCouponsSuccess = function () {
  // 创建触发事件的方式在Android上不能应用。
  var t = document.getElementById('getCouponsSuccess')
  try {
    var o = document.createEvent('Event')
    o.initEvent('click', !0, !0)
    t.dispatchEvent(o)
  } catch (e) {
    console.log(e)
  }
}

// iso 老版本调取方法
exports.appLoginSuccess = function (e) {
  window.ZBJ.access_token = e
}

// iso 新版本调取方法
exports.fetchAppInfoSuccess = function (json) {
  var jsonInfo = JSON.parse(json)
  window.ZBJ.access_token = jsonInfo.access_token
  window.ZBJ.download_channel = jsonInfo.download_channel
  window.ZBJ.utm_source = jsonInfo.utm_source
  window.ZBJ.distinct_Id = jsonInfo.distinct_id
  window.ZBJ.platform = jsonInfo.platform
  window.ZBJ.logined = jsonInfo.logined
  window.ZBJ.client_id = jsonInfo.client_id
}

ZBJ.init.isZBJ && ZBJ.init.isIOS && (parseInt(ZBJ.init.version) > 330) && window.fetchAppInfo()
!ZBJ.access_token && ZBJ.init.isZBJ && ZBJ.init.isIOS && (parseInt(ZBJ.init.version) >= 320) && (parseInt(ZBJ.init.version) <= 330) && window.fetchToken()
if (!ZBJ.access_token && ZBJ.init.isZBJ && ZBJ.init.isAndroid) {
 //Android版本号不同，调用不同的触发方法
 if (parseInt(ZBJ.init.version) > 330) {
   var jsonInfo = JSON.parse(window.zbjAndroid.fetchAppInfo())
   window.ZBJ.access_token = jsonInfo.access_token
   window.ZBJ.download_channel = jsonInfo.download_channel
   window.ZBJ.utm_source = jsonInfo.utm_source
   window.ZBJ.distinct_Id = jsonInfo.distinct_id
   window.ZBJ.platform = jsonInfo.platform
   window.ZBJ.logined = jsonInfo.logined
   window.ZBJ.client_id = jsonInfo.client_id
 }

 if (parseInt(ZBJ.init.version) >= 320 && parseInt(ZBJ.init.version) <= 330) {
   window.ZBJ.access_token = window.zbjAndroid.getToken()
 }
}
