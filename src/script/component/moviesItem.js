import './searchBar.js';

class moviesItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const rateColor = (rate) => {
            if (rate >= 8) {
                return 'green';
            } else if (rate >= 5) {
                return 'orange';
            } else {
                return 'red';
            }
        };

        this.innerHTML = `
            <div class="movies-card">
                <div class="rate ${rateColor(this._movie.vote_average)}"><span>${this._movie.vote_average}</span></div>
                <img class="lazyload" src="../../image/skeletonLoad.gif" data-src="${this._movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + this._movie.poster_path : '../../image/skeletonLoad.gif'}" alt="${this._movie.title}">
                <div class="desc">
                    <div class="movie-title">${this._movie.title}</div>
                    <div class="relase-date">${this._movie.release_date}</div>
                    <div class="genre">${this._movie.genre}</div>
                </div>
            </div>
        `;
    }
}

customElements.define('movies-item', moviesItem);
