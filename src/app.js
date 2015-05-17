/**
 * Title: TransportMeUMassD
 * Desc: Written by Brent Rubell to provide accurate times for the transportation systems around UMass Dartmouth
 * Developer: Brent Rubell (@brentrubell, brubell@umassd.edu)
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'TransportMeUMassD',
 // icon: 'images/menu_icon.png',
  subtitle: 'Press Select to',
  body: 'get moving'
});
main.show();

// Main Menu
main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: 
      [{
      items: 
      [{
        title: 'Retail Line',
        subtitle: 'Mon-Sun'
        // [PHONE] pebble-app.js:?: Selected item #0 of section #0
      }, 
      {
        title: 'Blue/Gold Line',
        subtitle: 'Mon-Fri/e. campus'
        // [PHONE] pebble-app.js:?: Selected item #1 of section #0
      },
      {
        title: 'Green Line',
        subtitle: 'Mon-Sun, all campus'
        // [PHONE] pebble-app.js:?: Selected item #2 of section #0
      }]
      }]
  });
  
  // Select button pressed on main menu
  menu.on('select', function(e) {
    // Submenus
    menu.items(0, [ 
      {title: 'Retail Shuttle'},
      {title: 'every 30min.'},
      {title: 'Mon-Fri'}, 
      {title: '10AM-10PM' },
      {title: 'Saturday/Sunday'},
      {title: '12:30PM-6:30PM'}
    ]);
    menu.items(1, [ 
      {title: 'Blue/Gold Line'},
      {title: 'Mon-Fri'},
      {title: '9AM-5PM'}
    ]);
    menu.items(2, [ 
      {title: 'Green Line'},
      {title: 'Mon-Wed'},
      {title: '4:30PM-12AM'}, 
      {title: 'Thur/Fri' },
      {title: '4:30PM-2:30AM'},
      {title: 'Saturday'},
      {title: '9PM-2:30AM'}
    ]);
  });
  menu.show();
});



// up click shows card with credits on it
main.on('click', 'up', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'developed by @brentrubell',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

