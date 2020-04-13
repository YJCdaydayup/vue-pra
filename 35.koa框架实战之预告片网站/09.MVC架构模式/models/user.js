module.exports = {
    async getUser() {
        let users = await db.q('select * from users', [])
        return users
    }
}