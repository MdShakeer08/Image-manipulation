//Image Manipulation:
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('#modal-img');
    const closeModal = document.querySelector('.close');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.querySelector('img').src;
      });
    });
  
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });

// A simple image slideshow
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Initial call to start the slideshow
showSlides();   