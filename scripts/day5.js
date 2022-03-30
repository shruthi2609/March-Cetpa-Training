/*cURRYING
function greet(){
    let message="hello"
    function sayHello(){
       function sayMessage(){
           console.log(message)
       }
       sayMessage()
    }
    sayHello()
}
greet()*/

//Map and sets
/*let map=new Map([
    ["username","john"],
    [23,"age"],
    [true,"arrears"]
])
map.set("username","john")
map.set(23,"age")
map.set(true,"arrears")

console.log(map.get("username"))
console.log(map.get(23))
console.log(map.get(true))

console.log(map.has("age"))
console.log(map.delete(23))
console.log(map.get(23))
console.log(map.size)
for(let item of map.keys()){
    console.log( item)
    //console.log(typeof item) -> data types are preseved
}
let users=new Set()
let john={
    username:"john",
    role:"admin"
}
let peter={
    username:"peter",
    role:"trainee"
}
users.add(john)
users.add(peter)
users.add(john)

/*for (let user of users){
    console.log(`${user.username} is a ${user.role}`)
}
let new_user=new Array(users)
new_user[0].map((item)=>console.log(item))
let s1=new Set()
s1.add(1)
s1.add(2)
s1.add(3)
s1.delete(1)
for (let i of s1){
    console.log(i)
}
console.log(s1.has(1))*/

//OBJS
/*class User{
constructor(fn,age,mobile){
this.fname=fn
this.age=age
this.mobile=mobile
}
getDetails(){
console.log(`${this.fname} is ${this.age} - Contact no is ${this.mobile} `)
}
}
class Student extends User{
    constructor(fn,ln,age,mob,cgpa,placed){
        super(fn,age,mob)
        this.fname=ln
        this.cgpa=cgpa
        this.placed=placed
    }
    getDetails(){
        super.getDetails()
        if(this.placed){
            console.log(`congrats ${this.fname} you have been selected`)
        }
       
    }
}
let john=new Student("john","peter",23,90000020202,9.0,true)
console.log(john)

function User(fn,age,mob){
    this.fname=fn
    this.age=age
    this.mobile=mob
    }
    User.prototype.getDetails=function(){
        console.log(`${this.fname} - contact ${this.mobile}`)
    }
    function Student(fn,age,mob,cgpa,placed){
        User.call(this,fn,age,mob)
        this.cgpa=cgpa
        this.placed=placed
    }
    Student.prototype.getPlacedDetails=function(){
        if(this.placed){
            console.log(`your ${this.cgpa} - is shortlisted`)
        }
    }
    /*Student.prototype=Object.create(User.prototype)
    Student.constructor=Student()
    let john=new Student("john",23,988232,9.0,true)
    console.log(john.fn)*/
//promises and promise chaining

let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("success"))
  //  setTimeout(()=>reject(new Error("not done")),3000)
})
promise.then((res)=>console.log(res)).catch((err)=>console.log("some errror occured")).finally(()=>console.log("done"))

// task 3.1 please go through array destructing and rest paramaters in functions (tought of covering now not able to do coz of audio issues)

// task 3.2 classes and obj task (Js level 3.pdf)

// task 3.3 - arrays and string methods task 

//try to complete these 3 tasks for today , also practice on maps and sets.

//is it fine guys? if you have any qns with 3.1 i will discuss again it tmro , but just try to do a pre-read on that topic.


//alright guys , thanks :D

// see you tmro , take care.
// level 5 based on dom methods , you will do tmro
//pushed the code an task please have a look.

// thank you guys , bye :D




    
    
    
    
    
    
    
    
    
    