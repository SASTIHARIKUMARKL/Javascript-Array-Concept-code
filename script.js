// Array creation and initialization - program 01
let num=["one","two","three","four","five"];
document.write(num);

//Array Manipulation - program 02
let fruits=["Apple","Orange","Grapes"];
console.log(fruits);
fruits.push("Mango"); // add element by push
console.log(fruits);
fruits.shift("Grapes"); //remove element by shift
console.log(fruits);

//Array searching - program 03
let text=["hai","hello","good","day"];
console.log(text.indexOf("good")); //searching array element by indexOf

const age=[20,22,35,40,32];
function check(age){
    return age>20;
}
console.log(find(check));



//Array mapping - program 05
const value=[10,15,8,6,14];
const val=value.map(Math.sqrt);
console.log(val);

//Array sorting - program 06
const user=["name","email","phone"];
user.sort();     //sort()
console.log(user);
const number=[5,7,2,9,4];
number.reverse();  //reverse()
console.log(number);

