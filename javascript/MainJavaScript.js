let ThisIndex = 0;
AutoSlideshow();
function AutoSlideshow(){
let a;
let b = document.getElementsByClassName("MainSlideshow");
for(a=0; a<b.length; a++){
b[a].style.display="none";
}
ThisIndex++;
if(ThisIndex>b.length){ThisIndex = 1}
b[ThisIndex-1].style.display = "block";
setTimeout(AutoSlideshow, 4000);
}

function DisplayLinks(){
	let socialmedia = 'LCFC on Facebook';
	let displaypage = socialmedia.link("https://en-gb.facebook.com/lcfc/");
	
	document.getElementById("showSocialMediaPage").innerHTML = displaypage;
}

function ShowHideDiv(){
let A = document.getElementById('PopUpDiv');
if(A.style.display === 'none'){
A.style.display = 'block';
}else {
A.style.display = 'none';
}
}
