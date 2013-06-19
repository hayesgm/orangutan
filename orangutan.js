(function() {
  var encodeText = function(info, tab) {
    console.log(info);
    console.log(tab);
    
    chrome.tabs.executeScript(tab.id, {file: "replace.js"}, function() {
      chrome.tabs.sendMessage(tab.id, {selection: info.selectionText});
    });
  };

  var encodeItem = chrome.contextMenus.create(
    {"title": "Encode", "type": "normal", "onclick":encodeText, "contexts":["editable"]}
  );

})();
