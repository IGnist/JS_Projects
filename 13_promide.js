const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("done");
        },1000)
})
promiseone.then(function(){ 
    console.log("asyn done");
})