'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  deliver: function ({
    time = '8:00',
    starterNumber = '0',
    address = 'Mock Address',
  }) {
    console.log(time, starterNumber, address);
  },

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `The ingredients in the pasta are ${ingredient1}, ${ingredient2} and ${ingredient3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/** Destructuring Arrays */
const testArray = [1, 2, 3];

let [x, y, z] = testArray;

console.log(testArray);
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

/** How to return two values through one function */
const [starterCourse, mainCourse] = restaurant.order(0, 2);
// log: The starter course is Focaccia, and the main course is Risotto
console.log(
  `The starter course is ${starterCourse}, and the main course is ${mainCourse}`
);

/** Destructuring Objects */
const { name, mainMenu, openingHours } = restaurant;
console.log(name, mainMenu, openingHours);

/** Destructuring with different names */
const {
  name: restaurantName,
  mainMenu: mainFoods,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, mainFoods, hours); // Same result as above

/** Default Value */
const { menu = [], mainMenu: mains = [] } = restaurant;
console.log(menu, mains); // Log: []  ['Pizza', 'Pasta', 'Risotto']

/** Mutating variables from object */
let a = 111;
let b = 999;
const object = { a: 22, b: 44, c: 88 };
({ a, b } = object);
console.log(a, b); // Changes from original value, to match the destructured object key values inside the object. In this case changes from 111 and 999 to 22 and 44 respectively

/** Sample Application for obj destructuring */
// Check above for function
restaurant.deliver({
  time: '10:30',
  starterNumber: 2,
  address: 'Test Address',
});

/** Spread Operator */
const spreadArray = [1, 5, 9];
// Manual assignment of prev values
const badArray = [3, 4, spreadArray[0], spreadArray[1], spreadArray[2]];

// Spread assignment
const goodArray = [3, 4, ...spreadArray];
console.log(goodArray); // This is array with all it's inherent array data type properties

console.log(...goodArray); // This is just values in array

/** Samples for Spread Operator */
// New array
const newMenu = [...mainMenu, 'Gnocci'];
console.log(newMenu);

// Copying array
const copiedArray = [...newMenu];
console.log(copiedArray); // Same as above

// Joining 2 arrays
const joinedArray = [...newMenu, ...restaurant.starterMenu];
console.log(...joinedArray);

/** Samples of other iterable spreads */
// String
const sampleStr = 'Patrick';
const individualLetters = [...sampleStr];
console.log(individualLetters);

/** Sample function call with spread input param */

const ingredientsObj = ['Mushroom', 'Cheese', 'Beef Meat'];
restaurant.orderPasta(...ingredientsObj); // Better alternative than calling each array element individually

/** Object example for spread */
const newResturant = { ...restaurant, foundedIn: 1908 };
console.log(newResturant); // New obj includes new foundedIn key/value pair

// Copying object
const copiedResturant = { ...newResturant };
copiedResturant.name = 'New name';
console.log(copiedResturant);

/** Samples for Rest operator */

const [no1, no2, ...others] = [1, 2, 3, 4, 5, 7];
console.log(no1, no2, others);

// Using both spread and rest
// This will destructure and assign the pizza and risotto variables through spread destructuring, whilst sending the remaining items in the startermenu into the otherMenuItems variable we rested
const [pizza, , risotto, ...otherMenuItems] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherMenuItems);

// Using both spread and rest for objects
// Similar effect to array, but even easier as objects will key value pair easier
const { sat, ...weekdayHours } = restaurant.openingHours;
console.log(sat, weekdayHours); // Result is one object with just saturday values for opening hours, and the other object will hold the opening hours with remainder of orig object elements

// Functions examples

const sampleAdd = function (...numbers) {
  console.log(`Input params are: ${numbers}`);
};

sampleAdd(1, 5, 9, 11);
sampleAdd(2, 5, 7, 12, 4, 6);

const testArrInput = [12, 42, 56];
sampleAdd(...testArrInput);
// Note above passed in as array and can use array methods to alter the numbers for whichever use case required
// Another way to use spread is shown below

// Sample function with resturant object
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
