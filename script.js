
let currentSlide = 0;

// First slider
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (n + slides.length) % slides.length;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

showSlide(currentSlide);

// Second slider
let currentSlide2 = 0;
const mySlider2 = document.querySelector('.my-slider');
let isTransitioning2 = false;  
let autoSlide2;

function nextSlide2() {
    if (!isTransitioning2) {
        isTransitioning2 = true;

        const firstImage = mySlider2.firstElementChild.cloneNode(true);
        mySlider2.appendChild(firstImage);

        mySlider2.style.transition = 'transform 1s ease-in-out';
        mySlider2.style.transform = 'translateX(-30%)';

        setTimeout(() => {
            mySlider2.style.transition = 'none';
            mySlider2.style.transform = 'translateX(0)';
            mySlider2.removeChild(mySlider2.firstElementChild);
            isTransitioning2 = false;
        }, 1000);
    }
}

function startAutoSlide2() {
    autoSlide2 = setInterval(() => nextSlide2(), 2500);
}

document.querySelector('.my-slider-container').addEventListener('mouseenter', () => clearInterval(autoSlide2));
document.querySelector('.my-slider-container').addEventListener('mouseleave', () => startAutoSlide2());
startAutoSlide2();


let centeredPerson = document.querySelector('.centered');

    // Simulate click on Person 4 during page load
    window.onload = function () {
      simulateClick(centeredPerson);
    };

    function simulateClick(element) {
      const event = new Event('click');
      element.dispatchEvent(event);
    }

    function showPersonInfo(name, description, additionalInfo) {
      const personInfoDiv = document.getElementById('personInfo');
      personInfoDiv.innerHTML = `<h2>${name}</h2><p>${description}</p><p>${additionalInfo}</p>`;
      personInfoDiv.style.display = 'block';

      const gallery = document.getElementById('gallery');
      const centerX = gallery.offsetWidth / 2;
      const centerY = gallery.offsetHeight / 2;

      const clickedBubble = event.target;

      if (centeredPerson && centeredPerson !== clickedBubble) {
        // If a person is already centered, reset its position and size
        centeredPerson.classList.remove('centered');
        centeredPerson.style.transform = 'translate(-50%, -50%)';
      }

      centeredPerson = clickedBubble;
      centeredPerson.classList.add('centered');

      const bubbleX = centeredPerson.offsetLeft + centeredPerson.offsetWidth / 2;
      const bubbleY = centeredPerson.offsetTop + centeredPerson.offsetHeight / 2;

      const deltaX = centerX - bubbleX - (gallery.offsetHeight * 0.04);
      const deltaY = centerY - bubbleY  - (gallery.offsetHeight * 0.2);

      centeredPerson.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }