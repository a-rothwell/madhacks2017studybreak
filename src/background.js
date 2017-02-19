

chrome.tabs.onUpdated.addListener(function(tab) {
      chrome.tabs.getSelected(function(tab){
        chrome.storage.sync.get('link', function(value){
          if(tab.url == value.link){
            chrome.tabs.update(tab.id, {url: "https://www.reddit.com"});
          }
        });
      });
      //chrome.tabs.update(tab.id, {url: "https://www.reddit.com"});

});
