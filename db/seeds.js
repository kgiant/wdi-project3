const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project3-${env}`;
mongoose.connect(dbURI);

// const { dbURI } = require('../config/environment');
const User = require('../models/user');
const Posts = require('../models/post');
// const { env, db }    = require('../config/environment');
// mongoose.connect(db, env);



User.collection.drop();
Posts.collection.drop();

//two users created here with and without admin rights
User
  .create([{
    organization: 'myCompany',
    status: 'Admin',
    name: 'Konstantinos',
    // image: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAAp5AAAAJDA1YjdkNDQ4LWEyOGItNGFmMy05OTM4LWU4MGNlZjViM2VlNw.jpg',
    email: 'kgiant@wtmnews.com',
    password: 'k',
    passwordConfirmation: 'k'
  }, {
    organization: 'A company',
    name: 'Nick',
    email: 'n@n.com',
    password: 'n',
    passwordConfirmation: 'n'
  }])
  .then(users => {
    console.log(`${users.length} users created`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

Posts
  .create([{
    title: 'ICO Tokens Are Already Changing Traditional Startups',
    article: 'It wasn t so long ago that scraping a flat fee off of a user s transaction was a reliable revenue model. But with the advent of cryptocurrencies, a new wave of startups is beginning to set its sights on something different, with mainstream brands like Telegram and Kik pivoting to embrace an alternative model that wasn t yet possible when they launched. If you have been confused about the announcements, there is a simple idea close to the center – namely, that companies in question could use cryptocurrencies to distribute revenue in a more equitable way, using a digital asset that behaves like bitcoin or ether in that it gives users an actual, tradeable stake in a platform s growth. It works like this: companies issue a certain number of crypto tokens (keeping a percentage for themselves) to be used on a platform now or in the future. If users see value in the platform, they will purchase the tokens needed to interact with that platform. Yet, since the amount of crypto tokens is limited, supply and demand pushes the value of the token up (or down). And as the company holds a reserve of the tokens, the value of that reserve fluctuates as well.',
    image: 'https://media.coindesk.com/uploads/2018/01/shutterstock_1001115-550x550.jpg'
  }, {
    title: '7 Tough Legal Lessons for Crypto Entrepreneurs',
    article: 'One day you are a crypto-millionaire, the next you are a crypto-defendant. Initial coin offerings (ICOs) made crypto-news throughout 2017. Announcements of new offerings became a flood as winter turned to spring and then summer. As 2017 closed, an assortment of ICO litigation has followed. What is the good news? If I am making lemons out of lemonade, we will have more clarity from regulators and courts. Some might argue that the clarity was already contained in the rules and cases but the abstraction has been made real by the mistakes of others. And it you are a crypto-entrpreneur in 2018, this is a good thing.',
    image: 'https://media.coindesk.com/uploads/2018/02/law-book-and-gavel-550x550.jpg'
  }, {
    title: 'The Crypto Market Is Down Over 50% from 2018 Highs',
    article: 'The total value of all publicly traded cryptocurrencies hit a combined $366 billion today, the lowest figure observed for the market since Dec. 4, data from CoinMarketCap reveals. The more than 60-day low, however, can also be read more bearishly, as it represents a 50 percent drop from the markets all-time high above $830 billion in early January. Indeed, for the second time in just four days, the market is awash with double-digit declines, as in just a few short weeks a combination of new buyer fatigue and negative news appears to have taken its toll. This time, the culprit may be speculation that new buyers may be further discouraged due to reports China could further restrict domestic buyers from overseas market resources, while major credit card issuers across the globe are reportedly restricting access to cryptocurrency buying.',
    image: 'https://media.coindesk.com/uploads/2018/01/Red-calculator-550x550.jpg'
  }])
  .then((posts) => {
    console.log(`${posts.length} posts created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => mongoose.connection.close());
  
