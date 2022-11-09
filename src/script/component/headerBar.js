class headerBar extends HTMLElement {
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

        nav{
            background-color: #fff;
            box-shadow: 0 2px 20px 1px #e4fdde;
            color: #e7e7e7;
            display: flex;
            flex-direction: row-reverse;
            top: 0;
            align-items: center;
            position: sticky;
            border-bottom-width: 1px;
            border-bottom-style: solid;  
            width: 100%;
            font-family: 'Boogaloo', cursive;
            padding: 15px 80px 15px 80px;
            justify-content: space-between;
        }

        nav li {
            display: inline;
            padding: 0 10px 0 10px;
            list-style-type: none;
            font-family: 'Poppins',
                sans-serif;
        }

        nav li a {
            display: inline-block;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            color: #1B2631;
        }

        .navigation {
            display: flex;
            width: 100%;
            padding: 0px;
            padding-bottom: 0;
        }
        .name{ 
            color: #1B2631;
            font-size: 35px;
            font-weight: 600;
            text-decoration: none;
        }

        .nav a:hover {
            color: #95A5A6;
        }
        
        .item{
            display: flex;
            align-items: center;
        }

        .search{
            margin-right: 10px;
        }

        .icon {
            font-size: 25px;
            color: black;
            margin-right: 25px;
            cursor: pointer;
            display: none;
        }

        .icon2 {
            font-size: 27px;
            color: black;
            margin-right: 25px;
            cursor: pointer;
            display: none;
        }

        #check{
            display: none;
        }

        @media screen and (max-width: 800px) {
            nav{
                padding-right: 60px;
            }

            .icon{
                display: block;
            }

            .nav {
                text-align: center;
            }

            nav ul {
                top: 73px;
                width: 100%;
                height: 100%;
                position: fixed;
                background: #fff;
                right: -100%;
            }

            nav ul li {
                display: block;
                margin: 10px 0px 30px 0px;
                line-height: 30px;
            }

            nav ul li a {
                font-size: 20px;
                color: black;
            }

            #check:checked~ul {
                right: 0;
            }

            #check:checked ~ .item .icon {
                display: none;
            }

            #check:checked ~ .item .icon2 {
                display: block;
            }

            #check:checked ~ .item .search{
                margin-right: 15px;
            }
        }

        @media screen and (max-width: 950px) {
            nav{
                padding: 15px 30px 15px 40px;
            }
        }
        @media screen and (max-width: 950px) {
            nav{
                padding: 15px 20px 15px 40px;
            }
        }
        @media screen and (max-width: 532px) {
            .header-name {
                flex-direction: column-reverse;
            }

            .item{
                margin-top: 10px;
                width: 100%;
            }

            .search{
                width: 90%;
            }

            .icon, .icon2{ 
                margin-right: 0px;
                justify-content: end;
            }

            nav ul {
                top: 122px;
            }

        }

        </style>
        <nav class="header-name">
            <input type="checkbox" id="check">
            
            <div class="item">
                <div class="search" id="search">
                    <search-bar></search-bar>
                </div>
                <label for="check" class="icon">
                    <i class="fa fa-bars"></i>
                </label>
                <label for="check" class="icon2">
                    <i class="fa fa-xmark"></i>
                </label>
            </div>
            <ul class="nav" id="navigation">
                <li><a href="">Home</a></li>
                <li><a href="">TV</a></li>
                <li><a href="">Movies</a></li>
            </ul>
            <a class="name" href="">Movie APIs</a>
        </nav>
        `;
    }
}

customElements.define('header-bar', headerBar);
