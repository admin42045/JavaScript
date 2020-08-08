// 01 chap // and javascript can use in three types - 1-Internal , 2-Inline  , 3-External



// 1-Internal style




// 2-Inline

// External style
document.getElementById("one").innerHTML = "External style of JavaScript";

// output of js
document.getElementsByClassName("output").innerHTML = "Java script output here!";

// innerHTML 
document.getElementsById("innerhtml").innerHTML = "InnerHTML Example";


// commiting in javascript
// single line commit

/* multi line commit
byt it's line */

document.getElementsByClassName("math").innerHTML = "constants in js";

// variables
var x = 3;
var y = 5;
var z = x + y;
alert(z);


// javascript assignment overatop
var Asl = 39 + "thirty nine";
document.getElementsByTagName("Asl").innerHTML = asl;


var num1 = 3;
var num2 = 3;
var num3 = num1 + num2;
document.innerHTML(num3);

// javascript data types - num , string,  array, object

var age = 29;
var lastname = "Kumar";
var cars = ["audi" , "Safari" , "Bulero"]; // array
var person = {firstname: "Nitin" , lastname: "Kumar" , age: 23, gender:"male"}; // objec:t



// object
var cars = {type: "Acura" , model: "Integra" , color: " white"};
document.getElementById("demo").innerHTML = cars.type;


// object output
var cars = {type: "Acura" , model: "Integra" , color: " white"};
document.getElementById("demo").innerHTML = cars.type + " is" + cars.color;


// javascript strings
var studentname1 = "Nitin Kumar";
var studentname2 = "rohit Gautam Kumar";
document.getElementById("demo").innerHTML = studentname1 + "<br>" + studentname2;

// javascript strings length
var studentname1 = "Nitin Kumar";
var studentname2 = "rohit Gautam Kumar";
document.getElementById("demo").innerHTML = studentname1.length; 


// special character
var spec = "We are the best'players' in the world"
document.getElementById("demo").innerHTML = spec;


// random number in js
document.getElementById("demo").innerHTML = Math.random();



// math min , max
document.getElementById("demo").innerHTML = Math.max(23,232,232,32,3343,54);

// math min , max
document.getElementById("demo").innerHTML = Math.min(23,232,232,32,3343,54);
