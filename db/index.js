const knex = require("knex");
let knexConfig = require("./knexfile");

let config;

if (process.env.NODE_ENV === "development") {
  config = knexConfig.development;
} else {
  config = knexConfig.production;
}

module.exports = knex(config);
