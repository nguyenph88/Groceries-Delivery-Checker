
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.message === 'updateIcon') {
        	//alert('updateicon');
	        chrome.browserAction.setIcon({
	            path: 'icons/groceries_on.png',
	            tabId: sender.tab.id
	        });
    	}

    	if (request.message === 'sendNotification'){
    		//alert('Delivery Found');
    		chrome.notifications.create('', {
		        type: 'basic',
		        iconUrl: 'icons/groceries_128.png',
		        title: 'Groceries Delivery Checker',
		        message: 'Delivery Found !!! You should order now!'
		    });
			// play sound
			var audio = new Audio('sound/rooster.ogg');
		    audio.play();
    	} 
    });