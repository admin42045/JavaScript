/* Example of DOM
 * Select an individual element

function selectId(){
// select an individaual element and store into  a vaiable
var el =document.getElementById('one');

// change the value of class attribute
el.className ='cool';
}


// call selectId fun
selectId();


// select an individual element by querySelector()
function idSelByqueySe()
{
    var el=document.querySelector('li.hot');

    el.className = 'cool';
}


idSelByqueySe();


// select multiple elements
/* getElementsByClassName();
 * getElementsByTagName();
* querySelectorAll();

function funClassName()
{
    // find the class hot item
    var cl = document.getElementsByClassName('hot');

    //if 3 or more are found
    if(cl.length > 2){ // select the third one form the list
        // select the third one from the node list index starting from the 0
        var el=cl[2];
    el.className ='cool';
    }
}

funClassName();

// by this fun select all the attribute which is class name is hot
function selectHot()
{
    var el=document.getElementsByClassName('hot');
    if(el.length > 0)
    {
        var iel=el[2];
         iel.className= 'cool';
    }
}
selectHot();



function quSel()
{
// select multiple element by querySelectorAll();
var qs=document.querySelectorAll(li[id]);
qs.className='cool';
}

quSel();




function tagName(){
    // select the li tag and store into a variable
    var el=document.getElementsByTagName('li')

    // if 1 or more are found
    if(el.length > 0)
    {
        // select the first one and store into a variable
        var inl =el[1];
        inl.className='cool';
    }
}

tagName()


// by this fun select one or multiple
function sMul()
{
    // querySelector return onely one matches
    // after that store into a variable
    var el=document.querySelector('li.hot');

    // change the value of class attribute
    el.className='cool';

    // querySelectorAll() select the nodelist item
    var el1=document.querySelectorAll('li.hot');
    el1[1].className = 'cool';
}

sMul();

// for loop throw with querySelectorAll()

function loopFun()
{
    // select the node list item and store into  a vaiable
//    var el=document.querySelectorAll('li.hot');
//   var el=document.getElementsByClassName('hot');
//  var el=document.getElementsByTagName('li')


    // loop starting with 0 and also index number starting from the 0 so value fetch starting
    for(var i = 0; i<el.length; i++){
        var il=el[i];
        il.className='cool';
    }
}

loopFun();

 */

// Traversing element into nodelist item
/* parentNode();

 * previousSibling();
   nextSibling();
   firstChild();
   lastChild();

// function for sibling
function selectSibFun()
{
    // select the starting point and start it's sibling
    var startItem =document.getElementsById('two');
    var previousItem=startItem.previousSibling;
    var nextItem=startItem.nextSibling;

    // change the value of the prevous siblint and next sibling
    previousItem.className='complete';
    nextItem.className ='cool';
}

selectSibFun();


    // selet the starting point start it's point
  var startItem=document.getElementsByTagName('ul')[0];
    var firstItem=startItem.firstChild;
    var lastItem=startItem.lastChild;
    
    // change the  value of the
    firstItem.className= 'complete';
    lastItem.className= 'cool';



// Accessing & Update a text node update the text value


// get second list item
var el=document.getElementById('two');
// get its text content
var elText=el.firstChild.nodeValue;

// change pine nuts to kale
elText=elText.replace('pine nuts', 'kale');

// update the list item
el.firstChild.nodeValue=elText;





// get third list item
var el=document.getElementById('three');

// get it's text value
var elText=el.firstChild.nodeValue;

// change the text value
elText=elText.replace('honey', 'Honey');

// update the node list item
el.firstChild.nodeValue=elText;



// get the first list item
var  el=document.getElementById('three');

// get it's text value
var elText=el.firstChild.nodeValue;

// change the fresh figs to Fresh Figs
elText=elText.replace('honey', 'Fresh Figs');

// update the node list item
el.firstChild.nodeValue=elText;




// find the first list item
var firstItem=document.getElementById('one');
// get value of textContent
var firstTextContent=firstItem.textContent;

// get value of innner text
var firstinnerText =firstItem.innerText;

// 



function selectId(){
// select an individaual element and store into  a vaiable
var el =document.getElementById('one');

// change the value of class attribute
el.className ='cool';
}

selectId();

 */

function addED()
{
    // create a new element and store it in a variable
    var el=document.createElement('li');
    // create a text node and store it in a variable
    var elText=document.createTextNode('node text by nitin');
    //attached a new text node 
    el.appendChild(elText);

    // find the position where the new element should be added.
    var position=document.getElementsByTagName('ul')[0];

    // insert the new element into its position
    position.appendChild(el);


}

addED();




function removeElFun()
{
    // select the element which we want to remove and store  into the variable
    var removeEl=document.getElementsByTagName('li')[4];

    // Its containg element or root 
    var cEl=removeEl.parentNode;

    // removing the element
    cEl.removeChild(removeEl);


}

removeElFun();



















