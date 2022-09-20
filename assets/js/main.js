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
 * 메인 비주얼 슬라이드
 * @version 1.0.0
 * @since 2022-08-15
 * @author 김정인
 */
     $('.tab-nav').click(function(e){
      e.preventDefault();
      $(this).parents('.content').addClass('active').siblings().removeClass('active')
    
      if($(this).parents('.content').hasClass('.first')){
        visualSlide2.autoplay.stop();

        if(!$('.first .btn-nav.autoplay').hasClass('active')){
          visualSlide1.autoplay.start();
        }
      }else{
        visualSlide1.autoplay.stop();
    
        if(!$('.second .btn-nav.autoplay').hasClass('active')){
          visualSlide2.autoplay.start();
        }
      }
    });
    
    const visualSlide1 = new Swiper(".content.first .swiper", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".content.first .btn-controller .fraction",
        type:"fraction"
      },
      navigation: {
        nextEl: ".first .btn-nav.next",
        prevEl: ".first .btn-nav.prev",
      },
      touchRatio: 0
    });
    
    const visualSlide2 = new Swiper(".second .swiper", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".content.second .fraction",
        type:"fraction"
      },
      navigation: {
        nextEl: ".second .btn-nav.next",
        prevEl: ".second .btn-nav.prev",
      },
      touchRatio: 0
    });
    visualSlide2.autoplay.stop();
    
    
    $('.first .autoplay').click(function(e){
      e.preventDefault();
      if (!$(this).hasClass('active')) {
        visualSlide1.autoplay.stop();
        $(this).addClass('active');
      } else {
        visualSlide1.autoplay.start();
        $(this).removeClass('active');
      }
    });
    $('.second .autoplay').click(function(e){
      e.preventDefault();
      if (!$(this).hasClass('active')) {
        visualSlide2.autoplay.stop();
        $(this).addClass('active');
      } else {
        visualSlide2.autoplay.start();
        $(this).removeClass('active');
      }
    })
    
    
    
    
    
    

  /**
 * 하단 배너 슬라이드
 *
 * @version 1.0.0
 * @since 2022-08-15
 * @author 김정인
 */

   const bannerSlide = new Swiper(".sc-banner .swiper", {
    slidesPerView: 3,
    spaceBetween: 43,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".sc-banner .fraction",
      type:"fraction"
    },

    navigation: {
      nextEl: ".sc-banner .next",
      prevEl: ".sc-banner .prev",
    },
    touchRatio: 0

  });

  $('.sc-banner .autoplay').click(function(e){
    e.preventDefault();
    if($(this).hasClass('active')){
      bannerSlide.autoplay.start();
      $(this).removeClass('active');
    }else{
      bannerSlide.autoplay.stop();
      $(this).addClass('active');
    }
  });


    
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
        if(e.keyCode === 9 && e.shiftKey){
          $('.sub-list').slideUp();
          $('.btn-related').removeClass('active')
        }
      })
      $('.sub-list li:last-child a').keydown(function(e){
        if(e.keyCode === 9 && !e.shiftKey){
          $('.sub-list').slideUp();
          $('.btn-related').removeClass('active')
      }
      })
    

//btn-top
let lastScroll = 0;
	//스크롤 위치 값 = 0 
    $(window).scroll(function(){
			//윈도우 창을 스크롤 했을 때
        current = $(this).scrollTop();
					//현재 스크롤 위치 값 

        if(current > lastScroll){
					//현재 위치가 0보다 크면 (스크롤 내리면)
            $('.btn-top').addClass('active');
							//btn-top에 active클래스를 추가 (화면에 나타나게)
        }else{
				//현재 위치가 0보다 작으면 (스크롤 끝까지 올림)
            $('.btn-top').removeClass('active');
							//btn-top에 active클래스 제거 (화면에서 안보이게)
        }
    });

    $('.btn-top').click(function(){
      $('html, body').animate({scrollTop:0},300);
      return false;
  });










    });//지우면안됨

