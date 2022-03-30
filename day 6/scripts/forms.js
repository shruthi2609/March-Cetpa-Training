function createform(){
    let formcontainer=document.getElementById("formcontainer")
  let form=  document.createElement("form")
  let unamelabel=document.createElement("label")
  let unametext=document.createTextNode("Username")
  unamelabel.appendChild(unametext)
  let uname=document.createElement("input")
  uname.type="text"
  form.appendChild(unamelabel)
  form.appendChild(uname)
  //password label
  let passwordlabel=document.createElement("label")
  let passwordtext=document.createTextNode("Password")
  passwordlabel.appendChild(passwordtext)
// creating password field
  let password=document.createElement("input")
  password.type="password"
  form.appendChild(passwordlabel)
  form.appendChild(password)
// checkbox label
let cbl=document.createElement("label")
  let cbltext=document.createTextNode("React")
  cbl.appendChild(cbltext)
  //creating checkbox
  let cblinput=document.createElement("input")
  cblinput.type="checkbox"
  form.appendChild(cbl)
  form.appendChild(cblinput)
  formcontainer.appendChild(form)
}