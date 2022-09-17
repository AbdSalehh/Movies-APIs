import '../component/moviesList.js';
import '../component/searchBar.js';
import dataSource from '../data/dataSource.js';
import genres from '../data/genres.js';

const main = () => {
    
    const searchBar = document.querySelector('search-bar');
    const moviesList = document.querySelector('movies-list');
    const onButtonSearchClicked = async () => {
        try {
            const result = await dataSource.searchMovie(searchBar.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    
    const renderResult = result => {
        const moviePoster = document.querySelector('movie-poster');
        moviePoster.innerHTML = '';
        const popularMovies = document.querySelector('popular-movies');
        popularMovies.innerHTML = '';
        const searchValue = document.querySelector('search-bar').value;
        const allMovies = document.querySelector('all-movies');
        allMovies.innerHTML = `
        <div class="searchResult">
            <a>Hasil pencarian judul film <span>${searchValue.toUpperCase()}</span></a>
        </div>`;
        result.forEach(movie => {
            genres.forEach(genre => {
                if (movie.genre_ids.includes(genre.id)) {
                    movie.genre = genre.name;
                }
            });
            moviesList.movies = result;
        });
    }

    const fallbackResult = message => {
        const main = document.querySelector('main');
        main.innerHTML = '';
        moviesList.renderError(message);
    }

    searchBar.clickEvent = onButtonSearchClicked;

    const API_KEY = 'e894dd84e2b0ac1077a261e31454507b';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const ALL_MOVIES = BASE_URL + 'discover/movie?api_key=' + API_KEY;
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=e894dd84e2b0ac1077a261e31454507b';
    const ANIMATION_URL = 'https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=e894dd84e2b0ac1077a261e31454507b';
    const ACTION_URL = 'https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=e894dd84e2b0ac1077a261e31454507b';
    const ADVENTURE_URL = 'https://api.themoviedb.org/3/discover/movie?with_genres=12&api_key=e894dd84e2b0ac1077a261e31454507b';

    const getPopularMovies = (popular) => {
        fetch(popular)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderPopularMovies(responseJson.results);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            });
    };

    const getAllMovies = (all) => {
        fetch(all)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderAllMovies(responseJson.results);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            });
    };


    const renderPopularMovies = (movies) => {
        const movieContainer = document.querySelector('.swiper-wrapper');
        movieContainer.innerHTML = '';

        movies.forEach(movie => {
            genres.forEach(genre => {
                if (movie.genre_ids.includes(genre.id)) {
                    movie.genre = genre.name;
                }
            });
            movieContainer.innerHTML += `
                <div class="popular-card swiper-slide" style="width:350px;height:200px;">
                    <div class="popular-desc">
                        <div class="movie-title">${movie.title}</div>
                        <div class="relase-date">${movie.release_date}</div>
                        <div class="genre">${movie.genre}</div>
                    </div>
                    <img src="${IMG_URL+movie.poster_path}" alt="${movie.title}">
                </div>
                
            `;
        });
    
    };

    

    const renderAllMovies = (movies) => {
        const cardItem = document.querySelector('.card-item');
        cardItem.innerHTML = '';

        movies.forEach(movie => {
            genres.forEach(genre => {
                if (movie.genre_ids.includes(genre.id)) {
                    movie.genre = genre.name;
                }
            });
            cardItem.innerHTML += `
                <div class="movies-card">
                    <div class="overlay">
                        <div class="img-overlay">
                            <button>
                                DETAIL
                            </button>
                            <button class="trailer">
                                TRAILER
                            </button>
                        </div>
                    </div>
                    <div class="rate ${rateColor(movie.vote_average)}"><span>${movie.vote_average}</span></div>
                    <img src="${IMG_URL+movie.poster_path}" alt="${movie.title}">
                    <div class="desc">
                        <div class="movie-title">${movie.title}</div>
                        <div class="relase-date">${movie.release_date}</div>
                        <div class="genre">${movie.genre}</div>
                    </div>
                </div>
            `;
        });
    }
    
    const allMovie = document.querySelector('#allMovie');
    allMovie.addEventListener('click', () => {
        const titleBar = document.querySelector('.all-movies-content>h2');
        titleBar.innerHTML = 'All Movie';
        getAllMovies(ALL_MOVIES);
    });

    const Action = document.querySelector('#action');
    Action.addEventListener('click', () => {
        const titleBar = document.querySelector('.all-movies-content>h2');
        titleBar.innerHTML = 'Action';
        getAllMovies(ACTION_URL);
    });

    const Adventure = document.querySelector('#adventure');
    Adventure.addEventListener('click', () => {
        const titleBar = document.querySelector('.all-movies-content>h2');
        titleBar.innerHTML = 'Adventure';
        getAllMovies(ADVENTURE_URL);
    });

    const Animation = document.querySelector('#animation');
    Animation.addEventListener('click', () => {
        const titleBar = document.querySelector('.all-movies-content>h2');
        titleBar.innerHTML = 'Animation';
        getAllMovies(ANIMATION_URL);
    });

    const rateColor = (rate) => {
        if (rate >= 8) {
            return 'green';
        } else if (rate >= 5) {
            return 'orange';
        } else {
            return 'red';
        }
    };
    
    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    getPopularMovies(API_URL);
    getAllMovies(ALL_MOVIES);
    
}
export default main;