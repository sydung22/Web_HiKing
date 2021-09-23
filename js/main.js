$( document ).ready(function() {

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
        $('html, body').animate({scrollTop: 0}, '');
      });


      $('.carousel').carousel({
          interval: 4000 * 1
      });

      var width = $(window).width();
      if (width >= 992){
        $("#load-more").on('click', function(e){
          $(".col-img").slice(0, 3).show()
            e.preventDefault();
            $(".col-img:hidden").slice(0, 3).slideDown()
            if($(".col-img:hidden").length == 0){
              $("#load-more").fadeOut('slow')
            }
        }); 
      } else if(width <= 991){
        $("#load-more").on('click', function(e){
          $(".col-img").slice(0, 2).show()
            e.preventDefault();
            $(".col-img:hidden").slice(0, 2).slideDown()
            if($(".col-img:hidden").length == 0){
              $("#load-more").fadeOut('slow')
            }
        }); 
      }


    const menuBtn = document.querySelector('.btn-bar');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {

    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    }else{
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
});


$('.btn-bar').click(function(){
  $('.hiking-nav').slideToggle();
})
    //   $(window).resize(function(){
    //     var width = $(window).width();
    //     if (width >= 992){
    //       $(".col-img").slice(0, 3).show()
    //     }
    //     else if(width <= 991){
    //       $(".col-img").slice(0, 2).show()
    //     }
    // });

});