const { getList, 
        getDetail, 
        newBlog,
        updateBlog,
        delBlog,
    } = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')
// 
const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id
    // list
    if(method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }
    // detail
    if(method === 'GET' && req.path === '/api/blog/detail') {
        const data = getDetail(id)
        return new SuccessModel(data)

    }
    // new
    if(method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }
    // update
    if(method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        if(result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('update err')
        }
    }
    // del
    if(method === 'POST' && req.path === '/api/blog/del') {
        const result = delBlog(id)
        if(result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('del err')
        }
    }
}
// 
module.exports = handleBlogRouter
