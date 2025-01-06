let a = prompt("Enter value:")
if (!isNaN(a) && Number(a) != 0) {
   console.log(Number(1/Number(a)))
} else if (a==0){
   console.log("Doesn't exist")
} else{
   console.log("error")
}