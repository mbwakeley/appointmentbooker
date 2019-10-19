const { Model } = require("objection");

class Appointment extends Model {
  static get tableName() {
    return "appointments";
  }

  static get relationMappings() {
    const User = require("./User");
    return {
      user: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "appointments.id",
          through: {
            // users_appointments is the join table.
            from: "users_appointments.appointment_id",
            to: "users_appointments.user_id"
          },
          to: "users.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      require: ["time", "location"],

      properties: {
        id: { type: "integer" },
        time: { type: "string" },
        location: { type: "string", minLength: 1, maxLength: 225 }
      }
    };
  }
}

module.exports = Appointment;
