// Stops all iframes (i.e. videos) with class name 'video'
function stopVideo() {
  $('.video').each(function(){
    $('iframe').attr('src', $('iframe').attr('src'));
  });
}
