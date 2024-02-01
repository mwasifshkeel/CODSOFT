
  const scrollerContent = document.getElementById('scrollerContent');
  const scrollerContainer = document.getElementById('scrollerContainer');

  function duplicateContent() {
    const clone = scrollerContent.cloneNode(true);
    scrollerContainer.appendChild(clone);
  }

  // Duplicate the initial content
  duplicateContent();

  // Set up a delay to allow the initial content to move off-screen
  setTimeout(() => {
    scrollerContent.style.transition = 'transform 10s linear';
    scrollerContent.style.transform = `translateX(-${scrollerContent.offsetWidth}px)`;

    // Remove the transition for the next duplicate to avoid animation jump
    scrollerContent.addEventListener('transitionend', function removeTransition() {
      scrollerContent.style.transition = 'none';
      scrollerContent.removeEventListener('transitionend', removeTransition);

      // Duplicate the content without animation
      duplicateContent();

      // Reset to the initial position
      scrollerContent.style.transform = 'translateX(0)';
      
      // Trigger reflow
      scrollerContent.offsetHeight;

      // Set up the continuous looping
      setTimeout(() => {
        scrollerContent.style.transition = 'transform 10s linear infinite';
        scrollerContent.style.transform = `translateX(-${scrollerContent.offsetWidth}px)`;
      }, 10);
    });
  }, 10);

  
  document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.wsf_lf_s3');
    const initialPositions = [];

    // Number of stars you want
    const numberOfStars = 50;

    // Create and position stars initially
    for (let i = 0; i < numberOfStars; i++) {
        createStar(i);
    }

    function createStar(index) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 50 + 1}px`;
        star.style.height = star.style.width;
        starsContainer.appendChild(star);

        const initialX = Math.random() * (window.innerWidth - parseFloat(star.style.width));
        const initialY = Math.random() * (window.innerHeight - parseFloat(star.style.height));
        initialPositions.push({ x: initialX, y: initialY });

        const rotation = (index / numberOfStars) * 360;
        star.style.transform = `translate(${initialX}px, ${initialY}px) rotate(${rotation}deg)`;
    }

    // Set up transition for stars
    starsContainer.querySelectorAll('.star').forEach(star => {
        star.style.transition = 'transform 1s ease-in-out';
    });

    // Update stars position on window scroll when stars container is in view
    window.addEventListener('scroll', function () {
        const starsContainerRect = starsContainer.getBoundingClientRect();
        const scrollStart = starsContainerRect.top + window.scrollY;
        const scrollEnd = starsContainerRect.bottom + window.scrollY;
        const scrollPercentage = Math.max(0, Math.min(1, (window.scrollY - scrollStart) / (scrollEnd - scrollStart)));

        const shiftDistance = scrollPercentage * window.innerWidth;

        starsContainer.querySelectorAll('.star').forEach((star, index) => {
            const rotation = (index / numberOfStars) * 360;
            const x = initialPositions[index].x - shiftDistance * Math.cos((rotation * Math.PI) / 180);
            const y = initialPositions[index].y - shiftDistance * Math.sin((rotation * Math.PI) / 180);

            star.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});

