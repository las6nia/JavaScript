//JS output - purpose is to run a code for us to see
function output(){
    console.log("This is an output")
}

//JS statement - purpose is to give value to a variable 
//Practice the keywords such as switch, for, function, return, try - https://www.w3schools.com/js/js_statements.asp
function statements(){
    let x = 5;
    let y = 7; 
    console.log(x+y+" - let x=5,y=7 console.log(x+y)-This is a statement")
}

//syntax - 21 meme - 
function syntax(){
    let x,y;
    x = 9+10;
    y = x+2
console.log("this the addition of let x,y; x = 9+10, y=-2 (21 meme) = " + y)
console.log("//this will result in error if i delete commas around this text")
}

//Js variables - assigning variables for an array of 
// numbers, getting those numbers and adding them
function variables(){
    console.log("this will perform this addition by adding a list of operations: ")
    let x,y,a,b,c,e,z;
    x = 5;
    y = 2;
    a = -1;
    b = -1;
    c = 0;
    e = 2;
    z = 10; 
console.log("this is option 1 and should equal: 12 == " + (x+y+5+c))
console.log("this is option 2 and should equal: 0 == " + (a+b+c+e))
console.log(" this is option 3 and should equal: 13 == " + (x-y+z))
}

//JS functions -  
/*function functions(){
    return p1*p2
  let result = 
*/

//Js Objects - this will allow properties to be added onto
//onto a variable - DO NOT MIX WITH ARRAYS, OBJECTS HAVE A {} AND 
// ARRAYS HAVE A CONST LIST =[LONG,TIRING,ECT.]. 
function Objects(){
    console.log("this will print the value of the const person = {color: {name}which in \nthis case would be 'black; + others like person.age")
    const person = {
        color : "Brown", 
        race:"Hispanic", 
        age:15 
    }
    console.log(person.color +", " + person.age +", "+ person.race )
}


//this constructor of a new person will take the original "recipe"
//and use it downt the road by assigning a new constant using
//const collegestudent = new student ("Luis",21,"A","Computer Science","Software Engineer")
function constructors(){
    function student (first,age,grade,major,interest){
        this.first_name = first;
        this.age = age;
        this.grade = grade;
        this.major = major;
        this.interest = interest
      }  
const collegestudent = new student ("Luis",21,"A","Computer Science","Software Engineer")

console.log(collegestudent.major + " - (new person student = collegestudent example - practice!)")
}

function events(){
    const now = new Date()
    //need assistance getting this to work**//
    
    console.log("Time:", now.getMinutes()+now.getDate);
}
    












/*let str = "Hello JavaScript";
console.log(str.length);             // Length
console.log(str.slice(0, 10));        // Slice
console.log(str.substring(1, 6));    // Substring
console.log(str.toUpperCase());      // TO UPPERCASE
console.log(str.toLowerCase());      // TO LOWERCASE - which letters?
console.log(str.trim());             // Trim spaces
console.log(str.replace("Java", "Type"));  // Replace - how to add more
console.log(str.split(" "));         // Split into array
*/


/*
let msg = "Welcome to JavaScript!";
console.log(msg.indexOf("to"));      // 8
console.log(msg.lastIndexOf("a"));   // 14
console.log(msg.search("Java"));     // 11
console.log(msg.match("Java"));      // Match single
console.log([...msg.matchAll(/a/g)]);// MatchAll with spread
console.log(msg.startsWith("Wel"));  // true
console.log(msg.endsWith("!"));      // true
*/


/*
let num = 123.456;
console.log(num.toString());        // "123.456"
console.log(num.toExponential(2));  // "1.23e+2"
console.log(num.valueOf());         // 123.456
*/


/*
console.log(Number.NaN);            // Not a Number
console.log(Number.MAX_VALUE);      // Largest possible number
console.log(Number.MIN_VALUE);      // Smallest positive number
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
*/


/*
let arr = ["apple", "banana", "cherry"];
console.log(arr.length);              // 3
console.log(arr.toString());          // "apple,banana,cherry"
console.log(arr.join(" - "));         // "apple - banana - cherry"
console.log(arr.pop());               // Removes "cherry"
console.log(arr.push("date"));        // Adds "date"
console.log(arr);                     // ["apple", "banana", "date"]
*/

/*
let arr = ["apple", "banana", "cherry"];
arr.shift();                          // Removes "apple"

arr.unshift("kiwi");                  // Adds "kiwi" at start
let newArr = arr.concat(["grape"]);   // Combine arrays
console.log(arr.slice(0, 2));         // Slice of array
*/


/*
let nums = [3, 1, 7, 5];
nums.sort((a, b) => a - b);          // Sort numbers ascending
console.log(nums);

let names = ["Bob", "Alice", "Eve"];
names.sort();                        // Alphabetical
console.log(names);
*/

/*
let d = new Date();
console.log(d.toDateString());       // Short format
console.log(d.toString());           // Long format
*/

/*
console.log(Math.round(4.6));        // 5
console.log(Math.ceil(4.1));         // 5
console.log(Math.floor(4.9));        // 4
*/


/*
console.log(Boolean(0));             // false
console.log(Boolean(1));             // true
console.log(Boolean(""));            // false
console.log(Boolean("Hi"));          // true
*/




let age = 21;
if (age < 18) {
  console.log("Minor");
} 

else if (age == 18){
console.log("Barely an official adult");
}

// this is a code to add one to age.
else if (age >+1){
    console.log("almost there")
}
//fix!!!
else if (age===21){
  console.log("Adult");
}

switch (age) {
  case 18:
    console.log("Just adult");
    break;
  case 20:
    console.log("20 years old");
    break;
  default:
    console.log("Other");
}



/*
let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let color of colors) {
  console.log(color);
break;
}

*/

/*
let i = 0;
while (i < 2) {
  console.log("While loop", i);
  i++;
}

do {
  console.log("Do While", i);
  i--;
} while (i > 0);
*/