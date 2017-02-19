chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
        chrome.storage.sync.set({
            'minutes': 10,
            'interval': 60,
            'link': "http://slither.io/"
        });
    }
});

chrome.tabs.onUpdated.addListener(function(tab) {
      chrome.tabs.getSelected(function(tab){
        chrome.storage.sync.get(['link', 'minutes', 'canPlay', 'interval', 'power'], function(value){
          if(value.power=='ON'){
            if(tab.url == value.link){
              if(value.canPlay == 'no'){
                chrome.tabs.update(tab.id, {url: "blocked.html"});
              }else{
                setTimeout(redirect, 60000*value.minutes);

                function redirect(){
                  chrome.storage.sync.set({'canPlay': "no"});
                  chrome.tabs.update(tab.id, {url: "blocked.html"});
                  setTimeout(resetCanPlay, 60000*value.interval);
                }

                function resetCanPlay(){
                  chrome.storage.sync.set({'canPlay': "yes"});
                }
          }
          }
        }
        });
      });
      //chrome.tabs.update(tab.id, {url: "https://www.reddit.com"});
});
