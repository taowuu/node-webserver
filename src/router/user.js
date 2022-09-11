const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
// 
const handleUserRouter = (req, res) => {
    const method = req.method
    // login
    if(method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const result = loginCheck(username, password)
        return result.then(data => {
            // console.log(data)
            if(data && data.username) {
                return new SuccessModel()
            }
            return new ErrorModel('login err')
        })
        
    }
}
// 
module.exports = handleUserRouter
