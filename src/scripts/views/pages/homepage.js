import '../components/hero-component';
import '../components/restaurant-list';
import RestaurantData from '../../data/restaurant-data';
import { createPageLoaderTemplate } from '../templates/template';

const Homepage = {
  async render() {
    const html = `
        ${(document.querySelector('main').innerHTML = createPageLoaderTemplate.show())}
            <hero-component></hero-component>
            <section class="content">
                <div id="loading"></div>
                <div class="latest">
                    <h1 class="latest__label">Our Special Restaurant</h1>
                        <restaurant-list></restaurant-list>
                </div>
            </section>
    `;

    return html;
  },

  async afterRender() {
    const getRestauranCard = document.querySelector('restaurant-list');
    const { restaurants } = await RestaurantData.getRestaurantListData();
    getRestauranCard.value = restaurants;
    createPageLoaderTemplate.remove();
  },
};

export default Homepage;
