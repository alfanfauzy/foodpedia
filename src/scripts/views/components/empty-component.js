class EmptyComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
              <div class="icon-empty">
                  <i class="far fa-heart"></i>
              </div>
              <div class="icon-label">
                <p>Empty Favorite Restaurant</p>
              </div>
              <div class="icon-empty">
                  <i class="far fa-heart"></i>
              </div>
          `;
  }
}

customElements.define('empty-component', EmptyComponent);
