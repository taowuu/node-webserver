const handleUserRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    // 
    if(method === 'POST' && req.path === '/api/user/login') {
        console.log('login')
        return {
            msg: 'user login api'
        }
    }
}
// 
module.exports = handleUserRouter
