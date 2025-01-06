//1
// for(let i=0;i<51;i++){
//     console.log(i);
    
// }
// let i =0
// while(i<51){
//     console.log(i);
//     i++
// }

//2
// let c = [1,23,4,5]
// let i =0
// while(i<c.length){
//     console.log(c[i]);
//     i++
// }
// for (let i = 0;i<c.length;i++){
//     console.log(c[i]);
    
// }
// for (let i of c){
//     console.log(i);
    
// }


//3
// let c = [2,3,4,5]
// let res=1
// let i =0
// while(i<c.length){
//     res*=c[i]
//     i++
// }

// for (let i = 0;i<c.length;i++){
//     res*=c[i];
    
// }
// for (let i of c){
//    res*=i
    
// }
// console.log(res);

//4
// let i=11
// while(i<34){
//     console.log(i);
    
//     i++
// }

//5
// for(let i =0;i<101;i++){
//     if (i%2==0)
//         console.log(i);
        
// }

//6
// const c = [1,2,3,4,5]
// res=0
// for (let i of c){
//     res+=i
// }
// console.log(res);

//7
// const c = [2, 5, 9, 15, 0, 4]
// res=0
// for (let i of c){
//     if (i%3==0)
//         console.log(i);
// }

//8
// const isx=["apple", 3, "orange", 2] 
// let c =[]
// for (let i of isx){
//     if (!isNaN(i))
//         c.push(i)
// }
// console.log(c);


//9
// const c = [2, 5, 9, 15, 0, 4]
// let i = 0
// while (i<c.length){
//     if (c[i]%3==0||c[i%5==0])
//         console.log(c[i]);
//      i++   
// }

//10
// const c= [-1, 2, 3, -4, 5]
// res=0
// for (let i of c){
//     if (i>0)
//         res+=i
// }
// console.log(res);


//11
// const c= [1, 2, 2, 3, 4, 4, 3, 4, 5] 
// let news =[]
// for(let i=0;i<c.length;i++){
//     if(!news.includes(c[i])){
//         console.log(c[i]);
//         news.push(c[i])
//     }
// }
// console.log(news)

// for(let i of c){
//     if(!news.includes(i)){
//         console.log(i);
//         news.push(i)
//     }
// }
// console.log(news)

//12
// const c = [3, 4, 7, 8, 9] 
// let news = []
// for(let i=0;i<c.length;i++){
//     if(String(c[i]).startsWith('1')||String(c[i]).startsWith('2')||String(c[i]).startsWith('5')){
//         console.log(c[i]);
//         news.push(c[i])
//     }
// }
// console.log(news)

//13
// const c = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let s='-'
// for (let i=0;i<c.length;i++){
    
//     s+=String(c[i])
//     s+='-'
// }
// console.log(s);


//14
// let news = []
// for (let i=1;i<101;i++){
//     if (i%7==0)
//         news.push(i)
// }
// console.log(news);

//15
// const n =3
// const s ='JavaScript'
// let news = ''
// for (let i=0;i<n;i++){
// news+=s
// news+=' '
// }
// console.log(news);

//16
// let c = 113355
// c= String(c)
// let a =c.split('')
// let s = String(a[0])
// for (let i=0;i<a.length-1;i++){
//     if(a[i]%2==1 && a[i+1]%2==1){
//         s+=':'
//         s+=String(a[i+1])
//     }else s+=String(a[i+1])
// }
// console.log(s);


//17
let i =1
res =0
while (i<101){
    res+=i
    i++
}
console.log(res);
