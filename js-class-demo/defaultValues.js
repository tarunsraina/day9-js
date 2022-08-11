
function multiply(a,b=1){
    return a*b;
}

console.log(multiply(5,5));
console.log(multiply(5));  // b param missing , so multiplies 1 with default value


function add(a,b=0){
    return a+b;
}

console.log(add(5,6));
console.log(add(8));  // b param missing , so adds 0 with default value