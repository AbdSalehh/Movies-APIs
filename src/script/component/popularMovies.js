class popularMovies extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>

        .popular-content{
            display: flex;
            width: 100%;
            background-color: #F2F3F4;
            border-radius: 5px;
            justify-content: space-between;
            align-items: center;
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
            padding: 4px;
        }

        h2{
            margin: 10px 0 10px 15px;
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

        .popular-desc .movie-title{
            max-width: 300px;
            font-size: 18px;
            font-weight: 600;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .relase-date, .genre{
            font-size: 13px;
        }

        @media screen and (max-width: 950px) {
            .popular-content{
                padding: 0px 0px 3px 10px;
            }
        </style>
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