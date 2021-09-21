$( document ).ready(function() {

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 4000,
    speed: 1500,
    fade: true,
    cssEase: 'linear'
  });

    window.addEventListener('scroll', function(){
        let pageTop = document.querySelector('#btnScrolltoTop');
        let windowPosition = window.scrollY > 192;
        pageTop.classList.toggle('active', windowPosition);
      })
      
      const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
      btnScrolltoTop.addEventListener('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
      });

      $(".col-img").slice(0, 3).show()
      $("#load-more").on('click', function(e){
          e.preventDefault();
          $(".col-img:hidden").slice(0, 3).slideDown()
          if($(".col-img:hidden").length == 0){
            $("#load-more").fadeOut('slow')
          }
      }) 

      $('.carousel').carousel({
          interval: 4000 * 1
      });

});