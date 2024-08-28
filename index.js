// Iteration 1: Names and Input

let hacker1 = "Albert";
console.log("the drivers name " + hacker1);

let hacker2 = "Alberto";

console.log("the navigators name is " + hacker2 );



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){

    console.log("the drivers has the longest name, it has " + hacker1.length + " characters");
    
}
    
if(hacker1.length < hacker2.length){
   
    console.log("It seems that the navigators has the the longest name, it has " + hacker2.length + " charaters " );
}

if(hacker1.length === hacker2.length){
    console.log("wow you both have equaly long names " + hacker1 + " charaters")
}
// Iteration 3: Loops




let result = "";
let nombre ;

//nombre = hacker1.toUpperCase();

for(let i = 0; i < hacker1.length; i++){
    result = result + hacker1[i].toUpperCase() + " ";
}


console.log(result); -1


let resultado = "";

for(let i = 0; i < hacker2.length; i++ ){
resultado = resultado + hacker2[hacker2.length -1 -i];

}
console.log(resultado);
console.log(hacker2.length);