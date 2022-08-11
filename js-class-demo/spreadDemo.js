



let numbers = [2,4,6]

function getSum(x,y,z){
    return x+y+z;
}

console.log(getSum(...numbers))

let arr1 = [1,2,3];
let arr2 = [4,5,6,7,8,9];

let arr = [...arr1,...arr2];
console.log(arr);

getAllSum(1,2,3,4,5,6,7,8,9,0,11,22,33,332)
function getAllSum(...num){
    console.log(num);
}

printSomething(0,0,1,1,1,1,1,1,1,1)
function printSomething(x,y,...num)
{
    console.log(num)
}