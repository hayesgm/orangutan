(function() {
    
  var encodeString = function(string) {
    var res = ""

    for (var i = 0; i < string.length; i++) {
      res += String.fromCharCode(string.charCodeAt(i)+1);
    }

    return res;
  };

  var encodeSelection = function(message) {
    var active = document.activeElement;

    // This kind of sucks-- but it's workable
    var res = active.value.substring(0, active.selectionStart);
    res += "en://" + encodeString(message.selection);
    res += active.value.substring(active.selectionEnd);

    active.value = res;
    return;

    var sel = window.getSelection();
    console.log(sel);
    var range = sel.getRangeAt(0);
    console.log(range);
    range.insertNode( document.createTextNode("test "));
  };

  chrome.runtime.onMessage.addListener(function(message) {
    console.log(document.activeElement);
    console.log(message);
    encodeSelection(message);
  });

})();