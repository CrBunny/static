document.addEventListener("DOMContentLoaded", start);

function start() {
  let h1 = document.getElementById('h1');
  h1.style.opacity = '0';

  let start = Date.now();
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    h1.style.opacity = timePassed /20 + '%';
    if (timePassed > 2000) {
      clearInterval(timer);
    } 
  }, 20);
}
