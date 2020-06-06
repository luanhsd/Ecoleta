import path from 'path';

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ecoleta',
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    useNullAsDefault: true,
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
  },
};
