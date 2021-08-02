import '../templates/restaurant-card';

class RestaurantList extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this._data.forEach((item) => {
      const restaurantItem = document.createElement('restaurant-card');
      this.appendChild(restaurantItem);
      restaurantItem.value = item;
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
