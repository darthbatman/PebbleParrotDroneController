/*
 Rishi Masand
 January 16-18, 2015
 PennApps 11
 */

var UI = require('ui');
var ajax = require('ajax');
var Accel = require('ui/accel');

Accel.init();

Accel.config(100, 25, false);

var splashScreen = new UI.Card({ banner: 'images/FlyrSplash2.png' });
splashScreen.show();

var main = new UI.Card({
  action: {
    up: 'images/UpArrow.png',
    down: 'images/DownArrow.png',
    select: 'images/TakeOffLanding.png'
  },
  body: 'Up to increase altitude. Select to take off/land. Down to decrease altitude.',
  fullscreen: true
});

setTimeout(function() {
  // Display the mainScreen
  main.show();
  // Hide the splashScreen to avoid showing it when the user press Back.
  splashScreen.hide();
}, 2400);


Accel.on('tap', function(e) {
  console.log("Connecting to server ...");
  ajax({url: 'http://158.130.171.55:3000/?number=104'}, function(data) {
    console.log("Sent! e=" + JSON.stringify(e));
    var card = new UI.Card();
    card.title('Now');
    card.subtitle('hovering.');
    card.show();
  }, function(error) {
    console.log("error :( " + JSON.stringify(error));
  });
  console.log("request sent");
  
  setTimeout(function() {
  // Display the mainScreen
  main.show();
  }, 500);
  
});

main.on('click', 'up', function(e) {
  console.log("Connecting to server ...");
  ajax({url: 'http://158.130.171.55:3000/?number=38'}, function(data) {
    console.log("Sent! e=" + JSON.stringify(e));
    var card = new UI.Card();
    card.title('Increasing');
    card.subtitle('altitude.');
    card.show();
  }, function(error) {
    console.log("error :( " + JSON.stringify(error));
  });
  console.log("request sent");
  
  setTimeout(function() {
  // Display the mainScreen
  main.show();
  }, 500);
  
});

var inFlight = 0;

main.on('click', 'select', function(e) {
  console.log("Connecting to server ...");
  if (inFlight === 0){
  ajax({url: 'http://158.130.171.55:3000/?number=116'}, function(data) {
    console.log("Sent! e=" + JSON.stringify(e));
    var card = new UI.Card();
    card.title('Taking');
    card.subtitle('off.');
    card.show();
  }, function(error) {
    console.log("error :( " + JSON.stringify(error));
  });
  console.log("request sent");
  inFlight = 1;
    
    setTimeout(function() {
  // Display the mainScreen
  main.show();
  }, 500);
    
  }
  else if (inFlight === 1){
    ajax({url: 'http://158.130.171.55:3000/?number=108'}, function(data) {
    console.log("Sent! e=" + JSON.stringify(e));
    var card = new UI.Card();
    card.title('Now');
    card.subtitle('landing.');
    card.show();
  }, function(error) {
    console.log("error :( " + JSON.stringify(error));
  });
  console.log("request sent");
  inFlight = 0;
    
    setTimeout(function() {
  // Display the mainScreen
  main.show();
  }, 500);
  }
  else {
    
    console.log("Error!");
    
    setTimeout(function() {
  // Display the mainScreen
  main.show();
  }, 500);
    
  }
});

main.on('click', 'down', function(e) {


  console.log("Connecting to server ...");
  ajax({url: 'http://158.130.171.55:3000/?number=40'}, function(data) {
    console.log("Sent! e=" + JSON.stringify(e));
    var card = new UI.Card();
    card.title('Decreasing');
    card.subtitle('altitude.');
    card.show();
  }, function(error) {
    console.log("error :( " + JSON.stringify(error));
  });
  console.log("request sent");
  
  setTimeout(function() {
  // Display the mainScreen
  main.show();
  }, 500);
  
});
