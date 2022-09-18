class allMovies extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        
        .card-item {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1.1rem;
            padding: 0px 30px 0px 30px;
            margin-bottom: 30px;
        }

        .movies-card {
            height: 280px;
            border-radius: 5px;
            object-fit: cover;
            position: relative;
        }

        .rate{
            display:flex;
            justify-content: flex-end;
            margin-right: 5px;
        }

        .green{
            color: green;
        }

        .orange{
            color: #F39C12;
        }

        .red{
            color: red;
        }

        .movies-card span {
            font-size: 14px;
            position: absolute;
            font-weight: bold;
            background: rgba(255, 255, 255);
            padding: 5px;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            margin-top: 5px;
            justify-content: center;
            align-items: center;
            display: flex;
        }

        .desc{
            padding: 0px 10px 10px 0px;
        }
        
        .movies-card img {
            width: 100%;
            height: 75%;
            object-fit: cover;
            border-radius: 5px;
            display: block;
        }

        .all-movies-content {
            display: flex;
            width: 100%;
            background-color: #F2F3F4;
            border-radius: 5px;
            justify-content: space-between;
            margin-bottom: 20px;
            align-items: center;
            padding: 4px;
        }

        .desc .movie-title{
            font-size: 16px;
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
        
        .movies-card .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 75%;
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
            curson: pointer;
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

        .movies-card:hover .movie-title {
            color: #515A5A;
        }

        .genres{
            display: inline;
            margin: 0px 15px 0px 0px;
            background-color: #FFF;
            padding: 8px;
            border-radius: 8px;
            text-align: center;
            transition: all 1s ease;
        }

        .genres input{
            display: none;
        }
        
        .genres label{
            position: relative;
            cursor: pointer;
            user-select: none;
            font-size: 15px;
            padding: 5px;
            font-weight: 600;
        }

        .genres input:checked + label, .genres label:hover{ 
            color: #000;
        }

        .genres input:checked + label{
            border-radius: 8px;
            background-color: rgb(242, 243, 244, 0.9);
        }

        @media screen and (max-width: 1050px) {
            .card-item{
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            }
        }

        @media screen and (max-width: 710px) {
            
            .all-movies-content {
                flex-direction: column;
                padding: 0px 0px 10px 15px;
            }

            h2{
                margin: 0px 0 0px 0;
            }
        }
        </style>
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

customElements.define("all-movies", allMovies);