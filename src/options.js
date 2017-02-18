document.addEventListener('DOMContentLoaded', function() {
  console.log('foo')
    chrome.storage.sync.get(['minutes', 'interval'], function(value) {
        console.log(value)
        document.getElementById("minutes").value = value.minutes;
        document.getElementById("interval").value = value.interval;
    });

  document.getElementById("savebutton").onclick = function saveChanges() {
      chrome.storage.sync.set({
          'minutes': document.getElementById("minutes").value,
          'interval': document.getElementById("interval").value
      });
  }
})
