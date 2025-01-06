let a = prompt("Enter:");
// !isNan(a) ? (Number(a) >= 0) ? console.log("Число", a, "положительное") : console.log("Число", a, "отрицательное") : console.log("Error")

if (!isNaN(a) && a>=0){
   console.log("Число", Number(a), "положительное")
} else if(!isNaN(a) && a<0){
   console.log("Число", Number(a), "отрицательное")
}else{
   console.log("Error")
}