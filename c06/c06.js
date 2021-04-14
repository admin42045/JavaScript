/*
// Event listeners

// declare a function
function checkUsername()
{
    // fetch the feedback element
    var elMsg=document.getElementById('feedback');
    // If username is short
    if (this.value.length < 5)
    {
       elMsg.textContent = 'Username must be 5 character or more';
    }
    else
    {
        elMsg.textContent = '';
    }

}

// select an element and store into a variable
var el=document.getElementById('username');
el.addEventListener('blur', checkUsername, false);



*/


// using parameters with event listeners

// fetch the username id
var elUsername=document.getElementById('username');

// fetch the feedback id
var elFeedback=document.getElementById('feedback');


// define the function
function checkUsernamePara(minLength){
   // if the user enter the value of less then 5
   if(elUsername.value.length < 5){
       elFeedback.textContent='User must be at least ' + minLength + ' input character';
   }   
   else{
       elFeedback.textContent= ' ';
   } 
}

// call the function
elUsername.addEventListener('blur', function(){
    checkUsernamePara(5);
}, true);

