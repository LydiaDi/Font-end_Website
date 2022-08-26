window.onload=function (){
    var totop=document.getElementById("btn");
    var timer=null;
    totop.onclick=function(){
    	timer=setInterval(function(){
    		var backTop=document.documentElement.scrollTop||document.body.scrollTop;
    	    var speedTop=backTop/5;
    	    document.documentElement.scrollTop=backTop-speedTop;
    	    if (backTop==0) {
	            clearInterval(timer);
    	     }
         },120);

    }
}


var container1=document.getElementById("container1");
var container1Top=container1.offsetTop;
// var container1Left=container1.offsetLeft;
// console.log(container1Top);
// console.log(container1Left);
window.onscroll=function(){
	var backTop=document.documentElement.scrollTop||document.body.scrollTop;
    if (backTop>="400") {
	    container1.style.position="fixed";
	    container1.style.top="0";
	    container1.style.left="212";
	    container1.style.zIndex="100";
    }
    else{
	    container1.style.position="";
    }
}