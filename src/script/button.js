import './script/movies-detail.js';

const trailer = document.querySelectorAll(".trailer");
const embedClasses = document.querySelectorAll('.embed');
const detailMovie = document.querySelector('.trailer-btn');

function detail() {
    const detailDescription = document.querySelector('movie-detail');
    const background = document.querySelector('.background');

    detailDescription.style.display = 'block';
    background.style.opacity = '1';
    background.style.pointerEvents = 'auto';
}

function closed(){
    const detailDescription = document.querySelector('movie-detail');
    const background = document.querySelector('.background');

    background.style.opacity = '0';
    background.style.pointerEvents = 'none';

    detailDescription.style.display = 'none';
}