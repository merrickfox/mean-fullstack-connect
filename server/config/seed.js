/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Bruce Wayne',
    email: 'bruce@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, {
    provider: 'local',
    name: 'Alfred',
    email: 'Alfred@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'Rob',
    email: 'rob@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'Jim Gordon',
    email: 'jim@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'Ra\'s Al Ghul',
    email: 'ras@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'Lucius Fox',
    email: 'Lucius@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'Harvey Dent',
    email: 'Harvey@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'Bane',
    email: 'Bane@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'The Joker',
    email: 'joker@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
