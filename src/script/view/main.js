function main() {
    const API_KEY = 'e894dd84e2b0ac1077a261e31454507b';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const ALL_MOVIES = BASE_URL + 'discover/movie?api_key=' + API_KEY;
    const SEARCH_URL = BASE_URL + 'search/movie?api_key=' + API_KEY + '&query=';
    const POPULAR_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&api_key=' + API_KEY;
    const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=e894dd84e2b0ac1077a261e31454507b';

    const getPopularMovies = () => {
        fetch(`${API_URL}`)
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

    const getAllMovies = () => {
        fetch(`${ALL_MOVIES}`)
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
            movieContainer.innerHTML += `
                <div class="popular-card swiper-slide" style="width:350px;height:200px;">
                    <div class="overlay">
                        <div class="img-overlay">
                            <button>
                                DETAIL
                            </button>
                            <button class="trailer-btn">
                                TRAILER
                            </button>
                        </div>
                    </div>
                    <div class="popular-desc">
                        <div class="movie-title">${movie.title}</div>
                        <div class="relase-date">${movie.release_date}</div>
                        <div class="genre">${movie.release_date}</div>
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
                        <div class="genre">${movie.release_date}</div>
                    </div>
                </div>
            `;
        });
    }
    
    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    const rateColor = (rate) => {
        if (rate >= 8) {
            return 'green';
        } else if (rate >= 5) {
            return 'orange';
        } else {
            return 'red';
        }
    };

    getPopularMovies();
    getAllMovies();
    
}
export default main;