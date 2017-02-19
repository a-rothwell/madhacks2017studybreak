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
})
