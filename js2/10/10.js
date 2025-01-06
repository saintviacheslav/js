let a = prompt("Enter value:")
if (!isNaN(a)) {
   console.log(Math.floor(Number(a)/100))
} else{
   console.log("error")
}