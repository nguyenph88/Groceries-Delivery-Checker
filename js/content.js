var refreshRate = getRandomNumber(8, 30) * 1000
var asyncWaitTime = 5000
var pathDetectTime = 2000

var isDeliveryAvailable;

var BASE_URL_COSTCO = 'costco.com';
var BASE_URL_INSTACART = 'instacart.com';
var BASE_URL_AMAZON = 'amazon.com';

var CHECKOUT_PATH_INSTACART = '/store/checkout_v3';
var CHECKOUT_PATH_AMAZON = '/gp/buy/shipoptionselect/handlers/display.html';

function getRandomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}  

function getCurrentDateTime() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  return dateTime;
}

function checkAvailability() {
  refreshRate = getRandomNumber(8, 30) * 1000
  console.log('Set Next Refresh Rate: ' + refreshRate);
  
  isAmazonWholefoodDeliveryAvailable = document.querySelector('.ufss-available');
  isAmazonFreshDeliveryAvailable = document.querySelector('.availableSlotLeftHighlight');
  isInstacartDeliveryAvailable = document.querySelector("input[name='delivery_option']");
  
  if (isAmazonWholefoodDeliveryAvailable || isAmazonFreshDeliveryAvailable || isInstacartDeliveryAvailable) {
    chrome.runtime.sendMessage({message: "sendNotification"});
    console.log('Delivery Found! -- ' + getCurrentDateTime());
    return true;
  }
  console.log('Delivery NOT Found -- ' + getCurrentDateTime());
  return false;
}

window.addEventListener('load', () => {
  // costco uses instacart for their groceries order
  if (location.hostname.match(BASE_URL_COSTCO) || location.hostname.match(BASE_URL_INSTACART)) {
    // set icon
    chrome.runtime.sendMessage({message : "updateIcon"});

    const pathChange = setInterval(() => {
      if (location.pathname == CHECKOUT_PATH_INSTACART) {
        clearInterval(pathChange);

        setTimeout(function() {
          isDeliveryAvailable = checkAvailability();
        }, asyncWaitTime);
        const instaMonitor = setInterval(() => {
          if (!isDeliveryAvailable) location.reload();
        }, refreshRate);  
      } 
    }, pathDetectTime);

  // AMAZON automatically refreshes
  } else if (location.hostname.match(BASE_URL_AMAZON) && location.pathname == CHECKOUT_PATH_AMAZON){
    // set icon
    chrome.runtime.sendMessage({message : "updateIcon"});

    isDeliveryAvailable = checkAvailability();
    const amazonMonitor = setInterval(() => {
      if (!isDeliveryAvailable) location.reload();
    }, refreshRate);
  }
});