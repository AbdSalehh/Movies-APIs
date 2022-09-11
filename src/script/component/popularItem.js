import './styles/style.css';
import './styles/swiper-bundle.min.css';

class popularItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>

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

customElements.define("popular-item", popularItem);