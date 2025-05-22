require("dotenv").config({
  path: "/Users/user/Desktop/BTC/btc-fullstack/.env",
});

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 0,
      max: 5,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 0,
      max: 5,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
