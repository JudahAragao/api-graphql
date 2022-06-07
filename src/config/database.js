const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

/*
    INSERT DB
*/

// knex('users').insert({
//     nome: 'Judah',
//     email: 'judah.aragao@gmail.com',
//     password: '12345'
// }).then(data => console.log(data))

/*
    SELECT DB
*/

//knex('users').select('*').then(result => console.log(result))
//knex('users').first().then(result => console.log(result))
//knex('users').where({id: 1}).then(result => console.log(result))