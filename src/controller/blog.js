const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: 'title 1',
            content: 'content 1',
            author: 'tao1',
        },
        {
            id: 2,
            title: 'title 2',
            content: 'content 2',
            author: 'tao2',
        },
    ]
}
// 
const getDetail = (id) => {
    return [
        {
            id: 1,
            title: 'title 1',
            content: 'content 1',
            author: 'tao1',
        }
    ]
}
// 
const newBlog = (blogData = {}) => {
    // console.log('new blogdata', blogData)
    return {
        id: 3,
        title: 'title 3',
        content: 'content 3',
        author: 'tao3',
    }
}
// 
const updateBlog = (id, blogData = {}) => {
    // console.log('update blog', id, blogData)
    return true
}
const delBlog = (id) => {
    return true
}
// 
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog,
}