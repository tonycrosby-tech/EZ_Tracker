require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USER_2,
    password: null,
    database: 'dev',
    host: process.env.DB_HOST_2,
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      timestamps: true,
      underscored: true,
    },
  },
  test: {
    username: process.env.DB_USER_2,
    password: null,
    database: 'test',
    host: process.env.DB_HOST_2,
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      timestamps: true,
      underscored: true,
    },
  },
  production: {
    use_env_variable: JAWSDB_URL,
    dialect: mysql,
    define: {
      charset: utf8,
      timestamps: true,
      underscored: true,
    },
    logging: false,
  },
};
