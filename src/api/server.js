import req from './request.js';                 //连接接口文件
export const GETTREEDATA = function (e) {
    return req('post', '/251280/123', { qwe: e })    //post方法以及传参    qwe是字段   e是参数
}
export const three = function (e) {
    return req('get', '/251280/12345?qwe=' + e)  //get方法以及传参      qwe是字段   e是参数
}
export const getMockData = function (params) {
    return req('get', '/api/getMockData', params)
}
export const sendMoney = function(params) {
    return req('post', '/api/sendMoney', params)
}