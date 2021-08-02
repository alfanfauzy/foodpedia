class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
            <div class="hero__content">
                <h1 class="hero__title">FoodPedia</h1>
                <p class="hero__tagline">Good Food, Good Taste</p>
            </div>
        </div>
      `;
  }
}

customElements.define('hero-component', HeroComponent);
