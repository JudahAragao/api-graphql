const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, {id}) {
            return await db('users').where({ id }).first()
        },
        async getUsers(_, {offset, limit}) {
            return await db('users')
        }
    },
    Mutation: {
        async createUser(_, {input}) {
            const result = await db('users').insert({
                nome: input.nome,
                email: input.email,
                password: input.password
            })
            return result
        }
    }
}