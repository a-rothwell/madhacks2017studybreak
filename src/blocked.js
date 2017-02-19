document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("close").onclick = function closeTab() {
        var id;
        chrome.tabs.getSelected(function(tab) {
            id = tab.id
        });
        chrome.tabs.getCurrent(function(tab) {
            chrome.tabs.remove(id, function() {});
        });
    }
});


chrome.storage.sync.get(['intervalStart', 'interval'], function(value){
  var startTime = value.intervalStart;
  var currentTime = (new Date()).getTime();
  var timeStep = (value.interval)*60000;
  var milliseconds = timeStep - (currentTime - startTime);
  if(milliseconds<0){
    milliseconds = 0;
  }

  if((milliseconds * 0.000016666666666)>0 && (milliseconds * 0.000016666666666)<1){
    milliseconds = (milliseconds * 0.000016666666666).toFixed(2);
  }else{
    milliseconds = (milliseconds * 0.000016666666666).toFixed(0);
  }

  document.getElementById('time').innerHTML = milliseconds;
});
