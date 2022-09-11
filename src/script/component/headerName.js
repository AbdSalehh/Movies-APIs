class headerName extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
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
            padding: 15px;
        }

        h2{ 
            color: #363636;
        }
        </style>
        <div class="header-name">
            <h2>Movies API</h2>
        </div>
        `;
    }
}

customElements.define('header-name', headerName);
