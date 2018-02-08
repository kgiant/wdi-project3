const express         = require('express');
const mongoose        = require('mongoose');
const bluebird        = require('bluebird');
mongoose.Promise      = bluebird;
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
// const session         = require('express-session');
// const User            = require('./models/user');
const flash           = require('express-flash');
const { port, dbURI } = require('./config/environment'); //secret
const customResponses = require('./lib/customResponses');
const errorHandler    = require('./lib/errorHandler');
const routes          = require('./config/routes');
const dest            = `${__dirname}/public`;
const app             = express();
mongoose.connect(dbURI);

app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(flash());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(dest));
app.use(customResponses);
app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
app.use(errorHandler);


app.listen(port, () => console.log(`Express is running on port: ${port}`));

// const env        = app.get('env');
// const { port, db }    = require('./config/environment');
// const { port, env, dbURI, sessionSecret } = require('./config/environment'); //wdi2
// mongoose.connect(db, env); /// db[env] change to mongoose if use old setup
