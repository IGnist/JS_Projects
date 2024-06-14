class user{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`USERNAME IS ${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`This course was access by ${this.username}`);
    }

}

const ram=new teacher("sandy","sandy@gmail.com","123")
ram.addCourse();
ram.logme()
const tea=new user("sandeep");
tea.logme();
console.log(ram  instanceof user);
