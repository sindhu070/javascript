document.querySelector("h1").innerHTML="Introduction to JavaScript:";
document.querySelector("p").innerHTML="JavaScript  is a full-fledged dynamic programming language that can add interactivity to a website. It was invented by Brendan Eich (co-founder of the Mozilla project), the Mozilla Foundation, and the Mozilla Corporation.JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!JavaScript itself is relatively compact, yet very flexible.";
document.querySelector(".para2").innerHTML="JavaScript also supports multiple dynamic features. It allwos us to make modifications dynamically. We can access each element with it's ID or Class or Tagname. After selecting we can make multiple changes.Some of the features of JS is Function(code reusability),operators(arithmetic,relational,conditional,bitwise etc.),etc";

document.querySelector("h2").innerHTML="Comments:";
document.querySelector(".para3").innerHTML="Comments are snippets of text that can be added along with code. The browser ignores text. Single-line comment: //. Multi-line comment-/* */";

document.querySelector(".operators").innerHTML="operators:";
document.querySelector(".para4").innerHTML="An operator is a mathematical symbol which produces a result based on two values (or variables). In the following table you can see some of the simplest operators, along with some examples to try in the JavaScript console.";
document.querySelector(".functions").innerHTML="Functions:";
document.querySelector(".para5").innerHTML="Functions are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code. You have already seen some uses of functions previously.";

variable_1="Sindhu";
variable_2="Gorthi";
dob=1999;
current=2020;
console.log(variable_1+" "+variable_2+"'s "+"Age is: "+(current-dob));
var a=[];
for(i=0;i<5;i++)
{
	a[i]=window.prompt("Enter value at index:"+i);
	
}
document.querySelector("h3").innerHTML="The value at index '3' after converting to string is "+String(a[3]);
function total_and_average_calculator()
{
total=Number(document.getElementById("m1").innerHTML)+Number(document.getElementById("m2").innerHTML)+Number(document.getElementById("m3").innerHTML)+Number(document.getElementById("m4").innerHTML)+Number(document.getElementById("m5").innerHTML)+Number(document.getElementById("m6").innerHTML)+Number(document.getElementById("m7").innerHTML)+Number(document.getElementById("m8").innerHTML);
document.querySelector(".tot").innerHTML="Total:"+total;
avg=total/8;
document.querySelector(".avg").innerHTML="Average:"+avg;
var table=document.getElementById("tab")
var row=table.insertRow(5);
var r1=row.insertCell(0);
var r2=row.insertCell(1);
r1.innerHTML="Computer Networks";
r2.innerHTML=97;

ntot=Number(total)+Number(r2.innerHTML);
document.querySelector(".ntot").innerHTML="New Total:"+ntot;
navg=ntot/9;
document.querySelector(".navg").innerHTML="New Average:"+navg;
document.querySelector(".otot").innerHTML="Old Total:"+total;
document.querySelector(".oavg").innerHTML="Old Average:"+avg;
document.querySelector(".newtot").innerHTML="New Total:"+ntot;
document.querySelector(".newavg").innerHTML="New Average:"+navg;
}
total_and_average_calculator()

function verify()
{
	valid=false;
var name=document.getElementById("name").value;
var pat=/^[A-Za-z]+$/;
if(name.match(pat))
{
	valid=true;
}
else
{
	alert("Enter name with alphabets only!!!");
}
}

function mathfunctions()
{
	document.write("Power is:"+Math.pow(3,6)+"\n");
	document.write("Square Root is:"+Math.sqrt(3600)+"\n");
	document.write("Absolute is:"+Math.abs(-9000));
	x=Math.random()
	document.write("Random number is:"+x+"\n");
	document.write("Ceil is:"+Math.ceil(x)+"\n");
	document.write("Round is:"+Math.round(x)+"\n");
	document.write("Floor is:"+Math.floor(x)+"\n");
	document.write("Sin is:"+Math.sin(Math.PI/4)+"\n");
	document.write("Cos is:"+Math.cos(Math.PI/4)+"\n");
	document.write("Tan is:"+Math.tan(Math.PI/4)+"\n");
	document.write("Cosec is:"+1/Math.sin(Math.PI/4)+"\n");
	document.write("Sec is:"+1/Math.cos(Math.PI/4)+"\n");
	document.write("Cot is:"+1/Math.tan(Math.PI/4)+"\n");


}
mathfunctions();