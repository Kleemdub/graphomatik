$( document ).ready(function(){

  $(".button-collapse").sideNav();

  $('.parallax').parallax();

  $('.scrollspy').scrollSpy({ scrollOffset: 60 });

  // $('.nav-wrapper a').click(function(){
  //   $('.nav-wrapper a').removeClass('active');
  //   $(this).addClass('active');
  //   console.log('ok');
  // });

  // $('.brand-logo').click(function(){
  //   $('nav').animate({'top':'-80px'}, 300);
  // });

  $('.champions-img').click(function(){
    $('.projets-details-section').css({'display':'block'});
    $('.projets-details').css({'opacity':'0'});
    $('.champions-details').css({'opacity':'1'});
    $('.projets-details-section').animate({'height':'93vh'}, 700);
  });

  $('.readme-img').click(function(){
    $('.projets-details-section').css({'display':'block'});
    $('.projets-details').css({'opacity':'0'});
    $('.readme-details').css({'opacity':'1'});
    $('.projets-details-section').animate({'height':'93vh'}, 700);
  });

  $('.iron-img').click(function(){
    $('.projets-details-section').css({'display':'block'});
    $('.projets-details').css({'opacity':'0'});
    $('.iron-details').css({'opacity':'1'});
    $('.projets-details-section').animate({'height':'93vh'}, 700);
  });

  $('.teebox-img').click(function(){
    $('.projets-details-section').css({'display':'block'});
    $('.projets-details').css({'opacity':'0'});
    $('.teebox-details').css({'opacity':'1'});
    $('.projets-details-section').animate({'height':'93vh'}, 700);
  });

  $('.bt-fermer').click(function(){
    $('.projets-details-section').animate({'height':'0px'}, 300, function(){
      $('.projets-details-section').css({'display':'none'});
    });
  });

  $('.champions-div').hover(function() {
    $('.champions-infos').stop().animate({'left':'0px'}, 300);
  }, function() {
    $('.champions-infos').stop().animate({'left':'-380px'}, 300);
  });


  $('.readme-div').hover(function() {
    $('.readme-infos').stop().animate({'left':'0px'}, 300);
  }, function() {
    $('.readme-infos').stop().animate({'left':'-380px'}, 300);
  });

  $('.ironbattle-div').hover(function() {
    $('.iron-infos').stop().animate({'left':'0px'}, 300);
  }, function() {
    $('.iron-infos').stop().animate({'left':'-380px'}, 300);
  });

  $('.teebox-div').hover(function() {
    $('.teebox-infos').stop().animate({'left':'0px'}, 300);
  }, function() {
    $('.teebox-infos').stop().animate({'left':'-380px'}, 300);
  });

  
  var options = [
    {selector: '#scrollTarget2', offset: 0, callback: function() {
      $('nav').animate({'top':'0px'}, 300);
    } },
    {selector: '#scrollTarget3', offset: 250, callback: function() {
      $('.project-1').animate({'left':'10px'}, 300);
    } },
    {selector: '#scrollTarget3', offset: 450, callback: function() {
      $('.project-2').animate({'left':'10px'}, 300);
    } },
    {selector: '#scrollTarget3', offset: 350, callback: function() {
      $('.champions-frame').animate({'border-bottom-width':'10px', 'border-right-width':'10px', 'border-top-width':'0px', 'border-left-width':'0px'}, 200, function() {
        $('.champions-frame').css({'display':'none'});
        $('.readme-frame').animate({'border-bottom-width':'10px', 'border-right-width':'10px', 'border-top-width':'0px', 'border-left-width':'0px'}, 200, function() {
          $('.readme-frame').css({'display':'none'});
          $('.iron-frame').animate({'border-bottom-width':'10px', 'border-right-width':'10px', 'border-top-width':'0px', 'border-left-width':'0px'}, 200, function() {
            $('.iron-frame').css({'display':'none'});
            $('.teebox-frame').animate({'border-bottom-width':'10px', 'border-right-width':'10px', 'border-top-width':'0px', 'border-left-width':'0px'}, 200, function() {
              $('.teebox-frame').css({'display':'none'});
            });
          });
        });
      });
    } },
    {selector: '#scrollTarget4', offset: 250, callback: function() {
      $('.contact-1').animate({'left':'10px'}, 300);
    } },
    {selector: '#scrollTarget4', offset: 400, callback: function() {
      $('.contact-2').animate({'left':'10px'}, 300);
    } },
    {selector: '#scrollTarget4', offset: 550, callback: function() {
      $('.contact-3').animate({'left':'10px'}, 300);
    } }
  ];

  Materialize.scrollFire(options);

})