window.onLoad = function() {
  var minutes = document.getElementById("minutes").value
  var interval = document.getElementById("interval").value
  document.getElementById("saveChanges").addEventListener("click", saveChanges);

  function saveChanges() {
    chrome.storage.sync.set({'minutes': minutes , 'interval': interval});
  }

  function load() {
    chrome.storage.sync.get(['minutes', 'interval'], function(value) {
      minutes = value.minutes;
      interval = value.hours;
    });
  }
};
