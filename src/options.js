document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get(['minutes', 'interval', 'link', 'power'], function(value) {
        if (value.minutes != 'undefined') {
            document.getElementById("minutes").value = value.minutes;
        }
        if (value.interval != 'undefined') {
            document.getElementById("interval").value = value.interval;
        }

        if (value.link != 'undefined') {
            document.getElementById("addValue").value = value.link;
        }

        if (value.power != 'undefined') {
            if(value.power=='ON'){
              turnOn();
            }else{
              turnOff();
            }
        }
    });



    document.getElementById("savebutton").onclick = function saveChanges() {
    
        document.getElementById("alert").innerHTML = "<div class = 'alert alert-success fade in'><strong>Changes Saved</strong></div>";

        chrome.storage.sync.set({
            'link': document.getElementById("addValue").value
        });
        chrome.storage.sync.set({
            'minutes': document.getElementById("minutes").value,
            'interval': document.getElementById("interval").value
        });

        if(document.getElementById('checkbox').checked){

          chrome.storage.sync.set({
              'checked': true
          });
        }else{
          chrome.storage.sync.set({
              'checked': false
          });
        }

    }

    document.getElementById("iobutton").onclick = function toggle() {
        var elem = document.getElementById("iobutton");
        var gears = document.getElementById("gears");
        if (elem.value == "TURN ON") {
            turnOn();

        } else {
            turnOff();
        }
    }

    function turnOn(){
      var elem = document.getElementById("iobutton");
      var gears = document.getElementById("gears");
      chrome.storage.sync.set({'power': 'ON'});
      elem.value = "TURN OFF";
      elem.className = "btn btn-danger";
      gears.src = 'spinning.gif';
    }
    function turnOff(){
      var elem = document.getElementById("iobutton");
      var gears = document.getElementById("gears");
      chrome.storage.sync.set({'canPlay':'Yes'});
      gears.src = 'spinning-0.jpg';
      chrome.storage.sync.set({'power': 'OFF'});
      elem.value = "TURN ON";
      elem.className = "btn btn-success";
    }

});
