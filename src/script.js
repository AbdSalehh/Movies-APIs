import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './styles/style.css';
import './styles/swiper-bundle.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './script/component/headerBar.js';
import './script/component/searchBar.js';
import './script/component/moviePoster.js';
import './script/component/popularMovies.js';
import './script/component/allMovies.js';
import './script/component/footerBar.js';
import './script/swiper/swiper.js';
import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
