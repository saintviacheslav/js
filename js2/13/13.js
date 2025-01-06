let a = prompt("Enter value:")
if (!isNaN(a)){
   a=Number(a);
   switch (a){
      case 1:
         console.log("Very bad");
         break;
      case 2:
         console.log("Bad");
         break;
      case 3:
         console.log("Normal");
         break;
      case 4:
         console.log("Good");
         break;
      case 5:
      console.log("Perfect");
      break;
      default:
         console.log("try again")
   }
} else{
   console.log("error")
}