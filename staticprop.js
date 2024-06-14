class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username: ${this.username}`);
        user.createID();
    }
    static createID(){
        console.log( `${Math.floor(Math.random()*10+1)}`);
        }
}
const sandy=new user("Saloni")
// console.log(sandy.createID());
class teach extends user{
    constructor(username,email){
        super(username)
        this.email=email;

    }

}

const me=new teach("Pinky","pinkypu@gmail.com")
me.logme()

// user.createID();
// teach.createID();