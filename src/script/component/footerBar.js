class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container">
                <div id="sejarah" class="card satu">
                    <h3>Support</h3>
                    <img src="../../image/logo-dicoding.png" class="featured-image" alt="logo dicoding">
                    <img src="../../image/logo-umm.webp" class="featured-image kedua" alt="logo UMM">
                </div>
                <div id="sejarah" class="card dua">
                    <h3>Contact Me</h3>
                    <p> Alamat : Jl. Notojoyo No. 95, Batu, Tegalgondang, Karangploso,
                        Malang, Jawa Timur</p>
                    <p class="normal"> Phone : +6282345678910</p>
                    <p class="normal"> Email 1 : -</p>
                    <p class="normal"> Email 2 : -</p>
                </div>
                <div id="sejarah" class="card tiga">
                    <h3>Follow Me</h3>
                    <p> +6282345678910</p>
                </div>
            </div>
            <div class="foot">
                <p>Belajar Fundamental Front-End Web &#169; 2022, Dicoding Academy</p>
            </div>
        `;
    }
}

customElements.define('footer-bar', footerBar);
