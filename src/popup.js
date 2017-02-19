chrome.storage.sync.get('link', function(value) {
    chrome.tabs.create({
        url: value.link
    });
});
