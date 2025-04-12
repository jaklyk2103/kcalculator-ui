const data = [
  ["Mąka tortowa", 450,	340,	10.2,	1,	71.3],
  ["Olej kujawski",	88,	0,	100,	0],
  ["Drożdże piekarskie świeże",	92,	11,	2,	7],
  ["Ser żółty",	338,	25,	26,	1.1],
  ["Ketchup Madero łagodny",	134,	2,	0.4,	30],
  ["Tofu wędzone",	122,	13,	7,	1],
  ["Szynka",	253,	17.1,	20.3,	0.9],
  ["Cukier",	386,	0,	0,	100],
  ["Ziemniaki gotowane",	87, 2,	0,	20],
  ["Mleko UHT 3.2%",	60,	3.2,	3.2,	4.7],
  ["Mleko UHT 2.0%",	51,	3.3,	2,	4.8],
  ["Mleko UHT 1.5%",	44,	3,	1.5,	4.7],
  ["jajko L", 139,	12,	10,	1,],
  ["Skyr naturalny fruvita",	66,	12,	0,	3.8],
  ["Go Active Pudding smak czekoladowy", 	81,	10,	1,	6.4],
  ["Banan",	89,	1,	0,	23],
  ["Chleb biały",	262,	9,	1,	54],
  ["Chleb żytni razowy",	227,	6,	2,	51],
  ["Bułka kajzerka",	293,	10,	4,	53],
  ["Masło ekstra",	748,	1,	83,	1],
  ["Cebula", 40,	1,	0,	9]
];

const fs = require('fs');

const mappedData = data.map((item) => {
  return {
    name: item[0],
    calories: item[1],
    proteins: item[2],
    fats: item[3],
    carbohydrates: item[4],
  }
});


fs.writeFileSync('import_data.json', JSON.stringify(mappedData, null, 2), 'utf-8', (err) => {});