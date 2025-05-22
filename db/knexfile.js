require("dotenv").config({
  path: "/Users/user/Desktop/BTC/btc-fullstack/.env",
});

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  production: {
    client: "pg",
    production: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
};
