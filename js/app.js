$(document).ready(function() {

  function contentshow () {
    $('#graphicdesign, #logos, #personal, #luminess, #web, #aboutme, #contact').css('display', 'none');
    $('#nav-gd').click(function() {
      $('#graphicdesign').fadeIn(1000);
      $('#logos, #luminess, #personal, #web, #aboutme, #contact').hide();
    })
    $('.logoslink').click(function () {
      $('#graphicdesign').fadeOut('fast', function(){
        $('#logos').fadeIn(400);
      });
    })
    $('.personallink').click(function() {
      $('#graphicdesign').fadeOut('fast', function(){
        $('#personal').fadeIn(400);
      });
    })
    $('.luminesslink').click(function() {
      $('#graphicdesign').fadeOut('fast', function(){
        $('#luminess').fadeIn(400);
      });
    })
    $('#nav-web').click(function() {
      $('#web').fadeIn(400);
      $('#graphicdesign, #logos, #personal, #luminess, #aboutme, #contact').hide();
    })
    $('#nav-aboutme').click(function() {
      $('#aboutme').fadeIn(400);
      $('#graphicdesign, #logos, #personal, #luminess, #web, #contact').hide();     
    })
    $('#nav-contact').click(function() {
      $('#contact').fadeIn(400);
      $('#graphicdesign, #logos, #personal, #luminess, #web, #aboutme').hide();
    })
  };

  contentshow();

});