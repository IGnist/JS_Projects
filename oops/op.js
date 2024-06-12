// const username="SANDY";
// const user={
//     username:"sandeep",
//     logiCount:2,
//     singedIn:true,

//     getUserDetails:function(){
//         console.log(this.username);
//     }
// // }

// console.log(user.username);
// console.log(user.getUserDetails());

function user(username,loginCount,islogin) {
    this.username = username ;
    this.loginCount=loginCount;
    this.islogin=islogin;

    this.getting=function(){
        console.log(`welcome ${username}`);
    }

    return this
    //writing return this is not necessary its will default return all members
}
     const obj1=new user("sandeep",2,"yes");
     const obj2=new user("sandy",3,"No");

     console.log(obj1);
     console.log(obj2.getting());


