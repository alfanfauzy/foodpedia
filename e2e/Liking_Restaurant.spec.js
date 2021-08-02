const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
    I.amOnPage("/#/favorite");
});

Scenario("showing empty liked movies", ({ I }) => {
    I.seeElement("#posts");
    I.see("Empty Favorite Restaurant", ".icon-label");
});

Scenario("liking first restaurant", async ({ I }) => {
    I.seeElement("#posts");
    I.see("Empty Favorite Restaurant", ".icon-label");

    I.amOnPage("/");
    I.seeElement(".card-item__title a");

    const getFirstRestaurant = locate(".card-item__title a").first();
    const getFirstRestaurantTitle = await I.grabTextFrom(".card-item__title");
    I.click(getFirstRestaurant);
    I.seeElement("#likeButton");
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.seeElement(".card-item");
    const getLikedRestaurantTitle = await I.grabTextFrom(".card-item__title");

    assert.strictEqual(getFirstRestaurantTitle, getLikedRestaurantTitle);
});

Scenario("unliking first restaurant", async ({ I }) => {
    I.amOnPage("/");
    I.seeElement(".card-item__title a");
    I.click(locate(".card-item__title a").first());

    I.seeElement("#likeButton");
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.seeElement(".card-item__title a");
    const getFirstLikedRestaurant = locate(".card-item__title a").first();
    const getFirstLikedRestaurantTitle = await I.grabTextFrom(
        ".card-item__title"
    );
    I.click(getFirstLikedRestaurant);

    I.seeElement(".detail-title");
    const getLikedRestaurantTitle = await I.grabTextFrom(".detail-title");
    assert.strictEqual(getFirstLikedRestaurantTitle, getLikedRestaurantTitle);

    I.seeElement("[aria-label='unlike restaurant']");
    I.click("[aria-label='unlike restaurant']");

    I.amOnPage("/#/favorite");
    I.see("Empty Favorite Restaurant", ".icon-label");
});
