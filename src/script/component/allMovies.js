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
            padding: 0px 40px 0px 30px;
            margin-bottom: 30px;
        }

        .movies-card {
            width: 150px;
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

        .movies-card span {
            font-size: 14px;
            position: absolute;
            font-weight: bold;
            background: rgba(255, 255, 255);
            padding: 5px;
            color: green;
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
            position: relative;
        }
        </style>
            <div id="content">
                <div class="all-movies-content">
                    <h2>All Movie</h2>
                </div>
                <div class="genres">
                <button class="btn-genres">Action</button>
                <button class="btn-genres">Adventure</button>
                <button class="btn-genres">Animation</button>
                </div>
            </div>
            <div class="card-item"></div>
        `;
    }
}

customElements.define('all-movies', allMovies);