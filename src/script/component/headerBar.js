class headerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
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
