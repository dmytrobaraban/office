document.getElementById('btn').onclick=show;
var result = document.getElementById('result');
var el = document.getElementById('myDiv');

function show() {
document.getElementById('myDiv').classList.toggle("show");
if(el.classList.contains('show'))
{     //alert(document.getElementById('btn').classList.contains('show'));
     document.getElementById('btn').innerHTML='Show';
}
else
{
     document.getElementById('btn').innerHTML='Hide';
}
}

document.getElementById('btn2').onclick=falling;

function falling()
{
var el2 = document.createElement('span');
el2.setAttribute("class" , "fuck");
el2.setAttribute("id" , 'you');
// el2.innerHTML='Ohohoh';
document.body.appendChild(el2);
return;
console.log(el2);
}

let str = "<table class='tabs'>";
for (let i = 1; i < 6; i++) {
  str += "<tr>";
  str += `<td class="tab">${i}</td>`;
  str += `<td class="tab">${i * i}</td>`;
  str += "</tr>";
}
str += "</table>";

document.getElementById("res1").innerHTML = str;
