var activated = new Array();

function checkForValidUrl(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    activated[tabID] = false;
};

chrome.pageAction.onClicked.addListener(function(tab) { 
    chrome.tabs.executeScript(tab.id, {file: "lib/invert.js"})
    if(!activated[tab.id]){
        chrome.pageAction.setIcon({tabId: tab.id, path: 'icons/enabled.png'});
        activated[tab.id] = true;
    }else{
        chrome.pageAction.setIcon({tabId: tab.id, path: 'icons/disabled.png'});
        activated[tab.id] = false;
    }
});
chrome.tabs.onUpdated.addListener(checkForValidUrl);

function checkForValidUrl(tabId, changeInfo, tab) {
    if(tab.url.indexOf('http') == 0) {
        chrome.pageAction.show(tabId);
    }
};
