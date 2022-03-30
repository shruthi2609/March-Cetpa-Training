//array destructing
/*let coursedetails=["React",12000,"xyz","mateials","duration"]
let [cname,cprice,cauthor,...addons]=coursedetails
console.log(cname)
console.log(cprice)
console.log(cauthor)
let [materials,duration]=addons
console.log(materials)
//object destructing
let user={
    username:"john",
    role:"admin",
    logincount:250
}
let {username,role,logincount}=user
console.log(username)
console.log(role)
console.log(logincount)
let user={
    username:{
        fname:"john",
        lname:"henry"
    },
    role:"admin",
    logincount:250
}*/
/*let {username:{fname,lname}}=user
console.log(fname)
console.log(lname)
let {username:{fname,lname},role,logincount}=user
console.log(fname)
console.log(logincount)
let {fname,lname}=user.username
console.log(fname)*/

//using rest and spread with functions
function displaydetails(uname,role,count,...addons){
    console.log(addons)
    console.log(uname)
    console.log(role)
    console.log(count)
}
let data=["john","admin",250,"add1","add2","add3"]
//displaydetails(data[0],data[1],data[2])
displaydetails(data)//spread
/*let userdata=["data1","data2","data3"]
let x,y,z=userdata
console.log(x)
console.log(y)
console.log(z)*/







