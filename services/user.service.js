const login = (email, password) => {
    if (email !== 'profe@coderhouse.com') return false
    if (password !== 'admin') return false
    return true
}

module.exports = login