

// Make the page action display at the right point
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'brainhoney' },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});



// Accept form changes from the page
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "quiz-fill");
    // TODO: Actually record the stuff
    port.onMessage.addListener(function(msg) {
        if (msg.click == true)
            console.log('click!');


    })
});
