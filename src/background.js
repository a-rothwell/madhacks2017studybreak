chrome.tabs.onUpdated.addListener(function(tab) {
      chrome.tabs.getSelected(function(tab){
        chrome.storage.sync.get(['link', 'minutes'], function(value){
          if(tab.url == value.link){
            setTimeout(redirect, 60000*value.minutes);

            function redirect(){
              chrome.tabs.update(tab.id, {url: "blocked.html"});
            }
          }
        });
      });
      //chrome.tabs.update(tab.id, {url: "https://www.reddit.com"});

});
