exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users_appointments").insert([
        {
          user_id: 14,
          appointment_id: 36
        },
        {
          user_id: 19,
          appointment_id: 27
        },
        {
          user_id: 20,
          appointment_id: 27
        },
        {
          user_id: 20,
          appointment_id: 1
        },
        {
          user_id: 4,
          appointment_id: 24
        },
        {
          user_id: 19,
          appointment_id: 30
        },
        {
          user_id: 12,
          appointment_id: 18
        },
        {
          user_id: 7,
          appointment_id: 43
        },
        {
          user_id: 19,
          appointment_id: 32
        },
        {
          user_id: 2,
          appointment_id: 9
        },
        {
          user_id: 16,
          appointment_id: 36
        },
        {
          user_id: 17,
          appointment_id: 14
        },
        {
          user_id: 13,
          appointment_id: 1
        },
        {
          user_id: 7,
          appointment_id: 36
        },
        {
          user_id: 5,
          appointment_id: 24
        },
        {
          user_id: 12,
          appointment_id: 22
        },
        {
          user_id: 8,
          appointment_id: 14
        },
        {
          user_id: 11,
          appointment_id: 38
        },
        {
          user_id: 10,
          appointment_id: 8
        },
        {
          user_id: 10,
          appointment_id: 2
        },
        {
          user_id: 20,
          appointment_id: 35
        },
        {
          user_id: 16,
          appointment_id: 37
        },
        {
          user_id: 12,
          appointment_id: 34
        },
        {
          user_id: 13,
          appointment_id: 13
        },
        {
          user_id: 5,
          appointment_id: 50
        },
        {
          user_id: 8,
          appointment_id: 22
        },
        {
          user_id: 12,
          appointment_id: 7
        },
        {
          user_id: 5,
          appointment_id: 1
        },
        {
          user_id: 15,
          appointment_id: 27
        },
        {
          user_id: 3,
          appointment_id: 50
        },
        {
          user_id: 10,
          appointment_id: 6
        },
        {
          user_id: 14,
          appointment_id: 47
        },
        {
          user_id: 18,
          appointment_id: 46
        },
        {
          user_id: 14,
          appointment_id: 38
        },
        {
          user_id: 4,
          appointment_id: 20
        },
        {
          user_id: 6,
          appointment_id: 44
        },
        {
          user_id: 1,
          appointment_id: 10
        },
        {
          user_id: 3,
          appointment_id: 47
        },
        {
          user_id: 17,
          appointment_id: 1
        },
        {
          user_id: 1,
          appointment_id: 50
        },
        {
          user_id: 20,
          appointment_id: 13
        },
        {
          user_id: 14,
          appointment_id: 26
        },
        {
          user_id: 10,
          appointment_id: 26
        },
        {
          user_id: 10,
          appointment_id: 37
        },
        {
          user_id: 5,
          appointment_id: 27
        },
        {
          user_id: 15,
          appointment_id: 46
        },
        {
          user_id: 2,
          appointment_id: 15
        },
        {
          user_id: 15,
          appointment_id: 7
        },
        {
          user_id: 8,
          appointment_id: 45
        },
        {
          user_id: 13,
          appointment_id: 27
        },
        {
          user_id: 16,
          appointment_id: 42
        },
        {
          user_id: 12,
          appointment_id: 36
        },
        {
          user_id: 10,
          appointment_id: 25
        },
        {
          user_id: 3,
          appointment_id: 23
        },
        {
          user_id: 7,
          appointment_id: 4
        },
        {
          user_id: 11,
          appointment_id: 5
        },
        {
          user_id: 18,
          appointment_id: 9
        },
        {
          user_id: 8,
          appointment_id: 37
        },
        {
          user_id: 4,
          appointment_id: 11
        },
        {
          user_id: 14,
          appointment_id: 32
        },
        {
          user_id: 6,
          appointment_id: 10
        },
        {
          user_id: 18,
          appointment_id: 46
        },
        {
          user_id: 12,
          appointment_id: 43
        },
        {
          user_id: 17,
          appointment_id: 14
        },
        {
          user_id: 9,
          appointment_id: 29
        },
        {
          user_id: 2,
          appointment_id: 5
        },
        {
          user_id: 20,
          appointment_id: 48
        },
        {
          user_id: 10,
          appointment_id: 14
        },
        {
          user_id: 19,
          appointment_id: 25
        },
        {
          user_id: 9,
          appointment_id: 37
        },
        {
          user_id: 3,
          appointment_id: 32
        },
        {
          user_id: 10,
          appointment_id: 10
        },
        {
          user_id: 2,
          appointment_id: 29
        },
        {
          user_id: 2,
          appointment_id: 21
        },
        {
          user_id: 3,
          appointment_id: 17
        },
        {
          user_id: 10,
          appointment_id: 2
        },
        {
          user_id: 1,
          appointment_id: 46
        },
        {
          user_id: 12,
          appointment_id: 1
        },
        {
          user_id: 15,
          appointment_id: 50
        },
        {
          user_id: 1,
          appointment_id: 25
        },
        {
          user_id: 5,
          appointment_id: 40
        },
        {
          user_id: 20,
          appointment_id: 21
        },
        {
          user_id: 13,
          appointment_id: 40
        },
        {
          user_id: 16,
          appointment_id: 49
        },
        {
          user_id: 10,
          appointment_id: 14
        },
        {
          user_id: 20,
          appointment_id: 21
        },
        {
          user_id: 19,
          appointment_id: 32
        },
        {
          user_id: 7,
          appointment_id: 26
        },
        {
          user_id: 13,
          appointment_id: 3
        },
        {
          user_id: 5,
          appointment_id: 23
        },
        {
          user_id: 8,
          appointment_id: 41
        },
        {
          user_id: 7,
          appointment_id: 39
        },
        {
          user_id: 16,
          appointment_id: 1
        },
        {
          user_id: 10,
          appointment_id: 40
        },
        {
          user_id: 5,
          appointment_id: 27
        },
        {
          user_id: 3,
          appointment_id: 3
        },
        {
          user_id: 2,
          appointment_id: 21
        },
        {
          user_id: 4,
          appointment_id: 17
        },
        {
          user_id: 12,
          appointment_id: 42
        },
        {
          user_id: 10,
          appointment_id: 26
        }
      ]);
    });
};
