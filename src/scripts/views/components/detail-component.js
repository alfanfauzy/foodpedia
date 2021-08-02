import CONFIG from '../../global/config';
import FormReviewInitiator from '../../utils/form-review-initiator';
import FavoriteButton from '../../utils/favorite-button';

class DetailComponent extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
    this._formInitiator();
    this._favoriteButton();
  }

  _templateRating() {
    const rate = [];

    for (let i = 0; i < parseInt(Math.floor(this._data.rating)); i++) {
      rate.push('<i class="fas fa-star"></i>');
    }
    return rate;
  }

  _formInitiator() {
    FormReviewInitiator.init({
      form: this.querySelector('#review-form'),
      container: this.querySelector('#review-container'),
    });
  }

  async _favoriteButton() {
    await FavoriteButton.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      notifContainer: document.querySelector('#notif-favorite-container'),
      restaurant: this._data,
    });
  }

  _render() {
    this.innerHTML = `
            <div id="notif-favorite-container" class="notif-favorite-container"></div>
            <h1 class="detail-title">${this._data.name}</h1>
            <article>
                <img src="${
  CONFIG.BASE_IMAGE_URL_SM + this._data.pictureId
}" class="detail-thumbnail" alt="${this._data.name}">
                <div id="likeButtonContainer"></div>
                <div class="detail-content">
                    <div class="header-content">
                        <div class="detail-category-container">
                            ${this._data.categories
    .map(
      (category) => `<span class="detail-category">${category.name}</span>`,
    )
    .join(' ')}
                        </div>
                        <div class="menu-rating">
                            <span>Rating ${this._data.rating}</span>    
                            ${this._templateRating()
    .map((item) => item)
    .join('')}
                        </div> 
                    </div>
                    
                    <div class="detail-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${this._data.address}, ${this._data.city}</span>
                    </div>
                    <p class="detail-description">${this._data.description}</p> 
                </div>
                <div class="wrapper-menu">
                    <div class="detail-menu">
                        <div class="menu-title-container">
                            <i class="fas fa-hotdog"></i>
                            <h2 class="menu-title">Makanan</h2>
                        </div>
                        <ul class="menu-list">
                            ${this._data.menus.foods
    .map(
      (food) => `<li class="menu-item">${food.name}</li>`,
    )
    .join(' ')}
                        <ul>
                    </div>

                    <div class="detail-menu">
                        <div class="menu-title-container">
                            <i class="fas fa-wine-glass-alt"></i>
                            <h2 class="menu-title">Minuman</h2>
                        </div>
                        <ul class="menu-list">
                            ${this._data.menus.drinks
    .map(
      (drink) => `<li class="menu-item">${drink.name}</li>`,
    )
    .join(' ')}
                        </ul>
                    </div>
                </div>
            </article>
            <section>
                <div class="wrapper-review">
                    <h2>Customer Review</h2>
                    <div id="review-container">
                    ${this._data.customerReviews
    .map(
      (review) => `
                        <div class="review-container">
                            <div class="review-photo-profile">
                                <img src="icon/artist.svg" alt="icon photo profile">
                            </div>
                            <div class="review-body">
                                <h3 class="review-consumer-name">${review.name}</h3>
                                <small class="review-date-post">${review.date}</small>
                                <p class="review-content">${review.review}</p>
                            </div>
                        </div>
                        `,
    )
    .join('')}
                    </div>
                    <div class="review-form-container">
                        <h2>Make a Review</h2>
                        <form class="review-form" id="review-form">
                            <input type="hidden" name="id" value="${
  this._data.id
}">
                            <div class="review-form-element">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" autocomplete="off">
                            </div>
                            <div class="review-form-element">
                                <label for="review">Review</label>
                                <textarea name="review" id="review"></textarea>
                            </div>
                            <button type="submit" id="button-review">Add Review</button>
                        </form>
                    </div>
                </div>
                
            </section>

            
            
        `;
  }
}

customElements.define('detail-component', DetailComponent);
