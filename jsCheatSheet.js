//---------On Page Scripts----------//
<script type="text/javascript">---</script>;


//---------functions----------//
function addNumbers(a, b) {
  return a + b;
}


//---------inline function or Arrow function----------//
const addNumbers1 = (x, y) => x + y;


//---------Logging Print----------//
console.log("Hello World");
document.write("Hello World");
alert("hello world");
confirm("Are You Sure?");
prompt("Tell Me Your Age ?");


//---------JS - 8 data types----------//
var age = 18;                                  // 1 --number
var name = "Dipak Singh";                      // 2 --string
var name = { first: "DIPAK", last: "SINGH" };  // 3 --object
var truth = true;                              // 4 --boolean
var frontEnd = ["HTML", "CSS", "JS"];          // 5 --array(type of object)
var a; typeof a;                               // 6 --undefined
var a = null;                                  // 7 --value null
const bigNumber = 123456789012345678901230n;   // 8 --bigInt due to n suffix


//---------if else statement----------//
if (age >= 18 && age <= 65) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}


//---------while statement----------//
var i = 0 ;                        // -- initialize variable with a value
while (i<5){
    console.log(i," ");            // -- print the value of i to console
    i++;                           // -- increment the value of i by 1
}


//---------do while statement----------//
i = 0;
do{
    console.log(i," ");
    i++;
} while ( i < 5 )

//---------for loop----------//
for (var i = 0 ; i < 5 ; i++ ){
    console.log(i," ");
}


//----------for in loop -------------//
/*
- used to iterate over enumerable properties of objects
- generally for objects( not arrays)
*/
const person = {
    name: "Dipak",
    age: 22, 
    place: "Mnr"
}; 
for ( let key in person ) {
    console.log(key , person[key]);  // -- output name - Dipak , age - 22 , place - mnr 
}


//----------for of loop -------------//
/* - used to iterate over objects (arrays , strings , sets , maps , etc)
   - preferred way to loop over arrays. */
const names = ["Dipak","Neeru","Axel"]; //-- arrays
for (let x of names) {
    console.log(x);               // -- output Dipak , Neeru , Axel
}

const message = "Hello";          // -- characters
for (let char of message) {
  console.log(char);
}


//----------Javascript Objects-------------//
const user = { name: "Dipak", age: 22, city: "Mnr" };
console.log(Object.keys(user)); // ["name", "age", "city"]
console.log(Object.values(user)); // ["Dipak", 22, "Mnr"]
console.log(Object.entries(user)); // [["name", "Dipak"], ["age", 22], ["city", "Mnr"]]


//----------Javascript Strings-------------//
var abc = "abcdefghijklmnopqrstuvwxyz" ; 
var ABC = "ABCDEF";
var esc = "I don't \n know.";   // -- \n is used for new line , \t is used for tab , \\ is used for escape sequence
var len = abc.length;           // -- length of string
abc.indexOf("efg");             // -- returns the index of first occurrence of the string
abc.lastIndexOf("efg");         // -- returns the index of last occurrence of the string
abc.slice(0,5);                 // -- returns a new string from index 0 to 5
abc.replace("a" , "A");         // -- replace a with A
abc.toUpperCase();              // -- returns the string in uppercase
ABC.toLowerCase();              // -- returns the string in lowercase
abc.concat(" ", ABC);           // -- same as abc + ABC
abc.charAt(2);                  // -- returns the character at index 2 i.e 3rd character
abc.charCodeAt(2);              // -- returns the unicode of the character at index 2 i.e 3rd character
abc.split(",");                 // -- splitting a string with commas
abc.split("");                  // -- splitting on characters
abc[2];                         // -- same as abc.charAt(2) -but unsafe
/*
The reason abc[index] is considered less safe 
is because undefined can easily lead to runtime errors 
if you're not careful.
*/


const str = "hello";
console.log(str[10]);        // Output: undefined
console.log(str.charAt(10)); // Output: "" (empty string)



//----------Javascript Maths-------------//
var pi = Math.PI;  // 3.141592653589793
Math.round(4.4);  //  4-rounded
Math.round(4.5);  //  5-rounded
Math.pow(2,3);   // 8- 2 to the power of 3
Math.sqrt(36);   // 6-square root of 36
Math.abs(-10);   // 10-absolute value of -10
Math.floor(3.99)  // 3- floor value of 3.99, remove decimal keeps integer only
Math.ceil(3.14);  // 4-ceiling of 3.14
/* The code takes the number 3.14,
rounds it up to the nearest whole number (which is 4), 
and then prints that result to the console. 
*/

Math.sin(0);      // 0-sine of 0
Math.cos(Math.PI); // -1-cosine of pi
Math.min(0 , 5 , 8 , 13 ); // 0- returns 0 which is the smallest value
Math.max(0 , 5 , 8 , 13 ); // 13- returns
Math.log(1); // 0-logarithm of 1
Math.exp(1); // 2.71828-exponential of 1
Math.random(); // 0.123456-random number between 0 and 1
Math.floor(Math.random() * 5) + 1 ; // 1- random number between 1 and 5

var pi = 3.141;
pi.toFixed(0); // 3- returns 3.141 as 3
pi.toFixed(2); // 3.14- returns 3.141 as 3.14
pi.toPrecision(2); // 3.1- returns 3.141 as 3.1
pi.valueOf(); // 3.141- returns the value of pi as 3.141
Number(true); // 1- returns true as 1
Number(new Date()); // 1643723900000- returns the number of milliseconds since the Unix Epoch (January
parseInt("Months"); // NaN-because it can't be converted to a number
/*
NaN stands for Not A Number
*/

parseFloat("3.5 days"); // returns 3.5 the first number float
Number.MAX_VALUE   // largest possible JS number
Number.MIN_VALUE   // smallest possible JS number
Number.NEGATIVE_INFINITY  // negative infinity
Number.POSITIVE_INFINITY   // positive infinity



//----------Javascript Arrays-------------//
const myArray = [1 , 2, 3 , 4 , 5];
myArray.length;    // 5
myArray.push(6);   // [1, 2, 3, 4, 5, 6] -- add element 6 to last
myArray.pop();     // [1, 2, 3, 4 , 5]   -- remove and return last element
myArray.shift();   // [2, 3, 4, 5] -- remove and return first element
myArray.unshift(1);// [1, 2, 3, 4, 5] -- add element to beginning
myArray.reverse(); // [5, 4, 3, 2, 1] -- reverse the array
myArray.sort();    // [1, 2, 3, 4, 5] -- sorts the array in ascending order
myArray.join("-"); // "1-2-3-4-5" -- join the array with a string


// Array iteration methods (important!):
const newArray = [1, 2, 3, 4, 5];
const doubledArray = newArray.map((element) => element * 2);

/*The map() method creates a *new* array by 
applying a given function to each element
of the original array. It does not change the original array.
*/
console.log("Original array:", newArray); // Output: [1, 2, 3, 4, 5] (myArray is unchanged)
console.log("Doubled array:", doubledArray); // Output: [2, 4, 6, 8, 10]




// Common array methods (continued):
const Array1 = [1, 2, 3, 4, 5];

// 1. concat(): Creates a new array by joining existing arrays.
const moreNumbers = [6, 7, 8];
const combinedArray = Array1.concat(moreNumbers);
console.log("Combined array:", combinedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// 2. slice(): Returns a shallow copy of a portion of an array into a new array object.
const subArray = Array1.slice(1, 4); // Elements from index 1 up to (but not including) 4
console.log("Sub array:", subArray); // Output: [2, 3, 4]

// 3. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.  (Modifies the original array!)
const removedElements = Array1.splice(1, 2, 10, 20); // Remove 2 elements starting at index 1, and add 10 and 20
console.log("myArray after splice:", Array1); // Output: [1, 10, 20, 4, 5] (myArray is modified)
console.log("Removed elements:", removedElements); // Output: [2, 3]

// 4. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const indexOf4 = Array1.indexOf(4);
console.log("Index of 4:", indexOf4); // Output: 3
const indexOf10 = Array1.indexOf(10);
console.log("Index of 10:", indexOf10); // Output: -1  -- not found


// 5. lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const lastIndexOf3 = Array1.lastIndexOf(3);
console.log("Last index of 3:", lastIndexOf3); // Output: 2 

// 6. includes(): Determines whether an array includes a certain element, returning true or false.
const includes5 = Array1.includes(5);
console.log("Includes 5:", includes5); // Output: true

// 7. find(): Returns the value of the *first* element in the array that satisfies the provided testing function. Otherwise undefined is returned.
const foundElement = Array1.find((element) => element > 3);
console.log("Found element (greater than 3):", foundElement); // Output: 2 i.e. 4 and 5 

// 8. findIndex(): Returns the *index* of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
const foundIndex = Array1.findIndex((element) => element > 3);
console.log("Index of found element (greater than 3):", foundIndex);  // Output: 3 



// 9. filter(): Creates a new array containing all elements of the calling array which pass the test implemented by the provided function.
const filteredArray = Array1.filter((element) => element > 5);
console.log("Filtered array (greater than 5):", filteredArray); // Output: [] (empty array in this case)

// 10. forEach(): Executes a provided function once for each array element. (Does not return a new array.)
Array1.forEach((element) => console.log("Element:", element));

// 11. every(): Tests whether *all* elements in the array pass the test implemented by the provided function. Returns true or false.
const allGreaterThan0 = Array1.every((element) => element > 0);
console.log("All elements greater than 0:", allGreaterThan0); // Output: true

// 12. some(): Tests whether *at least one* element in the array passes the test implemented by the provided function. Returns true or false.
const someGreaterThan10 = Array1.some((element) => element > 10);
console.log("Some elements greater than 10:", someGreaterThan10); // Output: false



// 13. reduce(): Applies a function against an accumulator and each element of the array (from left to right) to reduce it to a single value.
const sum = Array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 is the initial value of the accumulator
console.log("Sum of array elements:", sum); // Output: 35

// 14. reduceRight(): Works like reduce() but from right to left.
const product = Array1.reduceRight(
  (accumulator, currentValue) => accumulator * currentValue,
  1
); // Initial value is 1 for multiplication.
console.log("Product of array elements:", product);

// 15. from(): Creates a new Array from an array-like or iterable object.
const arrayFromStr = Array1.from("hello");
console.log("Array from string:", arrayFromStr); // Output: ['h', 'e', 'l', 'l', 'o']

// 16. isArray(): Returns true if a variable is an array, false otherwise.
const isArray = Array1.isArray(Array1);
console.log("Is myArray an array?", isArray); // Output: true



// 17. of(): Creates a new Array instance from a variable number of arguments, regardless of number or type of arguments.
const newArray1 = Array1.of(1, 2, "hello", true);
console.log("New Array:", Array1); // Output: [1, 2, "hello", true]

// 18. fill(): Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
Array1.fill(0, 2, 4); // Fills with 0 from index 2 up to (but not including) 4
console.log("myArray after fill:", Array1); // Output: [1, 10, 0, 0, 5]

// 19. copyWithin(): Copies a sequence of array elements within the array.
Array1.copyWithin(0, 3, 5); // Copies elements from index 3 up to (not including) 5 to index 0.
console.log("myArray after copyWithin:", Array1); // Output: [0, 0, 0, 0, 5]



//----------Javascript Set and Map Operations-------------//
// Set (Unique values)
const uniqueValues = new Set([1, 2, 3, 2, 1]);
console.log(uniqueValues); // Output: Set { 1, 2, 3 }


//----------Javascript Date Methods  -------------//
const now = new Date();
console.log(now.toDateString()); // Output: Current full date in readable format
console.log(now.getFullYear());  // Output: Current year only
console.log(now.getMonth());     // Output: Month (0-based index)
console.log(now.getDay());       // Output: Day of the week (0 for Sunday)


// Map (Key-Value pairs)
const mapExample = new Map();
mapExample.set("name", "Dipak");
mapExample.set("age", 22);
console.log(mapExample.get("name")); // Output: Dipak
console.log(mapExample.get("age")); // Output: 22


//----------Javascript Error Handling-------------//
try {
  // Block of code to try do sth
  nonExistentFunction();
} catch (error) {
  // Handling error
  console.error("An error occurred:", error);
} finally {
  console.log("This block will alway execute no matter what");
}


//-----------Destructuring Assignment------------//
const human = { name: "Dipak", age: 22, city: "Mnr" };
const { name, age } = human; 
console.log(human, age); // Output: Dipak 22


//----------Javascript literals-------------//
const userName = "Dipak";
console.log(`Welcome, ${userName}!`); // Output: Welcome, Dipak!


//----------Javascript spread and rest operators-------------//
/* Spread Operator allows you to expand iterable objects
 (like arrays or strings) into individual elements */
const nums1 = [1, 2, 3];
const nums2 = [...nums1, 4, 5];
console.log(nums2); // Output: [1, 2, 3, 4, 5] 


// Rest Operator collects multiple arguments into an array
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


//----------Javascript Promises-------------//
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
};
fetchData().then((response) => console.log(response));


//----------Javascript Async/Await-------------//
async function fetchData() {
  try {
    const response = await fetchData();
      console.log(response);
    console.log(result);
  } catch (error) {
      console.error("Error:", error);
  }
}
fetchData();
