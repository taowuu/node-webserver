const { getList } = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')
// 
const handleBlogRouter = (req, res) => {
    const method = req.method
    // 
    if(method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }
    if(method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: 'blog detail api'
        }
    }
    if(method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: 'new blog api'
        }
    }
    if(method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: 'update blog api'
        }
    }
    if(method === 'POST' && req.path === '/api/blog/del') {
        return {
            msg: 'del blog api'
        }
    }
}
// 
module.exports = handleBlogRouter
