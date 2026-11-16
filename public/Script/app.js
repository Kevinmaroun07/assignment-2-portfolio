// Report when the portfolio finishes loading in the browser.
(function () {
  function Start() {
    console.log('Portfolio loaded');
  }

  window.addEventListener('load', Start);
})();
