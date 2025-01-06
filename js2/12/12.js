let a = prompt("Enter value:")
let b = prompt("Enter value:")
if (!isNaN(a)&&!isNaN(b)) {
   console.log("I'm",Number(a)+Number(b))
} else{
   console.log("error")
}