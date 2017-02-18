



    chrome.storage.sync.set({'link': 'http://www.google.com'}, function(){

    });



    chrome.storage.sync.get('minutes', function(value) {
      document.write(value.minutes);
      chrome.tabs.create({url: value.minutes})
    });

    document.write("HERE");

    document.write(document.getElementById('storage').value);
