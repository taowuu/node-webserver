const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { set, get } = require('../db/redis')
// console.log('user set ', set.toString())

// 
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    // "Mon, 12 Sep 2022 09:25:13 GMT"
    return d.toGMTString()
}
// 
const handleUserRouter = (req, res) => {
    const method = req.method
    // login
    if(method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        // const { username, password } = req.query
        const result = login(username, password)
        return result.then(data => {
            // console.log('data ', data)
            if(data && data.username) {
                // set cookie 根路由生效
                // 只能服务端修改
                req.session.username = data.username
                req.session.realname = data.realname
                // 同步到 redis
                set(req.sessionId, req.session)
                return new SuccessModel()
            }
            return new ErrorModel('login err')
        })
        
    }
    // login test
    // if(method === 'GET' && req.path === '/api/user/login-test') {
    //     // console.log(req)
    //     if(req.session.username) {
    //         return Promise.resolve(new SuccessModel({
    //             session: req.session
    //         }))
    //     }
    //     return Promise.resolve(new ErrorModel('please login'))
    // }
}
// 
module.exports = {
    handleUserRouter,
    getCookieExpires,
}
