
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
