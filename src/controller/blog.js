const { exec } = require('../db/mysql')
// 
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if(author) {
        sql += `and author='${author}' `
    }
    if(keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`
    return exec(sql)
}
// 
const getDetail = (id) => {
    let sql = `select * from blogs where id='${id}' `
    return exec(sql).then(rows => {
        return rows[0]
    })
}
// 
const newBlog = (blogData = {}) => {
    // console.log('new blogdata', blogData)
    title = blogData.title
    content = blogData.content
    author = blogData.author
    createTime = Date.now()
    let sql = `
        insert into blogs(title, content, createtime, author) 
        values('${title}', '${content}', ${createTime}, '${author}')
    `
    return exec(sql).then(insertData => {
        // console.log('insertData ', insertData)
        return {
            id: insertData.insertId
        }
    })
}
// 
const updateBlog = (id, blogData = {}) => {
    title = blogData.title
    content = blogData.content
    let sql = `update blogs set title='${title}', content='${content}' where id='${id}';`
    return exec(sql).then(updateData => {
        if(updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}
const delBlog = (id, author) => {
    let sql = `delete from blogs where id='${id}' and author='${author}';`
    return exec(sql).then(deleteData => {
        if(deleteData.affectedRows > 0) {
            return true
        }
        return false
    })
}
// 
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog,
}