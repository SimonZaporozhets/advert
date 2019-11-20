$(document).ready(function(){
      // Плавная прокрутка
     
     $(".btn-price-offer").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });
     
      // Popup-окно
    
    $('.popup-call').click(function (e) {
        e.preventDefault();
        var destinationPopup = $(this).attr("href");
        $(destinationPopup).addClass('show');
        $(destinationPopup + ' .popup-close').click(function  (e) {
            e.preventDefault();
          $(destinationPopup).removeClass('show');
        });
  });
});