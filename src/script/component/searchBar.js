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
        <style>
        
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

        .search-box > button{
            cursor: pointer;
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

customElements.define("search-bar", searchBar);