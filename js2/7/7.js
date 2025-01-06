let a = prompt("Enter value:")
if (!isNaN(a)){
   a=Number(a);
   switch (a){
      case 1:
      case 2:
      case 12:
         console.log("Winter");
         break;
      case 3:
      case 4:
      case 5:
         console.log("Spring");
         break;
      case 6:
      case 7:
      case 8:
         console.log("Summer");
         break;
      case 9:
      case 10:
      case 11:
         console.log("Autumn");
         break;
      
   }
} else{
   console.log("error")
}