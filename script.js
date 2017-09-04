var searchBtn = document.getElementsByClassName('search-btn')[0];
var navigationTop = document.getElementById('navigation-top');

searchBtn.onclick = function() {
    navigationTop.classList.toggle('open');
}

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    // options
    horizontalOrder: true,
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 5,
    fitWidth: true


});
