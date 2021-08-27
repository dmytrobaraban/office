document.getElementById('btn').onclick=show;
var result = document.getElementById('result');
var el = document.getElementById('myDiv');

function show() {
document.getElementById('myDiv').classList.toggle("show");
if(el.classList.contains('show'))
{     
     document.getElementById('btn').innerHTML='Show';
}
else
{
     document.getElementById('btn').innerHTML='Hide';
}
}

document.getElementById('btn2').onclick=createElement;

function createElement()
{
let el2 = document.createElement('div');
el2.setAttribute("class" , "fuck");
el2.setAttribute("id" , 'you');
// el2.innerHTML='Ohohoh';
document.body.appendChild(el2);
return;
console.log(el2);
}

document.getElementById('btn3').onclick=deleteElement;

function deleteElement(){
document.getElementById('you').remove();
}

let str = "<table class='tabs'>";
for (let i = 1; i < 5; i++) {
  str += "<tr>";
  str += `<td class="tab">${i}</td>`;
  str += `<td class="tab">${i * i}</td>`;
  str += "</tr>";
}
str += "</table>";

document.getElementById("res1").innerHTML = str;
