function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max-min) + 1) + min;
}

let x = getRandomInteger(1,6);
let y = getRandomInteger(1,6);

console.log("|----||----|");
console.log("|-"+x+"--|"+"|--"+y+"-|");
console.log("|----||----|");
