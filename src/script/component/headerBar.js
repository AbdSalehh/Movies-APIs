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
            text-decoration: none;
        }

        .nav a:hover {
            color: #95A5A6;
        }
        
        </style>
        <div class="header-name">
            <a class="name" href="">Movie APIs</a>
            <ul class="nav" id="navigation">
                <li><a class="navbar1" href="">Home</a></li>
                <li><a class="navbar2" href="">TV</a></li>
                <li><a class="navbar3" href="">Movies</a></li>
            </ul>
            <div class="search" id="search">
                <search-bar></search-bar>
            </div>
        </div>
        `;
    }
}

customElements.define('header-bar', headerBar);
