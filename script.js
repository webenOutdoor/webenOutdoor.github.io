const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let index = 0; // Start with the first image

// Function to show the current image
function showImage() {
    const imageWidth = images[0].clientWidth; // Get the width of the images
    slider.style.transform = `translateX(${-index * imageWidth}px)`; // Slide to the correct image
}

// Function to cycle through the images
function autoSlide() {
    index = (index + 1) % images.length; // Increment index and loop back to the first image
    showImage(); // Update the slider position
}

// Automatically slide images every 3 seconds
setInterval(autoSlide, 3000);

// Adjust the slider on window resize to handle responsive design
window.addEventListener('resize', showImage);
