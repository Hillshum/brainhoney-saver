$(function() {  //don't be executing anything until the page is ready


content = $("#main_content");

var port = chrome.runtime.connect({name: "quiz-fill"});

// TODO: make this actually detect changes we care about
content.on('click', {port: port}, function(event) {
    event.data.port.postMessage({click: true});
});




}); // Close onReady wrapper
