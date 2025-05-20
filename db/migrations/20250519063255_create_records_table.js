/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("records", (table) => {
    table.increments("id").primary();
    table.date("record_date").notNullable();
    table
      .enu("record_type", ["食事", "育児", "服装", "髪型", "デート"])
      .notNullable();
    table.text("record_comment").notNullable();
    table.integer("record_rating").notNullable();
    table
      .enu("record_mood", [
        "楽しい",
        "疲れた",
        "リラックス",
        "ワクワク",
        "悲しい",
      ])
      .notNullable();
    table.string("record_photo_url").nullable();
    table.enu("meal_type", ["朝食", "昼食", "夜食", "間食"]).nullable();
    table.string("child_activity").nullable();
    table.integer("child_age").nullable();
    table.string("brand").nullable();
    table.string("date_place").nullable();
    table.string("salon").nullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("records");
};
