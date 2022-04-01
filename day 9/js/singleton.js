class admin{
    
    constructor(uname,password){
        
     if(admin.privateinstance){
         return admin.privateinstance
      //   throw new Error("only one object can be created")
     }
     admin.privateinstance=this//2004
        this.uname=uname
        this.password=password
        
    }
}
let obj1=new admin("admin","test123")//2004
//let obj2=new admin("admin12","test123")
//obj1=new admin("admin12","test345")
obj1.uname="john"
console.log(obj1.uname)
console.log(obj1.uname)
/*console.log(obj1.uname)
console.log(obj2.uname)*/
//console.log(obj1===obj2)


