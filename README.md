# GOAL

This is a demo to show-case how to implement AJAX in rails  using the [`stimulus.js`](https://stimulusjs.org/).

[You can also check my other demos](https://github.com/andrerferrer/dedemos/blob/master/README.md#ded%C3%A9mos).

## What needs to be done?

### 1. Add `stimulus.js` to the rails app with webpacker
```
rails webpacker:install:stimulus
```

### 2.  Handle it the stimulus way

[Check the stimulus handbook for more.](https://stimulusjs.org/handbook/introduction)

- Create the controller
app/javascript/controller

```js
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
```

- Add data-controller to the HTML element
app/views/restaurants/index.html.erb
```ruby
<%= link_to '❌', 
    '#',
    id: restaurant.id,
    remote: true, 
    data: { confirm: "Are you sure?", 
            controller: 'restaurants',
            action: 'click->restaurants#delete' } %>
```

And we're good to go. 🤓

Good Luck and Have Fun.
