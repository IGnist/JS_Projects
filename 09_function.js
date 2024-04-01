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