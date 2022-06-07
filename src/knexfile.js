
module.exports = {

  client: 'postgresql',
    connection: {
      database: 'apiGraphql',
      user:     'postgres',
      password: 'CgmCeti4821', 
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
