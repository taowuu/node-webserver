const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
    username = escape(username)
    
    password = genPassword(password)
    password = escape(password)
    let sql = `select username, realname from users where username=${username} and password=${password};`
    // console.log('ctl user.js ', sql)
    // sql inject
    // ctl user.js  select username, realname from users where username='tao1\'--' and password='123';
    return exec(sql).then(rows => {
        // console.log(rows)
        return rows[0]
    })
}
// 
module.exports = {
    login,
}
