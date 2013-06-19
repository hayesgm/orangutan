(function() {
  var decodeString = function(string) {
    var res = ""

    for (var i = 0; i < string.length; i++) {
      res += String.fromCharCode(string.charCodeAt(i)-1);
    }

    return res;
  };

  var filter = function(text) {
    return text.search("en://") != -1;
  };

  var decodeNode = function(node) {
    console.log(['Decoding',node,node.nodeValue]);
    node.nodeValue = node.nodeValue.replace(/en\:\/\/([^ ]*)/g,function(m,l) {
      //console.log('Decoding...');
      //console.log(l);
      var res = decodeString(l);
      //console.log(res);
      //console.log('Decoded...');
      return res;
    });
  };

  var nativeTreeWalker = function(filter, decodeNode) {
    var walker = document.createTreeWalker(
        document.body, 
        NodeFilter.SHOW_TEXT, 
        null, 
        false
    );

    var node;
    var textNodes = [];

    while(node = walker.nextNode()) {
      if (filter(node.nodeValue)) { // Hopefully this will be quick to narrow out bad results
        decodeNode(node);
      }
    }
  };

  console.log('Walking Tree');
  nativeTreeWalker(filter, decodeNode);
  console.log('Finished Walking Tree');
})();