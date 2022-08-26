var s=document.getElementById("a1");
var str="世界四大博物馆";
var y=1;
function trim()
{var trimstr=str.substring(0,y);
	s.innerHTML=trimstr;
	if(y<str.length)y++;
	else clearInterval(setInterval(trim,100));
}




var a=document.getElementById("one"); 
a.onmouseover=changeone1;
function changeone1() 
{
   a.src="img/12.png";   
   a.style.height="200px";
   a.style.width="300px";      
}                   
a.onmouseout= changeone2;
function changeone2() 
{       
   a.src="img/1.png";
   a.style.height="70px";
   a.style.width="180px";
}       


var b=document.getElementById("two"); 
b.onmouseover=changetwo1;
function changetwo1() 
{
   b.src="img/21.png";   
   b.style.height="200px";
   b.style.width="300px";      
}                   
b.onmouseout= changetwo2;
function changetwo2() 
{       
   b.src="img/2.png";
   b.style.height="80px";
   b.style.width="230px";
}        


var c=document.getElementById("three"); 
c.onmouseover=changethree1;
function changethree1() 
{
   c.src="img/31.png";   
   c.style.height="200px";
   c.style.width="300px";      
}                   
c.onmouseout= changethree2;
function changethree2() 
{       
   c.src="img/3.png";
   c.style.height="80px";
   c.style.width="400px";
}        


var d=document.getElementById("four"); 
d.onmouseover=changefour1;
function changefour1() 
{
   d.src="img/41.png";   
   d.style.height="200px";
   d.style.width="300px";      
}                   
d.onmouseout= changefour2;
function changefour2() 
{       
   d.src="img/4.png";
   d.style.height="80px";
   d.style.width="380px";
}        