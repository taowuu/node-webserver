const loginCheck = (username, password) => {
    if(username === 'tao1' && password === '123') {
        return true
    }
    return false
}
// 
module.exports = {
    loginCheck,
}
