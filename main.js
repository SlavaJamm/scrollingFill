window.addEventListener('scroll', scrollingFill);

const topScrollBar = document.querySelector('.top-scroll-bar');
function scrollingFill(){
	const scrollingWidth = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
	topScrollBar.style.width = scrollingWidth + "%";
}