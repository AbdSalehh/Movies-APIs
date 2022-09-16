import './moviesItem.js';

class moviesList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._movies.forEach(movie => {
            const moviesItemElement = document.createElement('movies-item');
            moviesItemElement.movie = movie;
            this.appendChild(moviesItemElement);
        });
    }

    renderError(message) {
      this.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
      <h2 class="placeholder">${message}</h2>
    `;
    }

}

customElements.define('movies-list', moviesList);