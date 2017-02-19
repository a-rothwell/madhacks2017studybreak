chrome.tabs.getSelected(function(tab) {
    url = tab.url;
    console.log(url);
});
chrome.storage.sync.get('link', function(value) {
    gameUrl = value.link;
    console.log(gameUrl);
});
console.log((new String(url) == new String(gameUrl)));
if (new String(url) == new String(gameUrl)) {
    // chrome.storage.sync.get('link', function(value) {
    //     chrome.tabs.create({
    //         url: value.link
    //     });
    // });
} else {
    
}
//
// var id;
// chrome.tabs.getSelected(function(tab) {
//     id = tab.id
// });
//
// chrome.storage.sync.get('minutes', function(value) {
//     console.log(id);
//     console.log(value.minutes * 60000);
//     var myVar = setInterval(remove, value.minutes * .00005);
// });
//
// function remove() {
//     chrome.tabs.getCurrent(function(tab) {
//         chrome.tabs.remove(id, function() {});
//     });
// }
