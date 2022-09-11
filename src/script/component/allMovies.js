class allMovies extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .card-item {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1.5rem;
            padding: 0px 30px 0px 30px;
            margin-bottom: 30px;
        }

        .movies-card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 180px;
            height: 300px;
            border-radius: 5px;
            background-color: #fff;
            object-fit: cover;
            position: relative;
        }

        .rate{
            display:flex;
            justify-content: flex-end;
            margin-right: 5px;
        }

        .movies-card span {
            position: absolute;
            font-weight: bold;
            background: rgba(255, 255, 255,0.9);
            padding: 5px;
            color: green;
            height: 33px;
            width: 33px;
            border-radius: 50%;
            margin-top: 5px;
            justify-content: center;
            align-items: center;
            display: flex;
        }

        .desc{
            padding: 0px 10px 10px 10px;
            text-align: center;
        }
        
        .movies-card img {
            width: 100%;
            height: 75%;
            object-fit: cover;
            border-radius: 5px 5px 0px 0px;
            display: block;
        }

        .all-movies-content {
            display: flex;
            width: 100%;
            background-color: #e7e7e7;
            border-radius: 5px;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        
        .search {
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            margin-top: 7px;
            margin-right: 15px;
        }

        .search-box {
            display: flex;
            background: #ffffff;
            height: 40px;
            border-radius: 40px;
            padding: 7px;
            align-items: center;
        }

        .search-txt {
            padding-left: 8px;
            border: none;
            background: none;
            outline: none;
            float: left;
            color: #2f3640;
            font-size: 14px;
            transition: 0.4s;
            font-family: 'Poppins';
        }

        #searchSubmit {
            float: right;
            border: 1px solid;
            border-color: #f1f3fb;
            background: #f1f3fb;
            border-radius: 50%;
            padding: 7px;
        }

        #searchSubmit:hover {
            background: #aaabaf;
        }

        #searchSubmit i {
            font-size: 17px;
            color: #2f3640;
        }

        #searchSubmit i:hover {
            color: #fff;
        }

        .movie-title{
            font-size: 18px;
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
            object-
        }

        h2{
            margin: 10px 0 10px 15px;
        }

        /* Overlay */

        .background {
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.8);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            z-index: 80;
        }
        
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.25s;
            border-radius: 5px;
        }

        .img-overlay{
            display: flex;
            flex-direction: column;
        }

        .img-overlay>button{
            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            font-weight: 500;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 5px 10px 5px 10px;
        }

        .img-overlay>button:first-child {
            background-color: #F4D03F;
        }

        .img-overlay>button:last-child {
            margin-top: 10px;
            background-color: #E74C3C;
        }

        .movies-card:hover .overlay {
            opacity: 1;
            z-index: 50;
        }
        </style>
            <div id="content">
                <div class="all-movies-content">
                    <h2>All Movies Video</h2>
                    <div class="search" id="search">
                        <div class="search-box shadow">
                            <input id="search-txt" class="search-txt" type="text" name=""
                                placeholder="Ketik judul buku disini..">
                            <button id="searchSubmit" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        <div class="BookCard">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-item">
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
                    <div class="rate"><span>9.5</span></div>
                    <img src="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" alt="">
                    <div class="desc">
                        <div class="movie-title">Spider-Man: No Way Home</div>
                        <div class="relase-date">2002-08-10</div>
                        <div class="genre">Petualangan</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('all-movies', allMovies);
