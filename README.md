# GOAL

This is a demo to show-case how to implement AJAX in rails not using the [`turbolinks gem`](https://github.com/turbolinks/turbolinks).

We'll use the old way with `respond_to`.

[You can also check my other demos](https://github.com/andrerferrer/dedemos/blob/master/README.md#ded%C3%A9mos).

## What needs to be done?

### 1. Add `remote: true` to the link
On your [view](https://github.com/andrerferrer/respond-to-ajax-demo/blob/master/app/views/restaurants/index.html.erb).
```erb
<%= link_to '❌', restaurant, method: :delete, remote: true, data: { confirm: "Are you sure?" } %>
```

### 2. Add to the [controller](https://github.com/andrerferrer/respond-to-ajax-demo/blob/master/app/controllers/restaurants_controller.rb)
We'll add the respond_to

```ruby
def destroy
  set_restaurant
  @restaurant.destroy
  respond_to do |format|
    format.js
  end
end
```

### 3. Create the `js.erb` [view](https://github.com/andrerferrer/respond-to-ajax-demo/blob/master/app/views/restaurants/destroy.js.erb)

In the `destroy.js.erb` we will write the js that will return. With this JS we will remove the element from the DOM.

```js
document.getElementById("restaurant-<%= @restaurant.id %>").remove()
```

And we're good to go 🤓
Good Luck and Have Fun
