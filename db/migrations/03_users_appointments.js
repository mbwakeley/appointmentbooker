exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_appointments", function(table) {
    table.increments();
    table
      .integer("user_id")
      .references("users.id")
      .onDelete("CASCADE");
    table
      .integer("appointment_id")
      .references("appointments.id")
      .onDelete("CASCADE");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users_appointments");
};
