window.onload = function() {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function() {
    // 処理が完了したとき
    if (ajax.readyState == 4 ) {
      // HTTPステータスコードをチェック
      if ( (ajax.status >= 200 && ajax.status < 300) || (ajax.status == 304))  {
        document.getElementById('output').innerHTML = ajax.responseText;
      } else {
        document.getElementById('output').innerHTML = ajax.statusText;
      }
    }
  }

  document.getElementById('btn').onclick = function() {
    ajax.open('GET', 'resources/test.txt', true);
    ajax.send(null);
  }

}