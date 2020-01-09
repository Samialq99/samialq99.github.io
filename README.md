# webdev

Javascript Interview questions 10 :
what is the difference between Let and Var ?
Let came in 2015 , Let has a block scope, will die at end block into garbage collection
var has function scope.
Var get's hoisted to top of its function.
if you declare using LET inside an if statement block, it wont exist after it, try to console.log and see error not defined.
but using Var it works fine outside of the function and gets HOISTED to top of function meaning it works even before where it was declared.
The difference between == and ===, double equal compares value, triple compares type and value.
example if ('1'==1) , this works value of both is 1. it converts to value prior
example if ('1'===1), this is false because its gonna say string Not equal to num.
let and const difference ? const you can't reassign after its constant.
if you declare a const array with 3 numbers you can add to it but not change whats already declared.
if you declare const c; // it will get undefined value and canNot be given a value later. like c=1; error
const c =[1,2]; c.push(3); console.log(c); this will work [1,2,3] you only added to object.
null and undefined, null you must assign manually, undefined is done by js and its called a placeholder.
typeof null = object, typeof undefined =undefined.

the Window object vs dom object..... this means instead of working with document.getelementbyid, which
works on html document object model, you can work on the browser window itself.
example : function changepage() {
window.location="index.html" // this will change location or URL attribute of window redircting us to another file
//must attach this fn to a button. like this in html
}
<button onclick="changepage()"> Press here to go to index page </button>

what is protype based inherticnce, every obj has a property called prototype
when you create an object it inherits its parents prototype.

function declaration vs function expression :
function funcD () { console.log('someting)} // this is a declaration
let funcD = function () {console.log('something')} // this stores the function in a variable thus
it is a function expression, also unlike the function declaration it has limited scope like a variable.
Important : when passing a function to another function, you cant pass a function declaration to another function, so you must use a variable = function()

what is promises ? its like wait() , in unix , its hard you need a tutorial on it.
setTimeout(); // this allows you to place a time for execution. must be in a function
setTimeout(function() {
console.log('a');
}, 0);  
console.log('b');
whats the output ? its gonna be b, then a, why when timeout is 0 ?
because as soon as you use settimeout it becomes asynchronous aka outside the stack and on its own.
so it will wait for all to execute first.

what is closure and how do you use it ? when a function returns another function, the returning function will keep its environment and variables.
