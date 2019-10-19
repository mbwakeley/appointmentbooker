exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appointments").insert([
        {
          time: "8:51 PM",
          date: "10/1/2019",
          location: "37953 Lyons Park",
          status: true
        },
        {
          time: "4:19 PM",
          date: "10/3/2019",
          location: "06619 Sunbrook Lane",
          status: false
        },
        {
          time: "1:40 PM",
          date: "7/23/2019",
          location: "6884 Basil Alley",
          status: true
        },
        {
          time: "8:25 PM",
          date: "2/22/2019",
          location: "223 Heath Street",
          status: false
        },
        {
          time: "8:02 PM",
          date: "6/10/2019",
          location: "48 Sherman Pass",
          status: false
        },
        {
          time: "1:15 PM",
          date: "12/15/2018",
          location: "124 Straubel Way",
          status: false
        },
        {
          time: "7:27 PM",
          date: "12/20/2018",
          location: "82 Spaight Parkway",
          status: false
        },
        {
          time: "1:32 PM",
          date: "7/22/2019",
          location: "2218 Mallard Terrace",
          status: true
        },
        {
          time: "6:22 PM",
          date: "2/15/2019",
          location: "276 Corscot Hill",
          status: false
        },
        {
          time: "3:46 PM",
          date: "4/28/2019",
          location: "9313 Nova Lane",
          status: false
        },
        {
          time: "9:45 PM",
          date: "1/2/2019",
          location: "395 Red Cloud Court",
          status: false
        },
        {
          time: "8:48 AM",
          date: "8/14/2019",
          location: "4 Vahlen Trail",
          status: true
        },
        {
          time: "6:19 PM",
          date: "12/22/2018",
          location: "6 Texas Way",
          status: false
        },
        {
          time: "4:07 PM",
          date: "6/18/2019",
          location: "3 Hayes Center",
          status: false
        },
        {
          time: "8:29 AM",
          date: "7/21/2019",
          location: "36 Wayridge Trail",
          status: true
        },
        {
          time: "12:05 PM",
          date: "12/20/2018",
          location: "4 Fulton Avenue",
          status: true
        },
        {
          time: "2:38 PM",
          date: "12/15/2018",
          location: "936 Caliangt Junction",
          status: true
        },
        {
          time: "6:23 PM",
          date: "7/13/2019",
          location: "9764 Warbler Alley",
          status: true
        },
        {
          time: "2:51 PM",
          date: "5/4/2019",
          location: "8 Elmside Junction",
          status: true
        },
        {
          time: "2:56 PM",
          date: "7/7/2019",
          location: "502 Upham Way",
          status: true
        },
        {
          time: "4:12 PM",
          date: "12/25/2018",
          location: "4 Pine View Crossing",
          status: false
        },
        {
          time: "2:29 PM",
          date: "1/9/2019",
          location: "7 Farmco Avenue",
          status: true
        },
        {
          time: "11:48 AM",
          date: "2/1/2019",
          location: "4737 Everett Park",
          status: true
        },
        {
          time: "2:12 PM",
          date: "2/4/2019",
          location: "28 John Wall Trail",
          status: false
        },
        {
          time: "9:34 AM",
          date: "9/14/2019",
          location: "643 Hoepker Center",
          status: true
        },
        {
          time: "11:58 AM",
          date: "12/3/2018",
          location: "2 Gateway Crossing",
          status: true
        },
        {
          time: "2:09 PM",
          date: "9/28/2019",
          location: "7489 Logan Plaza",
          status: false
        },
        {
          time: "12:56 PM",
          date: "12/5/2018",
          location: "6 Cardinal Place",
          status: false
        },
        {
          time: "4:36 PM",
          date: "11/21/2018",
          location: "080 Northwestern Alley",
          status: false
        },
        {
          time: "5:01 PM",
          date: "8/19/2019",
          location: "0 Independence Junction",
          status: true
        },
        {
          time: "8:24 AM",
          date: "3/16/2019",
          location: "288 Mandrake Terrace",
          status: true
        },
        {
          time: "3:27 PM",
          date: "7/30/2019",
          location: "8937 Lunder Crossing",
          status: true
        },
        {
          time: "1:03 PM",
          date: "12/18/2018",
          location: "73256 Lakewood Court",
          status: false
        },
        {
          time: "8:21 AM",
          date: "11/29/2018",
          location: "362 Roxbury Avenue",
          status: true
        },
        {
          time: "4:55 PM",
          date: "9/24/2019",
          location: "4207 Manley Way",
          status: false
        },
        {
          time: "1:24 PM",
          date: "1/11/2019",
          location: "664 Shasta Road",
          status: false
        },
        {
          time: "12:03 PM",
          date: "3/17/2019",
          location: "0879 Granby Road",
          status: false
        },
        {
          time: "2:32 PM",
          date: "3/17/2019",
          location: "95538 Hudson Parkway",
          status: true
        },
        {
          time: "8:35 PM",
          date: "2/4/2019",
          location: "7655 Scoville Road",
          status: true
        },
        {
          time: "7:31 PM",
          date: "7/17/2019",
          location: "5 Nobel Pass",
          status: true
        },
        {
          time: "2:15 PM",
          date: "8/14/2019",
          location: "30199 Canary Pass",
          status: false
        },
        {
          time: "11:50 AM",
          date: "12/1/2018",
          location: "329 Ridgeview Drive",
          status: true
        },
        {
          time: "12:00 PM",
          date: "8/25/2019",
          location: "2623 Fisk Center",
          status: false
        },
        {
          time: "6:30 PM",
          date: "6/19/2019",
          location: "16523 Autumn Leaf Point",
          status: true
        },
        {
          time: "4:53 PM",
          date: "7/19/2019",
          location: "867 Lerdahl Center",
          status: true
        },
        {
          time: "11:25 AM",
          date: "5/4/2019",
          location: "02399 Jackson Court",
          status: false
        },
        {
          time: "12:43 PM",
          date: "3/25/2019",
          location: "14 Artisan Way",
          status: true
        },
        {
          time: "9:13 AM",
          date: "10/18/2018",
          location: "8 Meadow Vale Trail",
          status: true
        },
        {
          time: "10:07 AM",
          date: "1/28/2019",
          location: "79637 Northport Circle",
          status: false
        },
        {
          time: "3:36 PM",
          date: "11/15/2018",
          location: "7 Beilfuss Junction",
          status: true
        }
      ]);
    });
};
