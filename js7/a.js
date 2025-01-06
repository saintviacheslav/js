//1
// for (let i =0;i<101;i++){
//     if (i%7==0)
//         continue
//     console.log(i);

// }

//2
// for (let i =0;i<51;i++){
//     if (i%6==0)
//         continue
//     console.log(i);

// }

//3
// for (let i = 1; i < 101; i++) {
//     if (i % 63 == 0)
//         break
//     console.log(i);
// }

//4
// for (let i = 1; i < 101; i++) {
//     if ((i % 4 == 0)&&(i % 8 != 0))
//         continue
//     if (i % 10 == 0)
//         break
//     console.log(i);
// }


//5
// const c = [5, "hello", 15, "world", 25, 3, "test"]
// for (let i = 0; i < c.length; i++) {
//     if (isNaN(c[i]))
//         continue;
//     if (c[i] < 10)
//         console.log('Маленькое число');
//     else if (c[i] > 10 && c[i] < 20)
//         console.log('Среднее число');
//     else
//         console.log('Большое число');

// }

//6
// let c = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4]
// let res = 0
// for (let i = 0; i < c.length; i++)
//     switch (c[i]){
//         case 5:
//             res += 1
//             break;
//         case 4:
//             res += 0
//             break;
//         case 3:
//             res += 0
//             break;
//         case 2:
//             res += 0
//             break;
//         case 1:
//             res += 0
//             break;
//     }
// console.log(res)

//7
// const c =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
// "Saturday", "Sunday"]
// for (let i =0; i<c.length;i++){
//     switch (c[i]){
//         case 'Monday':
//             console.log(c[i]+' Будний');
//             break;
//         case 'Tuesday':
//             console.log(c[i]+' Будний');
//             break;
//         case 'Wednesday':
//             console.log(c[i]+' Будний');
//             break;
//         case 'Thursday':
//             console.log(c[i]+' Будний');
//             break;
//         case 'Friday':
//             console.log(c[i]+' Будний');
//             break;  
//         case 'Saturday':
//             console.log(c[i]+' Выходной');
//             break; 
//         case 'Sunday':
//             console.log(c[i]+' Выходной');
//             break;  
//     }
// }


//8
// const c =[2, 4, 6, 8, 10]

// let res1=0
// let res2=0
// for (let i =0;i<c.length;i++)
// {
//     if(c[i]%2==0)
//         res1+=1;
//     else
//         res2+=1

// }
// console.log('Чётные: '+res1+'\n')
// console.log('Нечётные: '+res2+'\n')

//9
// const c ="JavaScript is awesome!"

// let res1=0
// let res2=0
// for (let i =0;i<c.length;i++)
// {
//     if(c[i]!=' ')
//         res1+=1;
// }
// console.log('Symbols count: '+res1+'\n')

//10
// const c =[2, 4, 5, 7, 10]

// let res1=0
// let res2=0
// for (let i =0;i<c.length;i++)
// {
//     if(c[i]%3==0)
//         res1+=c[i];
// }
// console.log('3rds count: '+res1+'\n')

//11
// const c ="Hello!"
// const a ='aeiou'
// let res1=0
// let res2=0
// for (let i =0;i<c.length;i++)
// {
//     if(a.includes(c[i]))
//         res1+=1;
// }
// console.log('aeiou count: '+res1+'\n')

//12
// const c ="Hello"
// const a ='aeiou'
// let res1=0
// let res2=0
// for (let i =0;i<c.length;i++)
// {
//     if(!a.includes(c[i]))
//         res1+=1;
// }
// console.log('aeiou count: '+res1+'\n')

//13
const c = [-1, -2, -3, -4, -5]
let res1=0
let res2=0
for (let i =0;i<c.length;i++)
{
    if(c[i]<0)
        continue
    res1+=c[i]
}
console.log('aeiou count: '+res1+'\n')