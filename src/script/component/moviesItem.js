import './searchBar.js';
import genres from '../data/genres.js';

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
        genres.forEach(genre => {
            if (this._movie.genre_ids.includes(genre.id)) {
                this._movie.genre = genre.name;
            }
        });
        this.innerHTML = `
        <style>

        movies-list {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1.1rem;
            padding: 0px 25px 0px 30px;
            margin-bottom: 30px;
        }

        .movies-card {
            height: 280px;
            border-radius: 5px;
            object-fit: cover;
            position: relative;
        }

        .rate{
            display:flex;
            justify-content: flex-end;
            margin-right: 5px;
        }

        .green{
            color: green;
        }

        .orange{
            color: #F39C12;
        }

        .red{
            color: red;
        }

        .movies-card span {
            font-size: 14px;
            position: absolute;
            font-weight: bold;
            background: rgba(255, 255, 255);
            padding: 5px;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            margin-top: 5px;
            justify-content: center;
            align-items: center;
            display: flex;
        }

        .desc{
            padding: 0px 10px 10px 0px;
        }
        
        .movies-card img {
            width: 100%;
            height: 75%;
            object-fit: cover;
            border-radius: 5px;
            display: block;
        }

        .all-movies-content {
            display: flex;
            width: 100%;
            background-color: #F2F3F4;
            border-radius: 5px;
            justify-content: space-between;
            margin-bottom: 20px;
            align-items: center;
            padding: 4px;
        }

        .desc .movie-title{
            font-size: 16px;
            font-weight: 600;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .relase-date, .genre{
            font-size: 13px;
        }

        #content {
            display: flex;
            width: 100%;
            padding: 0 30px 0px 30px;
            align-items: center;
            margin-top: 30px;
        }

        .movies-card:hover .movie-title {
            color: #515A5A;
        }

        all-movies .searchResult {
            padding: 10px 10px 10px 10px;
            margin: 0px 30px 0px 30px;
            margin-top: 20px;
            background-color: #F2F3F4;
            border-radius: 6px;
        }

        all-movies .searchResult a {
            font-size: 16px;
            width: 100%;
        }

        all-movies span{
            font-size: 18px;
            font-weight: 600;
        }
        </style>
            <div class="movies-card">
                <div class="rate ${rateColor(this._movie.vote_average)}"><span>${this._movie.vote_average}</span></div>
                <img src="${"https://image.tmdb.org/t/p/w500"+this._movie.poster_path}" alt="${this._movie.title}">
                <div class="desc">
                    <div class="movie-title">${this._movie.title}</div>
                    <div class="relase-date">${this._movie.release_date}</div>
                    <div class="genre">${this._movie.genre}</div>
                </div>
            </div>
        `;
    }
}

customElements.define("movies-item", moviesItem);