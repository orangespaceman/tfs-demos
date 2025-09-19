(function() {

  // el: bg image to scroll
  let parallaxLevelOne;
  let parallaxLevelTwo;

  // int: remember last offset so we only reposition on scroll
  let lastOffset = 0;

  // method called on page load to init all behaviour
  function load() {
    initElements();
    update();
  }

  // find all DOM elements
  function initElements() {
    parallaxLevelOne = document.querySelector('.Background-parallax-level-one');
    parallaxLevelTwo = document.querySelector('.Background-parallax-level-two');
  }

  function update() {
    updateScroll();
    requestAnimationFrame(update);
  }

  function updateScroll() {
    const newOffset = window.pageYOffset || 0;
    if (newOffset !== lastOffset) {

      const levelOneOffsetMultiplier = 0.8;
      const levelOneOffset = Math.round(newOffset * levelOneOffsetMultiplier);
      parallaxLevelOne.style.transform = 'translate3d(0, ' + levelOneOffset + 'px, 0)';

      const levelTwoOffsetMultiplier = 0.3;
      const levelTwoOffset = Math.round(newOffset * levelTwoOffsetMultiplier);
      parallaxLevelTwo.style.transform = 'translate3d(0, ' + levelTwoOffset + 'px, 0)';

      lastOffset = newOffset;
    }
  }

  // init
  document.addEventListener('DOMContentLoaded', load);
})();
