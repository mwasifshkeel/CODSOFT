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

    // Number of stars you want
    const numberOfStars = 6;

    // Create and scatter stars initially
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 15 + 1}px`;
        star.style.height = star.style.width;

        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;

        star.style.transform = `translate(${initialX}px, ${initialY}px)`;
        starsContainer.appendChild(star);

        moveStarRandomly(star);
    }

    function moveStarRandomly(star) {
        function getRandomPosition() {
            const maxX = window.innerWidth - parseFloat(star.style.width);
            const maxY = window.innerHeight - parseFloat(star.style.height);
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;
            return { x: newX, y: newY };
        }

        function animate() {
            const newPosition = getRandomPosition();
            const currentX = parseFloat(star.style.transform.split('(')[1].split('px')[0]);
            const currentY = parseFloat(star.style.transform.split(', ')[1].split('px')[0]);

            const deltaX = newPosition.x - currentX;
            const deltaY = newPosition.y - currentY;

            const speed = 0.01; // Adjust the speed as needed

            star.style.transition = `transform ${Math.random() * 3 + 1}s ease-in-out`;
            star.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;

            setTimeout(() => {
                moveStarRandomly(star);
            }, (Math.random() * 3 + 1) * 1000);
        }

        animate();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.wsf_lf_s4');

    // Number of stars you want
    const numberOfStars = 6;

    // Create and scatter stars initially
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 15 + 1}px`;
        star.style.height = star.style.width;

        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;

        star.style.transform = `translate(${initialX}px, ${initialY}px)`;
        starsContainer.appendChild(star);

        moveStarRandomly(star);
    }

    function moveStarRandomly(star) {
        function getRandomPosition() {
            const maxX = window.innerWidth - parseFloat(star.style.width);
            const maxY = window.innerHeight - parseFloat(star.style.height);
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;
            return { x: newX, y: newY };
        }

        function animate() {
            const newPosition = getRandomPosition();
            const currentX = parseFloat(star.style.transform.split('(')[1].split('px')[0]);
            const currentY = parseFloat(star.style.transform.split(', ')[1].split('px')[0]);

            const deltaX = newPosition.x - currentX;
            const deltaY = newPosition.y - currentY;

            const speed = 0.01; // Adjust the speed as needed

            star.style.transition = `transform ${Math.random() * 3 + 1}s ease-in-out`;
            star.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;

            setTimeout(() => {
                moveStarRandomly(star);
            }, (Math.random() * 3 + 1) * 1000);
        }

        animate();
    }
});