const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const Appointment = require("./Appointment");

    return {
      appointments: {
        relation: Model.ManyToManyRelation,
        modelClass: Appointment,
        join: {
          from: "users.id",
          through: {
            // users_appointments is the join table.
            from: "users_appointments.user_id",
            to: "users_appointments.appointment_id"
          },
          to: "appointments.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "email", "password"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = User;
