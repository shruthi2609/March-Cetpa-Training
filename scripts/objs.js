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
console.log(john)*/

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
Student.constructor=Student()*/
let john=new Student("john",23,988232,9.0,true)
console.log(john.fn)









