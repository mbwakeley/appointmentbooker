exports.up = function(knex, Promise) {
  return knex.schema.createTable("appointments", table => {
    table.increments();
    table.string("time").notNullable();
    table.string("date").notNullable();
    table.text("subject").notNullable();
    table.string("location").notNullable();
    table.boolean("status").notNullable();
    table
      .integer("user_id")
      .references("id")
      .inTable("users");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("appointments");
};
