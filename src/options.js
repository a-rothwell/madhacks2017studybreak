document.addEventListener('DOMContentLoaded', function() {
  //console.log('foo')
    chrome.storage.sync.get(['minutes', 'interval'], function(value) {
        //console.log(value)
        document.getElementById("minutes").value = value.minutes;
        document.getElementById("interval").value = value.interval;
    });

  document.getElementById("savebutton").onclick = function saveChanges() {
      chrome.storage.sync.set({
          'minutes': document.getElementById("minutes").value,
          'interval': document.getElementById("interval").value
      });
  }

  document.getElementById("clear").onclick = function clear(){
    chrome.storage.sync.clear();
  }

  document.getElementById("addGame").onclick = function addNewGame() {

    chrome.storage.sync.get('links', function(value) {
        //If the array of links has yet to be initialized
        if(typeof value.links == 'undefined'){
          //make a new array, add the current link to the array, and save it
          var linkArray = [];
          linkArray[0] = document.getElementById("addValue").value;
          chrome.storage.sync.set({
              'links': linkArray
          });
        }else{
          //Add the new value to the array
          (value.links).push(document.getElementById("addValue").value);
        }

    });


  }

})
