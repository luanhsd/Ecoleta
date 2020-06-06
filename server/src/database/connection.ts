import knex from 'knex';
import path from 'path';

const connection = knex({
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
});

export default connection;
