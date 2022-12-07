function sum(array){
    return array.reduce((acc,x)=>acc+x);
}
let a=[1,2,3,4];
console.log(sum(a));
function multiply(array){
    return array.reduce((acc,x)=>acc*x);
}
console.log(multiply(a));

function reverse(str){
 let arr=str.split('');
 return arr.reduce((y,elem)=>elem+y);
}
console.log(reverse("Gilbert"));

function filterLongWords(arr,x){
    return arr.filter(a=>a.length>x);
}
console.log(filterLongWords(["Haftish","Haftisknenfw","Haftihjoije"],6));