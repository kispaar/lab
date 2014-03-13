function get (argument) {
	var num1=document.getElementById('num1').value;
	var num2=document.getElementById('num2').value;
	var x=parseInt(num1);
	var y=parseInt(num2);
	return [x,y];
}

function add () {
	var res=document.getElementById('results');
     console.log(get());
     var list=get();
     var result=list[0]+list[1]
	res.innerHTML="<h3>you clicked to add and result is</h3><strong>"+ result+"</strong>";
}
function sub () {
	var res=document.getElementById('results');
     console.log(get());
     var list=get();
     var result=list[0]-list[1]
	res.innerHTML="<h3>you clicked to subtract and result is</h3><strong>"+ result+"</strong>";
}
function multi () {
	var res=document.getElementById('results');
     console.log(get());
     var list=get();
     var result=list[0]*list[1]
	res.innerHTML="<h3>you clicked to multiply and result is</h3><strong>"+ result+"</strong>";
}