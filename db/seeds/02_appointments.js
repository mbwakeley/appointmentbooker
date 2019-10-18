exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appointments").insert([
        {
          time: "3:50 PM",
          date: "9/10/2019",
          subject:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          location: "225 Beilfuss Park",
          status: false,
          user_id: 19
        },
        {
          time: "3:33 PM",
          date: "12/13/2018",
          subject:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          location: "1192 Forest Road",
          status: true,
          user_id: 18
        },
        {
          time: "5:25 PM",
          date: "9/19/2019",
          subject:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
          location: "3476 Old Gate Plaza",
          status: false,
          user_id: 20
        },
        {
          time: "4:42 PM",
          date: "2/7/2019",
          subject:
            "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          location: "00 Thompson Terrace",
          status: false,
          user_id: 16
        },
        {
          time: "2:24 PM",
          date: "8/21/2019",
          subject:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          location: "5 Bobwhite Junction",
          status: false,
          user_id: 3
        },
        {
          time: "9:26 PM",
          date: "3/5/2019",
          subject:
            "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
          location: "516 Crownhardt Circle",
          status: true,
          user_id: 6
        },
        {
          time: "10:18 AM",
          date: "2/3/2019",
          subject:
            "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
          location: "61 Old Gate Road",
          status: false,
          user_id: 12
        },
        {
          time: "10:19 AM",
          date: "3/18/2019",
          subject:
            "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
          location: "98 Farmco Terrace",
          status: true,
          user_id: 1
        },
        {
          time: "10:00 AM",
          date: "1/21/2019",
          subject:
            "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          location: "3 Portage Parkway",
          status: true,
          user_id: 12
        },
        {
          time: "11:21 AM",
          date: "10/22/2018",
          subject:
            "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
          location: "2 Kings Plaza",
          status: true,
          user_id: 12
        },
        {
          time: "6:22 PM",
          date: "4/3/2019",
          subject:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
          location: "55 Kingsford Road",
          status: true,
          user_id: 2
        },
        {
          time: "9:31 PM",
          date: "11/28/2018",
          subject:
            "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
          location: "135 Sherman Road",
          status: true,
          user_id: 15
        },
        {
          time: "9:49 AM",
          date: "2/8/2019",
          subject:
            "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
          location: "9462 Straubel Place",
          status: false,
          user_id: 6
        },
        {
          time: "8:29 PM",
          date: "9/2/2019",
          subject:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
          location: "943 Clove Parkway",
          status: true,
          user_id: 20
        },
        {
          time: "9:54 AM",
          date: "12/15/2018",
          subject:
            "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          location: "04229 6th Center",
          status: true,
          user_id: 4
        },
        {
          time: "4:54 PM",
          date: "8/20/2019",
          subject:
            "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
          location: "035 Cordelia Center",
          status: false,
          user_id: 19
        },
        {
          time: "9:54 AM",
          date: "6/30/2019",
          subject:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          location: "62 Erie Pass",
          status: false,
          user_id: 8
        },
        {
          time: "10:37 AM",
          date: "10/11/2019",
          subject: "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
          location: "8185 Swallow Plaza",
          status: true,
          user_id: 11
        },
        {
          time: "7:19 PM",
          date: "8/11/2019",
          subject:
            "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
          location: "21 Redwing Alley",
          status: true,
          user_id: 6
        },
        {
          time: "9:28 AM",
          date: "4/19/2019",
          subject:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
          location: "59 Cottonwood Pass",
          status: false,
          user_id: 13
        },
        {
          time: "12:02 PM",
          date: "3/4/2019",
          subject:
            "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
          location: "694 Everett Circle",
          status: false,
          user_id: 6
        },
        {
          time: "2:33 PM",
          date: "6/28/2019",
          subject:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
          location: "28979 Erie Drive",
          status: true,
          user_id: 12
        },
        {
          time: "12:12 PM",
          date: "3/23/2019",
          subject:
            "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          location: "6 Waxwing Avenue",
          status: false,
          user_id: 15
        },
        {
          time: "2:00 PM",
          date: "7/26/2019",
          subject:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
          location: "29 Kensington Way",
          status: false,
          user_id: 3
        },
        {
          time: "8:35 PM",
          date: "4/18/2019",
          subject:
            "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
          location: "1 Hudson Hill",
          status: true,
          user_id: 5
        },
        {
          time: "2:54 PM",
          date: "4/24/2019",
          subject:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
          location: "129 School Hill",
          status: true,
          user_id: 16
        },
        {
          time: "11:15 AM",
          date: "11/4/2018",
          subject:
            "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
          location: "0 Stuart Terrace",
          status: false,
          user_id: 6
        },
        {
          time: "5:02 PM",
          date: "9/13/2019",
          subject:
            "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
          location: "5 Talmadge Avenue",
          status: true,
          user_id: 13
        },
        {
          time: "11:32 AM",
          date: "5/1/2019",
          subject:
            "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
          location: "428 Anniversary Way",
          status: false,
          user_id: 12
        },
        {
          time: "1:49 PM",
          date: "5/10/2019",
          subject:
            "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          location: "707 Starling Way",
          status: true,
          user_id: 1
        },
        {
          time: "2:43 PM",
          date: "2/25/2019",
          subject:
            "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
          location: "99 Ridgeview Plaza",
          status: true,
          user_id: 2
        },
        {
          time: "11:17 AM",
          date: "9/17/2019",
          subject:
            "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
          location: "57 Shoshone Place",
          status: false,
          user_id: 17
        },
        {
          time: "9:00 PM",
          date: "4/11/2019",
          subject:
            "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
          location: "1359 Mcguire Point",
          status: false,
          user_id: 17
        },
        {
          time: "10:00 AM",
          date: "4/17/2019",
          subject:
            "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
          location: "4 Old Shore Avenue",
          status: true,
          user_id: 6
        },
        {
          time: "7:24 PM",
          date: "2/10/2019",
          subject:
            "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          location: "7749 Commercial Hill",
          status: false,
          user_id: 5
        },
        {
          time: "11:52 AM",
          date: "8/10/2019",
          subject:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          location: "3 Springs Terrace",
          status: false,
          user_id: 14
        },
        {
          time: "7:03 PM",
          date: "6/30/2019",
          subject:
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          location: "689 Green Ridge Point",
          status: false,
          user_id: 5
        },
        {
          time: "8:22 AM",
          date: "9/13/2019",
          subject:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          location: "7 Jana Crossing",
          status: false,
          user_id: 9
        },
        {
          time: "8:38 AM",
          date: "9/17/2019",
          subject:
            "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
          location: "677 Monterey Lane",
          status: false,
          user_id: 2
        },
        {
          time: "7:20 PM",
          date: "8/8/2019",
          subject:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
          location: "77267 Colorado Point",
          status: false,
          user_id: 10
        },
        {
          time: "9:50 AM",
          date: "4/10/2019",
          subject:
            "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          location: "082 Pleasure Terrace",
          status: true,
          user_id: 14
        },
        {
          time: "1:15 PM",
          date: "5/6/2019",
          subject:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
          location: "023 Dahle Center",
          status: false,
          user_id: 7
        },
        {
          time: "6:42 PM",
          date: "4/8/2019",
          subject:
            "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          location: "51439 Dawn Crossing",
          status: false,
          user_id: 5
        },
        {
          time: "8:20 AM",
          date: "5/8/2019",
          subject:
            "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
          location: "17 Sugar Point",
          status: false,
          user_id: 7
        },
        {
          time: "12:50 PM",
          date: "9/23/2019",
          subject:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          location: "798 Southridge Terrace",
          status: false,
          user_id: 12
        },
        {
          time: "12:54 PM",
          date: "11/13/2018",
          subject:
            "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
          location: "12 Maryland Way",
          status: true,
          user_id: 8
        },
        {
          time: "12:53 PM",
          date: "6/2/2019",
          subject:
            "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
          location: "9964 Mccormick Pass",
          status: true,
          user_id: 1
        },
        {
          time: "1:13 PM",
          date: "10/15/2019",
          subject:
            "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
          location: "53745 Hoepker Drive",
          status: false,
          user_id: 17
        },
        {
          time: "8:02 AM",
          date: "1/15/2019",
          subject:
            "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
          location: "5748 Columbus Parkway",
          status: false,
          user_id: 10
        },
        {
          time: "6:21 PM",
          date: "1/18/2019",
          subject:
            "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
          location: "690 Meadow Ridge Trail",
          status: true,
          user_id: 18
        }
      ]);
    });
};
