import wepy from 'wepy'
const baseURL = 'https://www.zhengzhicheng.cn/api/public/v1'
    // 弹框函数
wepy.baseToast = function(str = '获取数据失败！') {
    wepy.showToast({
        title: str,
        icon: 'none',
        duration: 1000
    })
}

// wepy.get请求
wepy.get = function(url, data = {}) {
    return wepy.request({
        url: baseURL + url,
        method: 'GET',
        data
    })
}

// wepy.post请求
wepy.post = function(url, data = {}) {
    return wepy.request({
        url: baseURL + url,
        method: 'POST',
        data
    })
}