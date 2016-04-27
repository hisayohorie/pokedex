# Pokedex

This is your opportunity to make your own Pokemon API and create a dyanmic and interactive front-end for it.

You can see a live demo of what we're building at [bitmaker-pokedex.herokuapp.com](https://bitmaker-pokedex.herokuapp.com/).

Provided in this code is a seed file that will populate your database with 100 Pokemon objects. That's the only model in this app. Each Pokemon character has an `image_url` and some properties, like `name`, `attack`, `defense`, etc. Check the `schema.rb` for all of the fields.

## Setup

1. Fork this repo
2. Run `bundle install`
3. Run `rake db:setup` (this should create the database, load the schema and initialize with seed data)

## Assignment

Your job is to create a JSON API for the Pokedex. You should only be concerned with the read actions to start (i.e. `index` and `show`).

1. Setup your controller so that it returns normal HTML responses for `index` and `show`.
2. Modify your actions to also return JSON responses for the requested Pokemon (you'll need to use `respond_to` for this). Return the full objects for now, don't try to limit the fields returned
  * Make sure this works by visiting http://localhost:3000/pokemons.json and http://localhost:3000/pokemons/20.json
3. Limit the data returned for each Pokemon object returned from the `index` action to just the `name` and the `image_url`
  * You can do this within the controller by defining your own `Hash`
  * Again, make sure this is working by checking http://localhost:3000/pokemons.json
  * **Stretch** > Figure out how to use [`jbuilder`](https://github.com/rails/jbuilder) to move this logic into a view and still get the correct output
4. Add the [Handlebars](http://handlebarsjs.com/) JS library to your project
  * You can add it by downloading it and putting it in `/vendor/assets/javascripts` and adding it to your `application.js`
  * You can add a `javascript_include_tag` to your `application.html.erb` and  use the CDN version
5. Create two templates for displaying your Pokemon, one for the list and one for the full details
  * You'll probably want to add these templates to your `index.html.erb`
  * Follow the instructions on the Handlebars homepage for creating a template (they'll be in `<script>` tags with `id` and `type` attributes)
6. Add an event handler so when you click on the name of a Pokemon, the details are dynamically updated in a `<div>` reserved for them


---
## Stretch Assignments

* Look into precompiling your Handlebars templates using the [`handlebars_assets`](https://github.com/leshill/handlebars_assets) gem
* Figure out a way to add new Pokemon cards to your database using [pokegem](https://github.com/baweaver/pokegem)
  * **Double Stretch!** Make it so new Pokemon get added via AJAX!
