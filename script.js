/*
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

// multi line commit
//byt it's line 

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



// round function 
document.getElementById("demo").innerHTML = Math.round(15.90);



// arrays
var cars = ["audi" , "Safari" , "Bulero"]; // array
document.getElementById("demo").innerHTML = cars[2];

// arrays - push(), shift(), unshift(), pop()

var fruits = ["apple", "pear", "mango" , "Oranger" , "pineappple" ,"gawava"]; //arrays
//fruits.pop();
//fruits.shift();
//fruits.push("Carrot");
//fruits.unshift();
document.getElementById("demo").innerHTML = fruits.join();


// javascript changing and deleting elements
var fruits = ["apple", "pear", "mango" , "Oranger" , "pineappple" ,"gawava"]; //arrays
//fruits.pop();
//fruits.shift();
//fruits.push("Carrot");
//fruits.unshift();

//fruits[0] = "kiwi";
//delete fruits[0];

document.getElementById("demo").innerHTML = fruits.join();



// splice in js
var fruits = ["apple", "pear", "mango" , "Oranger" , "pineappple" ,"gawava"]; //arrays
//fruits.pop();
//fruits.shift();
//fruits.push("Carrot");
//fruits.unshift();

fruits.slice(1,0, "Lemon" , "Banana");
document.getElementById("demo").innerHTML = fruits.join();



// sort in js
var cars = ["BMW", "Safari", "tata" ,"mahandra"];
cars.sort();
document.getElementById("demo").innerHTML = cars;




// concat in js
var cars = ["BMW", "Safari", "tata" ,"mahandra"];
var boys = ["Boby", "Sonu", "Targen"];
var combined = cars.concat(boys);
document.getElementById("demo").innerHTML = combined;





var mescore = 65;
if ( mescore < 40 )
{
    document.write("score greater than 40");
}
else if (mescore < 70 ){
    document.write(" score less than 70 ");
}
else if (mescore < 80 ){
    document.write(" score less than 80 ");
}

else if (mescore < 90 ){
    document.write(" score less than 90 ");
}
else {
   document.write("score must be less than of 100");
}





// js comparision
var x = 54;
document.getElementById("demo").innerHTML = (x == 54);

var b1 = Boolean(90);
var b2 = Boolean(2.86);
document.getElementById("demo").innerHTML = 
"90 is " + b1 + "<br>"+ "2.82 is " + b2 ;




for( var i = 0; i <= 10; i++){
document.write(i);
document.write(" <br />");

}

var i;
for( i = 0; i< 10; i++) {
    if( i === 3)
    {
        //break;
    }
    else {

    continue;
    }
    document.writeln(i+ "<br>");
}

// function in js

function add( a, b){
    return (a + b);
}
function mult( a, b){
    return (a * b);
}

function sub( a, b){
    return (a - b);
}
function divi( a, b){
    return (a / b);
}
function modu( a, b){
    return (a % b);
}
document.getElementById("demo").innerHTML = add( 6 , 23);
document.getElementById("demo").innerHTML = mult( 9 , 23);
document.getElementById("demo").innerHTML = sub( 7 , 23);
document.getElementById("demo").innerHTML = divi( 3 , 23);
document.getElementById("demo").innerHTML = modu( 7 , 23);

*/

// js event - mouse , mouseover, mousecut, key down
document.getElementById("demo").innerHTML = Date();










