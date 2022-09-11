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
        req.body.author = 'taotao'
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }
    // update
    if(method === 'POST' && req.path === '/api/blog/update') {
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
        const author = 'taotao'
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
module.exports = handleBlogRouter
