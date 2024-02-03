document.addEventListener('DOMContentLoaded', function () {
  const itemsOnDisplay = 4;
  let currentIndex = 0;
  const scrollerContent = document.getElementById('scrollerContent');
  const scrollerItemWidth = document.querySelector('.scroller-item').offsetWidth;
  const itemCount = document.querySelectorAll('.scroller-item').length;

  function moveLeft() {
      currentIndex = (currentIndex - itemsOnDisplay + itemCount) % itemCount;
      updateTransform();
  }

  function moveRight() {
      currentIndex = (currentIndex + itemsOnDisplay) % itemCount;
      updateTransform();
  }

  function updateTransform() {
      const startIndex = currentIndex;
      const endIndex = (currentIndex + itemsOnDisplay - 1) % itemCount;
      const translateValue = -startIndex * scrollerItemWidth;
      const displayWidth = itemsOnDisplay * scrollerItemWidth;

      scrollerContent.style.transition = "transform 0.5s ease-in-out";
      scrollerContent.style.transform = `translateX(${translateValue}px)`;
      scrollerContent.style.width = `${displayWidth}px`;

      // Reset transition after animation completes to enable continuous looping
      setTimeout(() => {
          scrollerContent.style.transition = "none";
          scrollerContent.style.width = "auto";
      }, 500);
  }

  // Attach event listeners to buttons
  const leftButton = document.querySelector('button[data-action="moveLeft"]');
  if (leftButton) {
      leftButton.addEventListener('click', moveLeft);
  } else {
      console.error("Button with data-action 'moveLeft' not found.");
  }

  const rightButton = document.querySelector('button[data-action="moveRight"]');
  if (rightButton) {
      rightButton.addEventListener('click', moveRight);
  } else {
      console.error("Button with data-action 'moveRight' not found.");
  }
});


  
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

