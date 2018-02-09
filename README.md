![screen shot 2018-02-09 at 9 25 13 am](https://user-images.githubusercontent.com/9730370/36020617-3aac5f88-0d7b-11e8-8a0f-28ad96a4ae2e.png)

# WDI-Project3
## About
### Project Context
The following work was delivered as part of the coursework of the Full-Stack Web Development Immersive course @ General Assembly, London (#WDI31) and is my second full-stack application after 6 weeks of classes, this time working also with Angular and APIs!
### The "Vision"
To develop a full-stack application that pulls 3rd party digital currency data and presents them in different ways as well as offering to a registered user a self-publishing functionality.
###Project Plan & Review
Immediately after the initial planning phase, I decided to hold off any dev work so that I can go thoroughly through all the notes & classwork including those of the previous module. Even though this blanked out two days of work, it helped me catch up quickly with fewer erros and cleaner code.
The initial plan was as follows:
![screen shot 2018-02-07 at 9 52 50 pm](https://user-images.githubusercontent.com/9730370/36020991-5bd9d5d6-0d7c-11e8-926e-322a4433410e.png)
![screen shot 2018-02-07 at 9 53 18 pm](https://user-images.githubusercontent.com/9730370/36020968-49f74aa6-0d7c-11e8-86f6-662acc3c890e.png)
The public access of the project and github repository are at [Heroku](https://git.heroku.com/limitless-bastion-40061.git) and [Github](https://github.com/kgiant/wdi-project3) respectivelly.


## The Application
###Audience - Who is it for?
With the planned additional features the app aims to appeal to
* General audience with an interest in cryptocurrencies
* Professionals seeking additional strategic insight into the industry dynamics

###User Stories - What do they want?
Definitions:
* Visitor(V) is defined as someone who visits visits & interacts with the website without registering and loging in
* User(U) is defined as someone who visits visits & interacts with the website while logged in.

The basic User Stories backlog includes:
* As a VU i want to see the a summary of the financial performance of all currencies
* As a VU I want to see more info about a specific currency
* As a VU i want to see insightfull charts and visuals
* As a VU I want to access industry articles
* As a U I want to publish my own articles
* As a U I want to access additional Price & Industry information
* As a U I want to see the calendar of upcoming ICOs

###Wireframes - What could it look like?
![screen shot 2018-02-01 at 8 44 59 pm](https://user-images.githubusercontent.com/9730370/36021048-84336f92-0d7c-11e8-9c7e-5dfc48424be0.png)

###Technology Stack
The MEAN technology stack was used for this application and more specificaly for the back-end:
  "dependencies": {
    "bcrypt": "^1.0.3",
    "bluebird": "^3.5.1",
    "body-parser": "^1.18.2",
    "express": "^4.14.0",
    "express-flash": "^0.0.2",
    "express-session": "^1.15.6",
    "jsonwebtoken": "^8.1.1",
    "method-override": "^2.3.10",
    "mongoose": "^5.0.1",
    "morgan": "~1.6.1",
    "request-promise": "^4.2.2"
  },
  "devDependencies": {
    "babel-cli": "^6.18.0",
    "babel-preset-es2015": "^6.18.0",
    "bower": "^1.8.0",
    "browser-sync": "^2.17.6",
    "event-stream": "^3.3.4",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-babel": "^6.1.2",
    "gulp-clean": "^0.3.2",
    "gulp-concat": "^2.6.0",
    "gulp-htmlhint": "^0.3.1",
    "gulp-htmlmin": "^3.0.0",
    "gulp-if": "^2.0.2",
    "gulp-imagemin": "^3.1.1",
    "gulp-inject": "^4.1.0",
    "gulp-jshint": "^2.0.2",
    "gulp-minify-css": "^1.2.4",
    "gulp-nodemon": "^2.2.1",
    "gulp-notify": "^2.2.0",
    "gulp-order": "^1.1.1",
    "gulp-plumber": "^1.1.0",
    "gulp-rename": "^1.2.2",
    "gulp-replace": "^0.5.4",
    "gulp-sass": "^2.3.2",
    "gulp-sourcemaps": "^2.2.0",
    "gulp-strip-css-comments": "^1.2.0",
    "gulp-uglify": "^2.0.0",
    "htmlhint-stylish": "^1.0.3",
    "jshint": "^2.9.4",
    "jshint-stylish": "^2.2.1",
    "main-bower-files": "^2.13.1",
    "require-dir": "^0.3.1"
  }
  And for the front-end:
    "dependencies": {
    "angular": "^1.4.8",
    "angular-ui-router": "^1.0.14",
    "angular-messages": "^1.6.9",
    "angular-resource": "^1.6.9",
    "bootstrap-css-only": "^4.0.0",
    "angular-bootstrap": "^2.5.0",
    "angular-animate": "^1.6.9",
    "satellizer": "^0.15.5",
    "angular-chart.js": "^1.1.1"
  },

###API
The Coincap API was used
https://github.com/CoinCapDev/CoinCap.io
* For coin rankings: http://coincap.io/front
* For global coin data: http://coincap.io/global
* For coin data: http://coincap.io/page/ETC
* For coin historic data: http://coincap.io/history/BTC
Thanks guys!

###Charts
The following library was used for charts
http://jtblin.github.io/angular-chart.js/

###Models
The following models were put in place:
1. coin.js for coin specific data
2. global.js for some aggregate coin market data
3. coinHistory.js for historic coin pricing data
4. coinindex.js for a small set of coin data for use in a rankings table
5. post.js for the self-published articles
6. user.js for the user profile and registration

###Application Overview
The following screenshots provide a quick run-through the application. There is a public and a registered user view of the site. Registered Users can also CUD articles.
**Home (/)**: this is static for now as the desired references were not completed.
<img width="1261" alt="screen shot 2018-02-08 at 11 46 19 am" src="https://user-images.githubusercontent.com/9730370/36020879-0dd46036-0d7c-11e8-8871-9057138d597e.png">
**Coins (/coins)**: providings a complete listing of the Coincap front page api. Selecting a coin will take you to the respective coin-page.
![screen shot 2018-02-09 at 9 13 06 am](https://user-images.githubusercontent.com/9730370/36020734-8a6311ca-0d7b-11e8-87b0-8a1d3d4f08ec.png)
**Coin page (/coins/:id)**: provides coin specific data and uses two types of chart.js charts
![screen shot 2018-02-09 at 9 12 48 am](https://user-images.githubusercontent.com/9730370/36020749-98eba978-0d7b-11e8-8c1c-b6f927f21164.png)
**News (/posts)**: provides a listing of news articles. Logged in Users can choose create a new article
![screen shot 2018-02-09 at 9 15 25 am](https://user-images.githubusercontent.com/9730370/36020687-6a08c06e-0d7b-11e8-9276-a3e2327ed54f.png)
**Article (/posts/:id)**; this is the article page. Logged in Users can Edit or Delete articles
![screen shot 2018-02-09 at 9 15 52 am](https://user-images.githubusercontent.com/9730370/36020648-50962586-0d7b-11e8-990b-0d707f1393ca.png)
**Publich new article (/posts/new)**
<img width="1220" alt="screen shot 2018-02-08 at 1 52 36 pm" src="https://user-images.githubusercontent.com/9730370/36020776-b204915e-0d7b-11e8-9d9a-c591ddbbbd3d.png">
**Registration form (/register)**
<img width="1227" alt="screen shot 2018-02-08 at 1 48 47 pm" src="https://user-images.githubusercontent.com/9730370/36020829-e647a41a-0d7b-11e8-8eb8-d9854ae1b453.png">
**Login form (/new)**
<img width="1197" alt="screen shot 2018-02-08 at 1 49 06 pm" src="https://user-images.githubusercontent.com/9730370/36020814-d8f2eafe-0d7b-11e8-8891-3cb49335b4bf.png">

##Technical Deliverables
In brief, the following where delivered and are included in this repository
* development plan and wireframes
* Front-page views/router/controllers/factory using Angular and Bootstrap CSS-only, making use of chartjs with 2 of the APIs properly setup
* 6 models and sample data, of which the 4 are used for the diffeerent API calls
* Back-end routers and controllers with all 4 API calls working
* Angular authentication, error handling and custom responses
