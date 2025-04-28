// Scroll
window.addEventListener("scroll", function(){
	document.getElementsByTagName('nav')[0].classList.toggle("sticky", window.scrollY > 0);
});