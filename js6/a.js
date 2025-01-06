// 1
// for (let i =0;i<101;i++)
//     console.log(i);

//2
// for (let i =10;i<21;i++)
//     console.log(i);


//3
// for (let i =10;i<21;i++){
//     if (i%3==0)
//         console.log(i);
// }

//4
// let c =[1,2,3,4,5,6,7,8,9]
// for (let i =0;i<c.length;i++)
//     console.log("Digit "+c[i]);

//5
// let c =[1,2,3,4,5,6,7,8,9]
// for (let i =0;i<c.length;i++){
//     if (c[i]%2==0)
//         console.log(c[i]);
// }


//6
// let c =[1,'hi',45,'dfgfd']
// for (let i =0;i<c.length;i++){
//     if (isNaN(c[i]))
//         console.log('Строка '+c[i]);
//     else
//         console.log('Число '+c[i]);
// }

//7
// let c ="111111111111"
// let res=0
// for (let i=0;i<c.length;i++){
//     res+=Number(c[i])
// }
// console.log(res)

//8
// let c =[1,2,3,4,5]
// let res=1
// for (let i=0;i<c.length;i++){
//     res*=Number(c[i])
// }
// console.log(res)


//9
// let c = prompt('Enter a value')
// for (let i = 1;i<=c;i++){
//     if (i%3==0)
//         console.log(i);
        
// }


//10
// let c = prompt('Enter a value')
// let arr = [1, 2, 3, 4, 5]
// for (let i = 1; i <= arr.length; i++) {
//     if (c == arr[i])
//         console.log('Число найдено');
// }

//11
// let c =[5, 12, 7, 9, 14] 
// let max = c[0]
// for (let i =1;i<c.length;i++){
//     if (c[i]>max)
//         max=c[i]
// }
// console.log(max);


//12
// const n =10;
// for (let i =0;i<n;i++)
// {
//     console.log(Math.random(0,100));
    
// }

//13
// const arr='ah'
// const n=3
// let res =''
// for(let i=0;i<n;i++)
//     res+=arr
// console.log(res);



//14
// const n= 7
// let res=''
// for(let i=0;i<n;i++)
//     res+='**********\n';
// console.log(res);
   



//15
const c="hello world";
const b =c.split(' ');
let res =''
for (let i=0;i<b.length;i++){
    if(b[i][0]==b[i][0].toLowerCase()){
        res= res+b[i][0].toUpperCase()+b[i].slice(1)+' ';
    }
}
console.log(res);

