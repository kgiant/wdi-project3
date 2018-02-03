module.exports = {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV,
  secret: process.env.SECRET,
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost/wdi-group-project-development',
    test: 'mongodb://localhost/wdi-group-project-test'
  }
};


// const port          = process.env.PORT || 3000;
// const env           = process.env.NODE_ENV || 'development';
// const dbURI         = process.env.MONGODB_URI || `mongodb://localhost/project2-${env}`;
// const sessionSecret = process.env.SESSION_SECRET || 'YghT5s617/1{%sDt';
//
// module.exports = { port, env, dbURI, sessionSecret };
