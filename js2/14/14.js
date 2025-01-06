let a = prompt("Enter value:")
let b = prompt("Enter value:")
let c = prompt("Enter value:")
if (!isNaN(a)&&!isNaN(b)&&!isNaN(c)) {
   a=Number(a)
   b=Number(b)
   c=Number(c)
   if(a+b>c && a+c>b && b+c>a){
      if(a===b && a===c && b===c){
         console.log("Perfect triangle")
      } else if((a===b)||(b===c)||(a===c)){
         console.log("isosceles triangle")
      }else{
         console.log("versatile triangle")
      }
   }else{
      console.log("doesn't exist")
   }
} else{
   console.log("error")
}