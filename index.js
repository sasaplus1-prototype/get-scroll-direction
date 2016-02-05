(function(){
  'use strict';

  var db = document.body,
      dd = document.documentElement;

  var beforeScrollTop = db.scrollTop || dd.scrollTop;

  window.addEventListener('scroll', function(event) {
    var scrollTop = db.scrollTop || dd.scrollTop;

    if (scrollTop > beforeScrollTop) {
      console.log('scroll down');
    } else {
      console.log('scroll up');
    }

    beforeScrollTop = scrollTop;
  });
}());
