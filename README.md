# Representative Tracker

![image](https://user-images.githubusercontent.com/36015215/49393403-585ded00-f6ee-11e8-9255-c8abd5fbc4b2.png)

Representative Tracker (shown on the deployed application as Congress Tracker) is a fully functioning application that allows a user to find their representatives and senators for the United States Congress by state. When you click on an individual congressperson's name, you are taken to their page which also shows the 20 most recent news articles that mention their name.

Please note that due to the back-end site being hosted for free on Heroku, it can take a couple of seconds for the            server to boot up and load the data the first time you make a request. Please be patient!

Representative Tracker pulls its API data from the back-end project [Congress](https://github.com/TCraig7/Congress).

## Future Features

* The ability to find your nearest polling locations for individual elections, based on your address
* A live Twitter feed for each chamber of the United States Congress
* A live twitter feed for individual members of congress that displays on their pages

## Running the Server Locally
1. Once you have cloned down the repo, install the dependencies:

  ```
  npm install
  ```

2. You can start a local server by entering in the console:

```
npm start
```

Once the server is running, visit in your browser:

* `http://localhost:8080/`


## Built With

* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)
