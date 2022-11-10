class popularMovies extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="content">
                <div class="popular-content">
                    <h2>Popular Movies</h2>
                    <div class="swiper-btn">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="popular-item swiper">
                    <div class="swiper-wrapper">
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('popular-movies', popularMovies);
