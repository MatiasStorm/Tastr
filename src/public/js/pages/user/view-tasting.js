import api from "../../api.js";
import Button from "../../components/button.js";
import RatingsView from "../../components/views/ratingsView.js";
import TastingView from "../../components/views/tastingView.js";
import ItemsView from "../../components/views/itemsView.js";
import routes from "../../routes.js";

export default class ViewTasting {
    constructor(tastingId) {
        this.tastingId = tastingId;
        this.launchTastingButton = new Button("launch-button", { size: "lg" });
        this.deleteButton = new Button("delete-button", { size: "lg", color: "red" });
        this.tasting = {};
    }

    fetchTasting() {
        api.get(`${api.endpoints.tasting}/${this.tastingId}`)
            .then((response) => response.json())
            .then((tasting) => {
                this.tasting = tasting;
                this.ratingView = new RatingsView("ratings", tasting);
                this.tastingView = new TastingView("tasting", tasting);
                this.itemsView = new ItemsView("items", tasting);
                this.ratingView.render();
                this.tastingView.render();
                this.itemsView.render();
                this.render();
            });
    }

    render() {
        this.launchTastingButton.render().on("click", () => {
            api.post(api.endpoints.heldTastings, {
                tastingId: this.tastingId,
            }).then((response) => {
                if (response.redirected) {
                    window.location.href = response.url;
                } else {
                    // Display error
                }
            });
        });
        this.deleteButton.render().on("click", () => {
            api.delete(api.endpoints.tasting, this.tasting.id)
                .then((res) => {
                    if (res.status < 400) {
                        window.location = routes.user.myTastings;
                    }
                });
        });
    }
}
