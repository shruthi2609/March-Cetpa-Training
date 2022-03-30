
function createHeading(){
let divcontainer=document.getElementById("container1")
//createElement
let newheading=document.createElement("h1")
//createTextContent
let headingcontent=document.createTextNode("this is a heading")
newheading.style.backgroundColor="red"
newheading.style.color="green"
newheading.className="newheading"
newheading.id="newid"
newheading.appendChild(headingcontent)
console.log(newheading)
divcontainer.appendChild(newheading)
}
function createLink(){
    let navBar=document.getElementById("navBar")
    let home=document.createElement("a")
    home.href="https://google.com"
    let linktext=document.createTextNode("google")
    home.appendChild(linktext)
    navBar.appendChild(home)
}
function createImage(){
    let imageContainer=document.getElementById("container1")
   /* let newimage=document.createElement("img")
    console.log(newimage)*/
    let newimage=new Image(250,550)
    newimage.src="images/Desert.jpg"
    newimage.alt="no image found"
   /* newimage.src="images/Desert.jpg"
    newimage.height="350px"
    newimage.width="650px"
    newimage.alt="no image"*/
    imageContainer.appendChild(newimage)
}
function changeTheme(){
    let bodycontainer=document.getElementById("body")
    bodycontainer.style.backgroundColor="black"
    bodycontainer.style.color="white"
}
/*let divcontainer=document.getElementById("container1")
divcontainer.innerHTML+="<h1>Some content</h1>"*/


