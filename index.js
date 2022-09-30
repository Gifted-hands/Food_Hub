  jQuery(document).ready(function($) {
                "use strict";
                //  TESTIMONIALS CAROUSEL HOOK
                $('#customers-testimonials').owlCarousel({
                    loop: true,
                    center: true,
                    margin:-38,                   
                    dots:true,
                    autoplay:true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause:true,
                    smartSpeed: 450,
                    
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 2
                      },
                      1170: {
                        items: 3
                      }
                    }
                });
   });

   function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut() {
    setInterval(loader, 3000);
  }

  window.onload = fadeOut;


                    
