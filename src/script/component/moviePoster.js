class moviePoster extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="poster">
                <div class="poster-desc">
                    <div class="movie-title">Mad Max: Fury Road</div>
                    <div class="relase-date">14 Mei 2015</div>
                    <div class="genre">Action</div>
                </div>
                <img class="lazyload" src="../../image/skeletonLoad.gif" data-src="${'../../image/poster.webp' ? '../../image/poster.webp' : '../../image/skeletonLoad.gif'}" alt="Poster">
            </div>
        `;
    }
}

customElements.define('movie-poster', moviePoster);
