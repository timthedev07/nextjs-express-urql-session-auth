import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const MODE = process.env.NODE_ENV;
const __prod__ = MODE === "production";

const basedir = __prod__ ? "dist" : "src";
const fileType = __prod__ ? "js" : "ts";

/**
 * The production heroku pg url includes
 *  - username
 *  - password
 *  - host
 *  - port
 *  - database
 */

module.exports = {
  type: "postgres",
  ...(__prod__
    ? { url: process.env.DATABASE_URL /* this env var is provided by heroku */ }
    : {
        host: "localhost",
        port: 5432,
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: "example-db",
      }),
  entities: [`${basedir}/entity/**/*.${fileType}`],
  migrations: [`${basedir}/migrations/**/*.${fileType}`],
  subscribers: [`${basedir}/subscriber/**/*.${fileType}`],
  cli: {
    entitiesDir: `${basedir}/entity`,
    migrationsDir: `${basedir}/migrations`,
    subscribersDir: `${basedir}/subscriber`,
  },
  synchronize: true,
  ssl: __prod__,
  extra: __prod__
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : undefined,
  logging: ["query"],
} as PostgresConnectionOptions;
