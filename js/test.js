window.onload = function() {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function() {
    // 処理が完了したとき
    if (ajax.readyState == 4 ) {
      // HTTPステータスコードをチェック
      if ( (ajax.status >= 200 && ajax.status < 300) || (ajax.status == 304))  {
        
        var data = ajax.responseXML;

        var chapters = data.getElementsByTagName('chapter');
        var str = '';

        for (var i = 0, count = chapters.length; i < count; i++) {
          str += chapters[i].getAttribute('id') + '章 : ' + chapters[i].firstChild.nodeValue + '<br>';
        }
        
        document.getElementById('output').innerHTML = str;
      } else {
        document.getElementById('output').innerHTML = ajax.statusText;
      }
    }
  }

  document.getElementById('btn').onclick = function() {
    ajax.open('GET', 'resources/text.xml', true);
    ajax.send(null);
  }

}