import CONFIG from "../../global/config";

class RestaurantCard extends HTMLElement {
    set value(data) {
        this._data = data;
        this._render();
    }

    _render() {
        this.innerHTML = `<article class="card-item">
                            <div class="card-item__thumbnail">
                                <img class="lazyload"
                                    src="${
                                        CONFIG.BASE_IMAGE_URL_SM +
                                        this._data.pictureId
                                    }"
                                    alt="${this._data.name}">
                                <span class="card-item__location">${
                                    this._data.city
                                }</span>
                            </div>
                            <div class="card-item__content">
                                <p class="card-item__rating">Rating : ${
                                    this._data.rating
                                }
                                </p>
                                <h1 class="card-item__title"><a href="#/restaurant/${
                                    this._data.id
                                }">${this._data.name}</a></h1>
                                <p class="card-item__description">${
                                    this._data.description
                                }</p>
                            </div>
                        </article>`;
    }
}

customElements.define("restaurant-card", RestaurantCard);
