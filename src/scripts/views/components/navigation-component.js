class NavigationComponent extends HTMLElement {
    connectedCallback() {
        this._render();
    }

    _render() {
        this.innerHTML = `
        <header class="header">
            <div class="header__image">
                    <h1 class="header__title">FoodPedia</h1>
            </div>
            <a id="hamburger" class="header__menu" href="#">☰</a>
            <nav id="drawer" class="header__nav">
                <ul class="header__nav__list">
                    <li class="header__nav__item"><a href="#">Home</a></li>
                    <li class="header__nav__item"><a href="#/favorite">Favorite</a></li>
                    <li class="header__nav__item"><a href="https://linkedin.com/in/alfan-fauzy" target="_blank" rel="noreferrer">About Us</a></li>
                </ul>
            </nav>
        </header>
      `;
    }
}

customElements.define("navigation-component", NavigationComponent);
