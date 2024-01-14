let slideIndex = 0;

function nextSlide() {
	showSlide(slideIndex + 1);
}

function lastSlide() {
	showSlide(slideIndex - 1);
}

function toSlide(n){
	showSlide(n);
}

function showSlide(n) {
	let slides = document.getElementsByClassName("slideshow_slide");
	let dots = document.getElementsByClassName("slideshow_dot");

	// Clamp slideIndex in range of slide array
	if (n > slides.length - 1) slideIndex = 0;
	else if (n < 0) slideIndex = slides.length - 1;
	else slideIndex = n;

	// Hide all slides
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	// Set corrosponding dot to active
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	// Show active slide, update classname of corrosponding dot
	slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
}