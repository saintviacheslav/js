let a = prompt("Enter value:")
if (!isNaN(a)){
   a=Number(a);
   switch (a){
      case 1:
         console.log("Winter");
         break;
      case 2:
         console.log("Spring");
         break;
      case 3:
         console.log("Summer");
         break;
      case 4:
         console.log("Autumn");
         break;
      default:
         console.log("try again")
   }
} else{
   console.log("error")
}