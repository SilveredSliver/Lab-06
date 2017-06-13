'use strict'

// var maddy = {
//   nickname: 'Maddy',
//   givenName: 'Madeline',
//   personality: ['fun', 'helpful', 'awesome'],
//   greeting: function() {
//     console.log('Hi,  my name is ' + this.givenName + ' but you can call me ' + this.nickname);
//   }
// };
// //Object Literal Notation -- is a form of making objects^^^^^^^^
//
// maddy.nickname;//dot notation
// maddy['nickname'];//bracket notation


// var seagullCount = [2, 38, 3 , 324, 4, 05];
//
// for (var i = 0; 1 < seagullCount.length; i++) {
//   //1   Create the new Element
//   //2   Give the element some content
//   //3   Append the element to the appripriate place in the document
//   var LiEl = document.createElement('li')
// }


var storeHours = ['6-AM', '7-PM'];

var pikePlaceMarket = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesSoldPerHour: function() {
    return (Math.floor(Math.random() * (65 - 23 + 1)) + 23 / Math.floor(Math.random() * (347 - 18 + 1)) + 18)
  },
  calculateCustomersThisHour: function() {
    return Math.floor(Math.random() * (65 - 23 + 1)) + 23},
  customersThisHour: [],
  calculateCookiesThisHour: function() {
    return Math.floor(Math.random() * (347 - 18 + 1)) + 18},
  cookiesEachHour: [],
  render: function() {
    },
};
pikePlaceMarket.calculateCookiesThisHour();
pikePlaceMarket.calculateCustomersThisHour();
//dont forget to call the functions

var cookiesPerHour = document.getElementById('averageCookiesSoldPerHour');
averageCookiesSoldPerHour.innerHTML = '<header2>Pike Place Average Cookies Per Hour</header2><p>' + pikePlaceMarket.averageCookiesSoldPerHour() + '</p>';

var storeLocation = document.getElementById('locationName');
locationName.innerHTML = '<h1>Store Name</h1><p>' + pikePlaceMarket.locationName + '</p>';

var maxCustomers = document.getElementById('maxCustomersPerHour');
maxCustomersPerHour.innerHTML = '<h2>Maximum Customers Per Hour</h2><p>' + pikePlaceMarket.maxCustomersPerHour + '</p>';

var minCustomers = document.getElementById('minCustomersPerHour');
minCustomersPerHour.innerHTML = '<h3>Minimum Customers Per Hour</h3><p>' + pikePlaceMarket.minCustomersPerHour + '</p>';

var averageCumstomers = document.getElementById('customersThisHour');
averageCumstomers.innerHTML = '<h4>Average Customers Per Hour</h4><p>' + pikePlaceMarket.calculateCustomersThisHour() + '</p>';

var averageCookies = document.getElementById('cookiesEachHour');
averageCookies.innerHTML = '<h5>Average Cookies Per Hour</h5><p>' + pikePlaceMarket.calculateCookiesThisHour() + '</p>';



var storeHours = ['6-AM', '7-PM'];

var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesSoldPerHour: 1.2,
  calculateCustomersThisHour: function() {
    return Math.floor(Math.random() * (24 - 3 + 1)) + 3},
  customersThisHour: [],
  calculateCookiesThisHour: function() {
    return Math.floor(Math.random() * (96 - 16 + 1)) + 16},
  cookiesEachHour: [],
  render: function() {
    },
};
//dont forget to call the functions
var storeLocation2 = document.getElementById('locationName2');
locationName2.innerHTML = '<h6></h6><p>' + seaTacAirport.locationName + '</p>';

var maxCustomers2 = document.getElementById('maxCustomersPerHour2');
maxCustomersPerHour2.innerHTML = '<h7>Maximum Customers Per Hour</h7><p>' + seaTacAirport.maxCustomersPerHour + '</p>';

var minCustomers2 = document.getElementById('minCustomersPerHour2');
minCustomersPerHour2.innerHTML = '<h8>Minimum Customers Per Hour</h8><p>' + seaTacAirport.minCustomersPerHour + '</p>';

var averageCumstomers2 = document.getElementById('customersThisHour2');
averageCumstomers2.innerHTML = '<h9>Average Customers Per Hour</h9><p>' + seaTacAirport.calculateCustomersThisHour() + '</p>';

var averageCookies2 = document.getElementById('cookiesEachHour2');
averageCookies2.innerHTML = '<h10>Average Cookies Per Hour</h10><p>' + seaTacAirport.calculateCookiesThisHour() + '</p>';


var storeHours = ['6-AM', '7-PM'];

var seattleCenter = {
  locationName: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesSoldPerHour: 3.7,
  calculateCustomersThisHour: function() {
    return Math.floor(Math.random() * (38 - 11 + 1)) + 11},
  customersThisHour: [],
  calculateCookiesThisHour: function() {
    return Math.floor(Math.random() * (96 - 16 + 1)) + 16},
  cookiesEachHour: [],
  render: function() {
    },
};
//dont forget to call the functions
var storeLocation3 = document.getElementById('locationName3');
locationName3.innerHTML = '<h11></h11><p>' + seattleCenter.locationName + '</p>';

var maxCustomers3 = document.getElementById('maxCustomersPerHour3');
maxCustomersPerHour3.innerHTML = '<h12>Maximum Customers Per Hour</h12><p>' + seattleCenter.maxCustomersPerHour + '</p>';

var minCustomers3 = document.getElementById('minCustomersPerHour3');
minCustomersPerHour3.innerHTML = '<h13>Minimum Customers Per Hour</h13><p>' + seattleCenter.minCustomersPerHour + '</p>';

var averageCumstomers3 = document.getElementById('customersThisHour3');
averageCumstomers3.innerHTML = '<h14>Average Customers Per Hour</h14><p>' + seattleCenter.calculateCustomersThisHour() + '</p>';

var averageCookies3 = document.getElementById('cookiesEachHour3');
averageCookies3.innerHTML = '<h15>Average Cookies Per Hour</h15><p>' + seattleCenter.calculateCookiesThisHour() + '</p>';




var storeHours = ['6-AM', '7-PM'];

var capitolHill = {
  locationName: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  averageCookiesSoldPerHour: 2.3,
  calculateCustomersThisHour: function() {
    return Math.floor(Math.random() * (38 - 20 + 1)) + 20},
  customersThisHour: [],
  calculateCookiesThisHour: function() {
    return Math.floor(Math.random() * (96 - 16 + 1)) + 16},
  cookiesEachHour: [],
  render: function() {
    },
};
//dont forget to call the functions
var storeLocation4 = document.getElementById('locationName4');
locationName4.innerHTML = '<h16></h16><p>' + seattleCenter.locationName + '</p>';

var maxCustomers4 = document.getElementById('maxCustomersPerHour4');
maxCustomersPerHour4.innerHTML = '<h17>Maximum Customers Per Hour</h17><p>' + capitolHill.maxCustomersPerHour + '</p>';

var minCustomers4 = document.getElementById('minCustomersPerHour4');
minCustomersPerHour4.innerHTML = '<h18>Minimum Customers Per Hour</h18><p>' + capitolHill.minCustomersPerHour + '</p>';

var averageCumstomers4 = document.getElementById('customersThisHour4');
averageCumstomers4.innerHTML = '<h19>Average Customers Per Hour</h19><p>' + capitolHill.calculateCustomersThisHour() + '</p>';

var averageCookies4 = document.getElementById('cookiesEachHour4');
averageCookies4.innerHTML = '<h20>Average Cookies Per Hour</h20><p>' + capitolHill.calculateCookiesThisHour() + '</p>';



var storeHours = ['6-AM', '7-PM'];

var alki = {
  locationName: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averageCookiesSoldPerHour: 4.6,
  calculateCustomersThisHour: function() {
    return Math.floor(Math.random() * (16 - 2 + 1)) + 2},
  customersThisHour: [],
  calculateCookiesThisHour: function() {
    return Math.floor(Math.random() * (96 - 16 + 1)) + 16},
  cookiesEachHour: [],
  render: function() {
    },
};
//dont forget to call the functions
var storeLocation5 = document.getElementById('locationName5');
locationName5.innerHTML = '<h21></h21><p>' + alki.locationName + '</p>';

var maxCustomers5 = document.getElementById('maxCustomersPerHour5');
maxCustomersPerHour5.innerHTML = '<h22>Maximum Customers Per Hour</h22><p>' + alki.maxCustomersPerHour + '</p>';

var minCustomers5 = document.getElementById('minCustomersPerHour5');
minCustomersPerHour5.innerHTML = '<h23>Minimum Customers Per Hour</h23><p>' + alki.minCustomersPerHour + '</p>';

var averageCumstomers5 = document.getElementById('customersThisHour5');
averageCumstomers5.innerHTML = '<h24>Average Customers Per Hour</h24><p>' + alki.calculateCustomersThisHour() + '</p>';

var averageCookies5 = document.getElementById('cookiesEachHour5');
averageCookies5.innerHTML = '<h25>Average Cookies Per Hour</h25><p>' + alki.calculateCookiesThisHour() + '</p>';
//
// //this is a push method
//
// var numbers = [3,4,5];
// var multipliedNumbers = [];
//
//
// function timesNine() {
//   for (var i = 0; i < numbers.length; i++) {
//     multipliedNumbers.push(numbers[i] * 9);
//   }
// }
//
//
// timesNine();
// console.log(multipliedNumbers);
