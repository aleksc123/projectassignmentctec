let ThisIndex = 0;
carousel();
function carousel(){
let a;
let b = document.getElementsByClassName("MainSlideshow");
for(a=0; a<b.length; a++){
b[a].style.display="none";
}
ThisIndex++;
if(ThisIndex>b.length){ThisIndex = 1}
b[ThisIndex-1].style.display = "block";
setTimeout(carousel, 4000);
}

function DisplayLinks(){
	let socialmedia1 = 'LCFC on Facebook';
	let displaypage = socialmedia1.link("https://en-gb.facebook.com/lcfc/");
	
	document.getElementById("display").innerHTML = displaypage;
}

function ShowHideDiv(){
let x = document.getElementById('PopUpDiv');
if(x.style.display === 'none'){
x.style.display = 'block';
}else {
x.style.display = 'none';
}
}
