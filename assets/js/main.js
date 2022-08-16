$(function(){

  /**
 * 언어 별 사이트 바로가기
 * @version 1.0.0
 * @since 2022-08-15
 * @author 김정인
 */

   $('#btnLang').click(function(){
    const url = $('#langList').val();
    window.open(url);

  });

    /**
 * 배너 슬라이드
 * @version 1.0.0
 * @since 2022-08-15
 * @author 김정인
 */
     const bannerSlide = new Swiper(".sc-banner .swiper", {
      slidesPerView: 3,
      spaceBetween: 43,
      pagination: {
        el: ".sc-banner .fraction",
        type: "fraction"
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".sc-banner .btn-nav.next",
        prevEl: ".sc-banner .btn-nav.prev",
      },
    });
  
  
    $('.sc-banner .autoplay').click(function(e){
      e.preventDefault();
      if(!$(this).hasClass('active')){
        bannerSlide.autoplay.stop();
        $(this).addClass('active');
      }else{
        bannerSlide.autoplay.start();
        $(this).removeClass('active');
      }
    })
        /**
 * 관련사이트
 * @version 1.0.0
 * @since 2022-08-15
 * @author 김정인
 */

    $('.btn-related').click(function(e){
      e.preventDefault();

      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).siblings('.sub-list').slideUp();
      }else{
        $('.btn-related').removeClass('active');
        $('.sub-list').slideUp();
        $(this).addClass('active');
        $(this).siblings('.sub-list').slideDown();}
      })

      $('.sub-list li:first-child a').keydown(function(e){
        if(e-keyCode === 9 && e.shiftKey){
          $('.sub-list').slideUp();
        }
      })

      $('.sub-list li:last-child a').keydown(function(e){
        if(e.keyCode === 9 && !e.shiftKey){
          $('sub-list').slideUp();
        $('.btn-related').removeClass('active')}
      })
    
    });

