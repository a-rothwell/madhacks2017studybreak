document.addEventListener('DOMContentLoaded', function() {
  //console.log('foo')
    chrome.storage.sync.get(['minutes', 'interval'], function(value) {
        //console.log(value)
        if(value.minutes!='undefined'){
        document.getElementById("minutes").value = value.minutes;
        }

      if(value.interval!='undefined'){
        document.getElementById("interval").value = value.interval;
      }
    });

  document.getElementById("savebutton").onclick = function saveChanges() {
      document.getElementById("alert").innerHTML = "<div class = 'alert alert-success fade in'><strong>Changes Saved</strong></div>"
      chrome.storage.sync.set({'link': document.getElementById("addValue").value});
      chrome.storage.sync.set({
          'minutes': document.getElementById("minutes").value,
          'interval': document.getElementById("interval").value
      });
  }


})
