import FavoriteButton from "../../src/scripts/utils/favorite-button";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await FavoriteButton.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        notifContainer: document.querySelector("#notif-favorite-container"),
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };
