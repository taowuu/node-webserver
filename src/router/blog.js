const handleBlogRouter = (req, res) => {
    const method = req.method
    // const url = req.url
    // const path = url.split('?')[0]
    // 
    if(method === 'GET' && req.path === '/api/blog/list') {
        return {
            msg: 'blog list api'
        }
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
