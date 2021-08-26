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

