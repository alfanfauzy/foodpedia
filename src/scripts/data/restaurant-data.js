import CONFIG from "../global/config";
import API_ENDPOINT from "../global/api-endpoint";

class RestaurantData {
    static async getRestaurantListData() {
        const response = await fetch(API_ENDPOINT.LIST);
        return response.json();
    }

    static async getRestaurantDetailData(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async sendRestaurantReview(data) {
        console.log(data);
        const dataJson = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": CONFIG.KEY,
            },
            body: JSON.stringify(data),
        };
        console.log(dataJson);

        const response = await fetch(API_ENDPOINT.POST_REVIEW, { dataJson });

        console.log(response);
        return response.json();
    }
}

export default RestaurantData;
