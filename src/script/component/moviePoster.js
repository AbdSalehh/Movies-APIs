class moviePoster extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `
        <style>

        .poster-desc {
            color: #fff;
            position: absolute;
            padding: 230px 0px 10px 30px;
        }

        .poster {
            margin-top: 30px;
            padding: 0px 30px 0px 30px;
        }

        .poster img{
            width: 100%;
            height: 400px;
            object-fit: cover;
            object-position: center;
            border-radius: 10px;
        }

        .poster-desc .movie-title{
            width: 500px;
            font-size: 38px;
            font-weight: 600;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .poster-desc .relase-date, .poster-desc .genre{
            font-size: 19px;
            font-weight: 600;
        }
        </style>
        <div class="poster">
            <div class="poster-desc">
                <div class="movie-title">Mad Max: Fury Road</div>
                <div class="relase-date">14 Mei 2015</div>
                <div class="genre">Action</div>
            </div>
            <img src="https://www.jagatreview.com/wp-content/uploads/2015/05/poster.png" />
        </div>
        `;
    }
}

customElements.define('movie-poster', moviePoster);