let v1 = prompt("Enter first speed")
let v2 = prompt("Enter second speed")
let s = prompt("Enter distance")

if (!(isNaN(v1)) && !isNaN(v2) && !isNaN(s)){
   console.log(Number(s)/(Number(v1)+Number(v2)),"часа")
} else{
   console.log("error")
}