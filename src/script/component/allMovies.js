class allMovies extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="content">
                <div class="all-movies-content">
                    <h2>All Movie</h2>
                    <div class="genres">
                        <input type="radio" name="genre" id="allMovie" checked>
                        <label for="allMovie">All Movie</label>

                        <input type="radio" name="genre" id="action">
                        <label for="action">Action</label>

                        <input type="radio" name="genre" id="adventure">
                        <label for="adventure">Adventure</label>

                        <input type="radio" name="genre" id="animation">
                        <label for="animation">Animation</label>

                        <div class="radio-active"></div>
                    </div>
                </div>
            </div>
            <div class="card-item">
            </div>
        `;
    }
}

customElements.define('all-movies', allMovies);
