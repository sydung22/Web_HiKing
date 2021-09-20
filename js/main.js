$( document ).ready(function() {

    window.addEventListener('scroll', function(){
        let pageTop = document.querySelector('#btnScrolltoTop');
        let windowPosition = window.scrollY > 192;
        pageTop.classList.toggle('active', windowPosition);
      })
      
      const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
      btnScrolltoTop.addEventListener('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
      });

});