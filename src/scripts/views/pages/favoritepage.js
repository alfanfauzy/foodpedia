import "../components/restaurant-list";
import "../components/empty-component";
import FavoriteRestaurantDb from "../../data/favorite-restaurant-db";
import { createPageLoaderTemplate } from "../templates/template";

const Favorite = {
    async render() {
        const html = `
      ${(document.querySelector("main").innerHTML =
          createPageLoaderTemplate.show())}
        <section class="content" id="content">
            <h1 class="favorite-title">Favorite Restaurant</h1>
            <div class="posts" id="posts">
                <restaurant-list></restaurant-list>
            </div>
        </section>
    `;
        return html;
    },
    async afterRender() {
        const postContainer = document.querySelector("restaurant-list");
        const restaurants = await FavoriteRestaurantDb.getAllRestaurants();
        if (restaurants.length > 0) {
            postContainer.value = restaurants;
        } else {
            document.querySelector("#posts").innerHTML =
                "<empty-component></empty-component>";
        }
        createPageLoaderTemplate.remove();
    },
};

export default Favorite;
