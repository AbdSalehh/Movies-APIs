class headerName extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .header-name {
            background-color: #fff;
            box-shadow: 0 2px 20px 1px #e4fdde;
            color: #e7e7e7;
            display: flex;
            top: 0;
            align-items: center;
            justify-content: center;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            transition: 0.4s;    
            width: 100%;
            font-family: 'Boogaloo', cursive;
            padding: 15px 80px 15px 80px;
            justify-content: space-between;
        }

        .header-name li {
            display: inline;
            list-style-type: none;
            margin-right: 20px;
            font-family: 'Poppins',
                sans-serif;
        }

        .header-name li a {
            display: inline-block;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            color: #1B2631;
        }

        .name{ 
            color: #1B2631;
            font-size: 35px;
            font-weight: 600;
        }

        .nav a:hover {
            color: #95A5A6;
        }

        .search {
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            margin-top: 0px !important;
        }

        .search-box {
            display: flex;
            height: 40px;
            background-color: #F2F3F4 !important;
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
            color: #1B2631;
            font-size: 14px;
            transition: 0.4s;
            font-family: 'Poppins';
        }

        #searchSubmit {
            float: right;
            border: 1px solid;
            border-color: #fff;
            background-color: #fff;
            border-radius: 50%;
            padding: 7px;
        }

        #searchSubmit i {
            font-size: 17px;
            color: #1B2631;
        }

        #searchSubmit i:hover {
            color: #1B2631;
        }
        
        </style>
        <div class="header-name">
            <div class="name">Movie APIs</div>
            <ul class="nav" id="navigation">
                <li><a class="navbar1" href="">Home</a></li>
                <li><a class="navbar2" href="">TV</a></li>
                <li><a class="navbar3" href="">Movies</a></li>
            </ul>
            <div class="search" id="search">
                <div class="search-box shadow">
                    <input id="search-txt" class="search-txt" type="text" name=""
                        placeholder="Ketik judul film disini..">
                    <button id="searchSubmit" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <div class="BookCard">
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('header-name', headerName);
