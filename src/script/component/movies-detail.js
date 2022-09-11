class moviesDetail extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback() {
        this.render();
    }

  render() {
    this.innerHTML = `
    <style>
    movies-detail {
        display: none;
        position: fixed;
        width: 35%;
        left: 32%;
    }

    movies-detail>a{
        font-size: 23px;
        position: absolute;
        color: #fff;
        top: 0;
        right: 0;
        padding: 7px;
        display: flex;
        margin-right: -30px;
        margin-top: -10px;
    }

    .desc-detail>img{
        width: 100%;
        max-height: 275px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }

    .desc-detail-title{
        margin-top: -15px;
        font-size: 13px;
    }

    .desc-detail-content,
    .movie-genre, .movie-rating {
        margin-top: -20px;
        border-bottom: 1px solid #e7e7e7;
    }

    .desc-detail-content>p{
        font-size: 14px;
        margin: -15px 0 10px 0;
    }

    .movie-genre>h4>span, .movie-rating>h4>span {
        font-size: 15px;
        font-weight: 600;
    }

    </style>
    <div class="movie-detail">
        <div class="desc-detail">
            <img src="assets/image/batman.jpg" alt="">
            <div class="desc-detail-title">
                <h1>Spider-Man: No Way Home</h1>
            </div>
            <div class="desc-detail-content">
                <h4>Deskripsi :</h4>
                <p>
                    This is a web application that allows users to search for movies and view the details of the
                    movie.
                </p>
            </div>
            <div class="movie-genre">
                <h4>Genre : <span>Action</span>
            </div>
            <div class="movie-rating">
                <h4>Rating : <span>8.4</span>
                </h4>
            </div>
        </div>
        <a onclick="closed()"><i class="fa-solid fa-xmark"></i></a>
    </div>
    `;
  }
}

customElements.define('movies-detail', moviesDetail);