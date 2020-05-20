window.onload = function() {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function() {
    // 処理が完了したとき
    if (ajax.readyState == 4 ) {
      // HTTPステータスコードをチェック
      if ( (ajax.status >= 200 && ajax.status < 300) || (ajax.status == 304))  {
        
        var data = JSON.parse(ajax.responseText);

        var str = '';

        str += data[1].title + '<br>';
        str += data[2].title + '<br>';
        
        document.getElementById('output').innerHTML = str;
      } else {
        document.getElementById('output').innerHTML = ajax.statusText;
      }
    }
  }

  document.getElementById('btn').onclick = function() {
    ajax.open('GET', 'resources/test.json', true);
    ajax.send(null);
  }

}