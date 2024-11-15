let currentIndex = 0;

function moveSlide(direction) {
    const images = document.querySelectorAll('.scroll-container img');
    const totalImages = images.length;

    // Update index
    currentIndex += direction;

    // Check boundaries
    if (currentIndex < 0) {
        currentIndex = totalImages - 2; // Go to the last real image
        setTimeout(() => {
            document.querySelector('.scroll-container').style.transition = 'none';
            document.querySelector('.scroll-container').style.transform = `translateX(${-currentIndex * (300 + 20)}px)`;
        }, 500); // Wait for transition to complete
    } else if (currentIndex >= totalImages - 1) {
        currentIndex = 1; // Go to the first real image
        setTimeout(() => {
            document.querySelector('.scroll-container').style.transition = 'none';
            document.querySelector('.scroll-container').style.transform = `translateX(0)`;
        }, 500); // Wait for transition to complete
    } else {
        document.querySelector('.scroll-container').style.transition = 'transform 0.5s ease-in-out';
    }

    // Set the transform to slide
    const offset = -currentIndex * (300 + 20); // 300 is the width, 20 is the margin
    document.querySelector('.scroll-container').style.transform = `translateX(${offset}px)`;
}

