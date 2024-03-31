let Tinder=new Object()
Tinder.id="1278"
Tinder.name="sandy"

console.log(Tinder)

let profile={
    age:22,
    user:{
        fn:"Sandeep",
        lastname:{
            ln:"kumar"
        }
    }
}
console.log(profile.user.lastname.ln)
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3={7:"g",8:"h",9:"i"}
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)
const user1=[
    {
        uid:1,
        email:"sk@gmail.com"
    },
    {
        uid:1,
        email:"sk@gmail.com"
    },
    {
        uid:1,
        email:"sk@gmail.com"
    }
]
console.log(Tinder.id)
console.log(Object.keys(Tinder))
console.log(Object.values(Tinder))

const Boli = {
    Name1 :"Sandeep",
    Age:22,
    Price:1000000

}
const {Name1: N}=Boli
console.log(N)