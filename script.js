let bodyWidth = document.body.clientWidth;
let bodyHeight = document.body.clientHeight;
console.log(bodyWidth);
console.log(bodyHeight);
const div = document.querySelector('.headerdiv');
const placeholder = document.createElement('div');
placeholder.style.height = div.offsetHeight + 'px'; 
placeholder.style.display = 'none'; 
div.parentNode.insertBefore(placeholder, div);
const threshold = div.offsetTop;
window.addEventListener('scroll', () => {
    if (window.pageYOffset > threshold) {
      div.classList.add('fixed-top');
      placeholder.style.display = 'block'; // show the placeholder element when the div element becomes fixed
    } else {
      div.classList.remove('fixed-top');
      placeholder.style.display = 'none'; // hide the placeholder element when the div element is no longer fixed
    }
  });
