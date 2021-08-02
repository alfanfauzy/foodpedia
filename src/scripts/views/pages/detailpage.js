import RestaurantData from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import '../components/detail-component';
import { createPageLoaderTemplate } from '../templates/template';

const Detail = {
  async render() {
    const html = `
        ${(document.querySelector('main').innerHTML = createPageLoaderTemplate.show())}
            <section id="content" class="content">
                <div class="detail-container">
                    <detail-component></detail-component>
                </div>
            </section>
        `;
    return html;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantData.getRestaurantDetailData(
      url.id,
    );
    const container = document.querySelector('detail-component');
    container.value = restaurantById.restaurant;
    createPageLoaderTemplate.remove();
  },
};

export default Detail;
