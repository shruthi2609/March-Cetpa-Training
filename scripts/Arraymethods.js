/*let users=["John","Peter","Mary"]
users.push("Henry")
users.push("Pete")
console.log(users)
res=users.pop()
console.log("the recent user is removed",res)
let users=["John","Peter","Mary"]
users.shift()
users.unshift("XYZ")
console.log(users)
users.map((user,uid,third)=>console.log(user,third))
let users=["John","Peter","Mary","John"]
const res=users.find((item,index)=>item==="John")
const res1=users.findIndex((item)=>item==="John")
const res2=users.filter((item)=>item==="John")
console.log(res2.length)*/
let user_data=[
    {
        username:"john",
        age:29,
        cgpa:9.0,
        interest:["react js","js"]
    } ,
    {
        username:"henry",
        age:28,
        cgpa:9.2,
        interest:["react js","js","node js"]
    },
    {
        username:"henry",
        age:30,
        cgpa:8.5,
        interest:["react js","js","express"]
    }
]
/*function getDetails(uname)
{
    let res_arr=[];
for(i=0;i<user_data.length;i++){
    if(user_data[i].username===uname)
    {
    res_arr.push(user_data[i])
    }
}
return res_arr
}
const response=getDetails("henry")
console.log(response)
user_data.map((item)=>console.log(item))
const res=user_data.find((item)=>item.username==="henry"&&item.cgpa===8.5)
const res=user_data.filter(
    (item)=>{
        item.username==="henry"
    }
)
console.log(res)
let users=["john","peter"]
users.forEach((item,index)=>console.log(item,index))
let user={
    username:"henry",
    age:30,
    cgpa:8.5,
    interest:["react js","js","express"]
}
console.log(Object.keys(user))
console.log(Object.values(user))
for(let value of Object.values(user)){
   if(value==="henry"){
       console.log(value)
   }
}*/






