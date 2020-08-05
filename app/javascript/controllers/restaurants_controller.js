import { Controller } from "stimulus";
import Rails from "@rails/ujs";

export default class extends Controller {
  connect() {
    console.log('Hello from rest controller!');
  }
  
  delete() {
    const restaurantID = this.element.id;
    Rails.ajax(
      {
        type: "delete",
        url: `/restaurants/${restaurantID}`,
        // url: this.data.get('url'),
        success: function(data) {
          // If you have any data, you can console log
          // console.log(data)

          // Remove the restaurant from the DOM
          document.getElementById(`restaurant-${restaurantID}`).remove();
        }
      }
    )
  }
}
