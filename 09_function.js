function sum(num1,num2){
    return(num1+num2)
}
console.log(sum(5,15))
console.log(sum(3,"86"));
console.log(typeof (sum(3,"86")));
function Welcome(Username){
    if(!Username){
        console.log(`Welcome Ignist`);
        return;
    }
    console.log(`welcome ${Username}`)
}
Welcome()
function Looping(val1,val2,val3,...Num1){
    return Num1
}
console.log(Looping(20,50,70,60,80))

//object
const Point={
    Name:"Sandeep",
    Age:22,
    size:"M"
}
function Objectpas(Pointless){
    console.log(   `welcome ${Pointless.Name} i know your age is ${Pointless.Age} and your shirt size is ${Pointless.size}`)
}
Objectpas(Point);
Objectpas({
    Name:"Ignist",
    Age:5,
    size:"xxl"});

Array1=[22,55,88,99]    

function ArrPas(Sum1){
    return Sum1[0]
}
console.log(ArrPas(Array1))