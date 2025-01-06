let a = prompt("Enter value:")
// if (!isNaN(a)) {
//    let root = Math.sqrt(Number(a));
//    if (!Number.isInteger(root)){
//       root = Math.round(root);
//    }
//    console.log(root)
// } else{
//    console.log("Error")
// }

if (!isNaN(a)) {
   let root = Math.sqrt(Number(a));
   !Number.isInteger(root)?console.log(Math.round(root)):console.log(root)
} else{
   console.log("Error")
}