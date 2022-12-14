const { getList, 
        getDetail, 
        newBlog,
        updateBlog,
        delBlog,
    } = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')
// 
// 
const loginCheck = (req) => {
    if(!req.session.username) {
        return Promise.resolve(new ErrorModel('please login'))
    }
}
// 
const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id
    // list
    if(method === 'GET' && req.path === '/api/blog/list') {
        let author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // 
        if (req.query.isadmin) {
            // 管理员界面
            const loginCheckResult = loginCheck(req)
            if (loginCheckResult) {
                // 未登录
                return loginCheckResult
            }
            // 强制查询自己的博客
            author = req.session.username
        }
        // 
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }
    // detail
    if(method === 'GET' && req.path === '/api/blog/detail') {
        const result = getDetail(id)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }
    // new
    if(method === 'POST' && req.path === '/api/blog/new') {
        const loginCheckResult = loginCheck(req)
        if(loginCheckResult) {
            // 未登录
            return loginCheckResult
        }
        // 
        req.body.author = req.session.username
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }
    // update
    if(method === 'POST' && req.path === '/api/blog/update') {
        const loginCheckResult = loginCheck(req)
        if(loginCheckResult) {
            // 未登录
            return loginCheckResult
        }
        // 
        const result = updateBlog(id, req.body)
        return result.then(val => {
            if(val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('update err')
            }
        })
    }
    // del
    if(method === 'POST' && req.path === '/api/blog/del') {
        const loginCheckResult = loginCheck(req)
        if(loginCheckResult) {
            // 未登录
            return loginCheckResult
        }
        // 
        const author = req.session.username
        const result = delBlog(id, author)
        return result.then(val => {
            if(val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('del err')
            }
        })
        
    }
}
// 
module.exports = {
    handleBlogRouter,
}
