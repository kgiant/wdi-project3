const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// const { dbURI } = require('../config/environment');
const User = require('../models/user');
const { env, db }    = require('../config/environment');
// mongoose.connect(dbURI);  //ISSUE, not refering to the right place
mongoose.connect(db[env]);

User.collection.drop();

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
  .then(users => console.log(`${users.length} users created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
