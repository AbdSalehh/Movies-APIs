class searchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchText').value;
    }

    render() {
        this.innerHTML = `
            <div class="search-box shadow">
                <input id="searchText" class="search-txt" type="text" name=""
                    placeholder="Ketik judul film disini..">
                <button id="searchSubmit" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        `;
        this.querySelector('#searchSubmit').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', searchBar);
