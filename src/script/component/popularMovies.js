class popularMovies extends HTMLElement {
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

        .popular-content{
            margin: 0px 30px 0px 30px;
            display: flex;
            width: 100%;
            background-color: #e7e7e7;
            border-radius: 5px;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .swiper-btn {
            display: flex;
            float: right;
        }

        .swiper-button-prev,
        .swiper-button-next {
            color: #363636 !important;
            position: static !important;
            margin: 5px 0 0 0 !important;
        }

        .swiper-button-next{
            margin-right: 10px !important;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 18px !important;
            font-weight: 600;
        }
  
        #content {
            display: flex;
            width: 100%;
            align-items: center;
            margin-top: 50px;
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

        .box{
            padding: 0px 30px 0px 30px;
        }
        .swiper {
            width: 100%;
        }
        
        .popular-card img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }

        .popular-desc {
            color: #fff;
            position: absolute;
            padding: 120px 0px 10px 10px;
        }

        .popular-card:hover .overlay {
            opacity: 1;
            z-index: 50;
        }

        .popular-item {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .popular-card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            height: 200px;
            border-radius: 5px;
            background-color: #fff;
            object-fit: cover;
            position: relative;
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
                <div class="popular-content">
                    <h2>Popular Video</h2>
                    <div class="swiper-btn">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="popular-item swiper">
                    <div class="swiper-wrapper">
                        <div class="popular-card swiper-slide" style="width:350px;height:200px;">
                            <div class="overlay">
                                <div class="img-overlay">
                                    <button>
                                        DETAIL
                                    </button>
                                    <button class="trailer-btn" onclick="detail()">
                                        TRAILER
                                    </button>
                                </div>
                            </div>
                            <div class="popular-desc">
                                <div class="movie-title">Spider-Man: No Way Home</div>
                                <div class="relase-date">2002-08-10</div>
                                <div class="genre">Petualangan</div>
                            </div>
                            <img src="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" alt="">
                        </div>
                        <div class="popular-card swiper-slide" style="width:350px;height:200px;">
                            <div class="overlay">
                                <div class="img-overlay">
                                    <button>
                                        DETAIL
                                    </button>
                                    <button class="trailer-btn" onclick="detail()">
                                        TRAILER
                                    </button>
                                </div>
                            </div>
                            <div class="popular-desc">
                                <div class="movie-title">Spider-Man: No Way Home</div>
                                <div class="relase-date">2002-08-10</div>
                                <div class="genre">Petualangan</div>
                            </div>
                            <img src="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" alt="">
                        </div>
                        <div class="popular-card swiper-slide" style="width:350px;height:200px;">
                            <div class="overlay">
                                <div class="img-overlay">
                                    <button>
                                        DETAIL
                                    </button>
                                    <button class="trailer-btn" onclick="detail()">
                                        TRAILER
                                    </button>
                                </div>
                            </div>
                            <div class="popular-desc">
                                <div class="movie-title">Spider-Man: No Way Home</div>
                                <div class="relase-date">2002-08-10</div>
                                <div class="genre">Petualangan</div>
                            </div>
                            <img src="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" alt="">
                        </div>
                        <div class="popular-card swiper-slide" style="width:350px;height:200px;">
                            <div class="overlay">
                                <div class="img-overlay">
                                    <button>
                                        DETAIL
                                    </button>
                                    <button class="trailer-btn" onclick="detail()">
                                        TRAILER
                                    </button>
                                </div>
                            </div>
                            <div class="popular-desc">
                                <div class="movie-title">Spider-Man: No Way Home</div>
                                <div class="relase-date">2002-08-10</div>
                                <div class="genre">Petualangan</div>
                            </div>
                            <img src="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" alt="">
                        </div>
                        <div class="popular-card swiper-slide" style="width:350px;height:200px;">
                            <div class="overlay">
                                <div class="img-overlay">
                                    <button>
                                        DETAIL
                                    </button>
                                    <button class="trailer-btn" onclick="detail()">
                                        TRAILER
                                    </button>
                                </div>
                            </div>
                            <div class="popular-desc">
                                <div class="movie-title">Spider-Man: No Way Home</div>
                                <div class="relase-date">2002-08-10</div>
                                <div class="genre">Petualangan</div>
                            </div>
                            <img src="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
}

customElements.define('popular-movies', popularMovies);