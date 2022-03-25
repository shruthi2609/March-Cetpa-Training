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
const jsonres=JSON.stringify(user_data)
console.log(jsonres)
const orgdata=JSON.parse(jsonres)
console.log(orgdata)