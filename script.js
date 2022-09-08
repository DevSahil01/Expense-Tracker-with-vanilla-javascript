var html=""
function setLimit(){
    const budget=document.getElementById('limit').value
    localStorage.setItem("limit",budget)
    update()
}
var limit=localStorage.getItem('limit')
function getValues(){
    var form = document.getElementById('form')
        var amount=form.elements.item(0).value
        var transaction =form.elements.item(1).value
        var date=form.elements.item(2).value
        var description=form.elements.item(3).value 

    if(localStorage.getItem('expenses')==null){
    newArray=[]
    newArray.push([amount,transaction,date,description])
    localStorage.setItem('expenses',JSON.stringify(newArray))
    console.log(window.localstorage)
    update()
    }
    else{
    newArray=localStorage.getItem('expenses')
    newArray=JSON.parse(newArray)
    newArray.push([amount,transaction,date,description])
    localStorage.setItem('expenses',JSON.stringify(newArray))
    update()
}
}
function update(){
    window.location.reload()
}
var data=JSON.parse(localStorage.getItem('expenses'))
var display=document.getElementById('tbody')
console.log(JSON.parse(localStorage.getItem('expenses')))
str=""
var total=0;
if(data!=null){
for(let i=0;i<data.length;i++){
   str+=`<tr><th scope="row"  id="key">${data[i][0]}</th>
    <td>${data[i][1]}</td>
    <td>${data[i][2]}</td>
    <td>${data[i][3]}</td>
    </tr>`
    var amount=parseInt(data[i][0],10)
    console.log(amount)
    total=total+amount
}
}
else{
    str=`<p> no records found </p>`
}
console.log(total)
display.innerHTML=str
document.getElementById("total").innerHTML=`<h4 class="d-inline mx-5 bg-light text-primary">Total of Your Expenses : ${total} </h4>`
if(limit<total){
    html=`<h1 class="bg-light d-inline text-danger">${limit}Rs</h1>
    <p class="text-danger fs-4 bg-light d-inline">limit is exceed</p>`
}
else{
    if(limit!=null){
    html=`<h1 class="bg-light d-inline text-primary" >${limit}Rs</h1>`}
}
document.getElementById("limit2").innerHTML=html