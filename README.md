# simple-twitter-aggregtor
This is a simple twitter aggregator app. It takes a search input, and then searches tweets within the last 7 days for tweets that have matching content (this includes @'s and #'s). It then displays the 10 most recent posts that match the search. 

This app is split into two parts: 1) The Backend 2) The Frontend

The app requires both parts to run. 

# Setup

## Requirements

Node JS
npm or yarn

A twitter app: `https://apps.twitter.com/`

## Backend

Within backend directory, run: `npm install`
This installs all the dependencies for the backend.

Twitter requires authentication to use their API. This requires creating a twitter app in order to get the necessary keys and passwords to access the API. This tutorial can help walk you through these steps: `https://iag.me/socialmedia/how-to-create-a-twitter-app-in-8-easy-steps/`

Once you have that setup, in the backend directory create a new file called: `config.js`

Inside this file add the following code: 
```js
module.exports = {
  "consumer_key": "XXX",
  "consumer_secret": "XXX",
  "access_token_key": "XXX",
  "access_token_secret": "XXX",
  "cors_whitelist": "*",
}
```

This file contains sensitive information now, so be careful not to share it with anyone else!

Finally, to start the backend server, simple run: `npm start`
And voila! Your backend server for communicating with twitter is now running.


## Frontend

Within the frontend directory, run: `npm install`
This installs all the dependencies for the frontend.

To run the app, run: `npm start`
This will open up a locally running version of your app at `http://localhost:3000`
(If it does not automatically open, just type that url into your browser)

And there you have it! You should be able to see the twitter aggregator in action in your browser.

# Production

Again, for production you need to have both parts of this app implemented for it to work. 

## Backend

Set up the backend on server.

## Frontend

In the fontend update the environment variable to reference the backend server. You can do this by adding the following to your package.json:
```js
{
  "env": {
    "API_URL": "https://your-backend-url.com"
  }
}
```
Then create the production build of the app by running: `npm build`

Upload the code from the /build folder to a front end server and let the world enjoy your app!
