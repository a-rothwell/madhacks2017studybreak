
chrome.storage.sync.get('links', function(value) {
  document.write(value.links[0]);
  /*
    for(var i = 0; i<(value.links).length; i++){
        document.write(i + "\n");
        document.write((value.links)[i]);
    }
    */
});

document.write("HERE");
