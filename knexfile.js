// Update with your config settings.



module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'dax_blog'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection:{
      database:process.env.DATABASE_URL;
    },
    pool:{
      min:0,
      max:10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
