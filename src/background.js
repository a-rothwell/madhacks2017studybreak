
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
        chrome.storage.sync.set({
            'minutes': 10,
            'interval': 60,
            'link': "http://slither.io/"
        });

        chrome.tabs.create({
            url: "instructions.html"
        });
    }




});

chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  if(info.status == "complete"){
      chrome.tabs.getSelected(function(tab){
        chrome.storage.sync.get(['link','checked', 'minutes', 'canPlay', 'interval', 'power', 'doneStuff'], function(value){
          if(value.power=='ON'){
            if(tab.url == value.link){
              if(value.canPlay == 'no'){
                chrome.tabs.update(tab.id, {url: "blocked.html"});
              }else{


                setTimeout(redirect, 60000*value.minutes);
                if(value.checked){
                  setTimeout(alert, 60000*(value.minutes - 1));
                }

                function alert(){
                  window.alert('One minute remaining.  Don\'t forget to save!');
                }

                function redirect(){
                  chrome.storage.sync.set({'intervalStart': (new Date()).getTime()});
                  console.log('here');
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
    }
});
