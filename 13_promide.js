const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("done");
        resolve()
        },1000)
})
promiseone.then(function(){ 
    console.log("asyn done");
})
new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log("Asyn task 2")
        resolve();
        
    },1000)
}).then(function(){
    console.log("promise 2 consumed");
})

const promisethree =new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve({username: "Sandeep",Email:"sks@gmail.com" })
    },0)
})
promisethree.then(function (p) {
    console.log(p);
})

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(function(){
        const status=true;
        if(!status){
        resolve({user:"manglam",id:"2002"})
        }
        else{
            reject("Oh hell no")
        }
    },1000)
})
promiseFour.then(function(e){
    console.log(e);
    return e.user;
}).then((w)=>console.log(w) ).catch(
    function(e) {
        console.log(e);
    }
).finally(function(){
    console.log("hogya jo hona tha");
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        const status=true;
        if(!status){
        resolve({user:"bhagwan",id:"5005"})
        }
        else{
            reject('5th Error')
        }
    },1000)
})
async function consuming(){
    try {
        const response=await promiseFive
        console.log(response)
    } catch (err) {
        console.log(err);
    }
    
}
consuming()


// async function consumption(){
//     try {
//         const responsive=await fetch('https://jsonplaceholder.typicode.com/users')
//         const Data=await responsive.json()
//         console.log(Data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }
// // consumption();
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((response)=> console.log(response))
.catch((error)=> console.log('Error'))