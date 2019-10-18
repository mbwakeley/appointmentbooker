exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "April Darch",
          phone: "(216) 1760351",
          email: "adarch0@google.co.jp",
          password: "V7LhigYQz"
        },
        {
          name: "Carline Youell",
          phone: "(908) 6180003",
          email: "cyouell1@princeton.edu",
          password: "r814BJyLPS"
        },
        {
          name: "Coraline Lubeck",
          phone: "(674) 8677261",
          email: "clubeck2@oaic.gov.au",
          password: "gyztAtKyWsf1"
        },
        {
          name: "Alica Bougen",
          phone: "(452) 4131727",
          email: "abougen3@artisteer.com",
          password: "BTTMjH"
        },
        {
          name: "Bekki Castillo",
          phone: "(451) 9607970",
          email: "bcastillo4@vimeo.com",
          password: "p1O99yFPFR"
        },
        {
          name: "Reggy Sellar",
          phone: "(841) 3565019",
          email: "rsellar5@ucoz.com",
          password: "HjcVXzVM"
        },
        {
          name: "Micky De Castri",
          phone: "(514) 1611143",
          email: "mde6@howstuffworks.com",
          password: "V4r1IguE9h"
        },
        {
          name: "Gilberto Garrattley",
          phone: "(791) 5662930",
          email: "ggarrattley7@adobe.com",
          password: "o8edtmqA"
        },
        {
          name: "Dael Beasant",
          phone: "(301) 5408991",
          email: "dbeasant8@ustream.tv",
          password: "I7qN8UXP02"
        },
        {
          name: "Zack Surgeoner",
          phone: "(297) 7793808",
          email: "zsurgeoner9@cnet.com",
          password: "L4gr19"
        },
        {
          name: "Alyson Hans",
          phone: "(585) 9887269",
          email: "ahansa@biglobe.ne.jp",
          password: "OyoAGI"
        },
        {
          name: "Jobie Chinnick",
          phone: "(582) 3515003",
          email: "jchinnickb@oaic.gov.au",
          password: "nkrDy6AD"
        },
        {
          name: "Mercedes Gornall",
          phone: "(449) 2647202",
          email: "mgornallc@jigsy.com",
          password: "LsSdcqlM7f"
        },
        {
          name: "Gallagher Nancarrow",
          phone: "(402) 9247092",
          email: "gnancarrowd@zimbio.com",
          password: "jv6vZINseZ"
        },
        {
          name: "Nari Cowx",
          phone: "(142) 9149809",
          email: "ncowxe@europa.eu",
          password: "lVv7Ix"
        },
        {
          name: "Adrian Andrin",
          phone: "(544) 3450504",
          email: "aandrinf@oakley.com",
          password: "hWdErIxZqyr"
        },
        {
          name: "Roseanna MacMickan",
          phone: "(268) 4303292",
          email: "rmacmickang@lycos.com",
          password: "meZbH6RRdY"
        },
        {
          name: "Gwenneth Creaser",
          phone: "(136) 5344256",
          email: "gcreaserh@home.pl",
          password: "nKEPAKfvVPZ"
        },
        {
          name: "Saunder Gamett",
          phone: "(987) 1213325",
          email: "sgametti@symantec.com",
          password: "wvHf9b8J"
        },
        {
          name: "Matias Potebury",
          phone: "(691) 2206783",
          email: "mpoteburyj@ca.gov",
          password: "4kHuysYNVF"
        }
      ]);
    });
};
