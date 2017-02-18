



    chrome.storage.sync.set({'link': 'http://www.google.com'}, function(){

    });

    chrome.storage.sync.get('link', function(value) {
      chrome.tabs.create({url: value.link})
    });

    document.write("HERE");

    document.write(document.getElementById('storage').value);
