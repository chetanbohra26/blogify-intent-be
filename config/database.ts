import { DatabaseOptions, registerAs } from '@intentjs/core';
import { knexSnakeCaseMappers } from 'objection';

export default registerAs(
  'db',
  (): DatabaseOptions => ({
    isGlobal: true,
    default: 'pg',
    connections: {
      pg: {
        client: 'pg',
        useNullAsDefault: true,
        debug: !!+process.env.DB_DEBUG,
        connection: {
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE
        },
        migrations: {
          directory: './database/migrations',
        },
        ...knexSnakeCaseMappers(),
      },
    },
  }),
);
