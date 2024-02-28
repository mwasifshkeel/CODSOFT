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

      setTimeout(() => {
          scrollerContent.style.transition = "none";
          scrollerContent.style.width = "auto";
      }, 500);
  }
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

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
