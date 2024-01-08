Run the following in your terminal to get started:

```no-highlight
et get brussels-sprouts-fetch-express
cd brussels-sprouts-fetch-express
yarn install
yarn run dev
```

If you visit <http://localhost:3000> in your browser, you should see the `Sprout Fetcher` header and two buttons. They look nice, but they don't do anything yet!

## We need Brussels sprouts recipes, stat!

We're getting nervous that our students are getting sick of Brussels sprouts, so we've decided to spruce them up. We need your help to build an app that will display either an exciting random Brussels sprouts recipe from our dataset, or all of the amazing sprout options as a list!

### What's going on here?

We have a file called `server/recipes.json` that has a JSON object of all of our Brussels sprouts recipes. If we take a look at our `server/src/routes/api/v1/recipesRouter.js` file, we have two API endpoints that return either one random recipe or all of the recipes as `json`.

We have an `App` component that will keep track of the random `recipe` (string), or the index `recipes` (array), and render a `RandomSprout` component and `SproutsIndex` component with whatever values are in `state`.

We also have two buttons: one which will handle `fetch`-ing a random recipe, and one which will handle `fetch`-ing all the recipes.

### Your Job

Our app looks nice, but it doesn't do anything! We need your help to get our recipes out of the `recipes.json` file and onto our page. You should:

- Write a `fetch` call in the `getRandomRecipe` method that will hit the `/api/v1/recipes/random` API endpoint. The endpoint will return a single recipe, which should be set in the state using `setRecipe`.

- Write a `fetch` call in the `getAllRecipes` method that will hit the `/api/v1/recipes` API endpoint. The endpoint will return an array of recipes, which should be set in the state using `setRecipes`.

- We don't want our random recipe and our index of recipes showing up on the page at the same time! Make sure the user can toggle between the two by clicking buttons.

### Bonus Challenge

Add the ability for a user to see the recipe with the longest name in your data file. You'll need to:

- Create a new API endpoint in `recipesRouter.js` that will return as `json` the recipe with the longest name.

- Write a new method to fetch the data from your new endpoint and set it into a property in state.

- Create a `LongestRecipe` component that will receive the longest recipe from props and display it in the `App` component.

- Write a new handler function to pass down to a new `See Longest Recipe` button that you create (see `handleRandomClick` as an example!)

#### Tips

- Visit `localhost:3000/api/v1/your-url` in your browser to see what data your endpoint is returning!
- Place a `debugger` anywhere in your API endpoint and visit the url in the browser to debug in your terminal.
- Place a `debugger` in your `then` statement in your `fetch` request to see what data you're passing through at any given point.
