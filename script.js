let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let winterSports;
let summerSports;
let arr_1 = [] ;
let arr_2 = [] ;
let fruits;

winterSports = sports.slice(0,5);

summerSports = sports.slice(6,11)

arr_1.push(winterSports.splice(2,1));

arr_2.push(summerSports.splice(1,2))

fruits = arr_1.concat(arr_2);

console.log(`***Winter sports***`);
console.log(winterSports);
console.log(`***Summer sports***`);
console.log(summerSports);
console.log(`***Fruits***`)
console.log(fruits);


