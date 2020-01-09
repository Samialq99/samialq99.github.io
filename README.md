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
