$(document).ready(function () {
    // progress bar
    
    let dataAreaOffset = $("#data-area").offset();
    let stop = 0;

    function animationData() {
        let duration = [1400, 1600, 2000, 2200];
        let number = [150, 254, 4, 5243];
        let c = 65;
        for (let toCircle = 0; toCircle < 4; toCircle++){

            let container = document.getElementById("circle" + String.fromCharCode(c));

            let circle = new ProgressBar.Circle(container, {
                color : '#00a2ff',
                strokeWidth: 8,
                duration: duration[toCircle],
                from: {color: '#AAA'},
                to: {color: '#00a2ff'},
                step: function(state, circle){
                    circle.path.setAttribute('stroke', state.color);
                    let value = Math.round(circle.value() * number[toCircle]);
                    circle.setText(value);
                }
            });
            circle.animate(1.0);
            c ++;
        }
    }

    // referencial scroll
    $(window).scroll(function (e) {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 700) && stop  == 0){
            animationData();
            stop++;
        }
    });


    // parallax
    setTimeout(function() {
        $("#data-area").parallax({imageSrc: 'img/cidadeparallax.png'});
        $("#apply-area").parallax({imageSrc: 'img/pattern.png'});
    }, 250);


     // Filtro portfólio

  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'moveis-btn') 
    {
      eachBoxes('moveis', boxes);
    } 
    else if(type == 'presente-btn') 
    {
      eachBoxes('presente', boxes);
    } 
    else if(type == 'churrasco-btn') 
    {
      eachBoxes('churrasco', boxes);
    } 
    else if(type == 'decoracoes-btn') 
    {
      eachBoxes('decoracoes', boxes);
    }
    else 
    {
      eachBoxes('all', boxes);
    }
  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let teamSection = $('#team-area');
  let portfolioSection = $('#portifolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'portifolio-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 500);
  });

});