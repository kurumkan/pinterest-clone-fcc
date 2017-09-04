var searchBtn = document.getElementsByClassName('search-btn')[0];
var navigationTop = document.getElementById('navigation-top');

searchBtn.onclick = function() {
    navigationTop.classList.toggle('open');
}