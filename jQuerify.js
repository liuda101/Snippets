(function () {

  if ( !window.jQuery ) {
    var s = document.createElement('script');
    s.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js');
    document.body.appendChild(s);
    console.log('jquery loaded!');
  }

})();