(function($){
// RFP
$('#open_talk').click(function()                          {
      $('.talk_to_us').css({
        "display":"block"
      });
      setTimeout(function()
                 {
        
        
      $('.talk_top').removeClass("ani_style1");
      $('#taler').removeClass("ani_style2");
        
      /*$('.talk_top').css({
        'transform':'translateY(100px)'
      },2000);*/
    },200);
      setTimeout(function()
                 {
        $('.talk_to_us').css({
        "overflow":"auto"
      });
      },2200);
      //$('.talk_top').removeClass("ani_style1");
      //$('.talk_to_us').find('.container').removeClass("ani_style2");
    });


  $('.close_talk').click(function()                           {
      $('.talk_to_us').css("display","none");
      /*$('.talk_top').css({
        'transform':'translateY(0px)'
      },2000);*/
      $('.talk_top').addClass("ani_style1");
      $('#taler').addClass("ani_style2");
    });

  $('#open_talk1').click(function()                          {
      $('.talk_to_us').css({
        "display":"block"
      });
      setTimeout(function()
                 {
        
        
      $('.talk_top').removeClass("ani_style1");
      $('#taler').removeClass("ani_style2");
        
      /*$('.talk_top').css({
        'transform':'translateY(100px)'
      },2000);*/
    },200);
      setTimeout(function()
                 {
        $('.talk_to_us').css({
        "overflow":"auto"
      });
      },2200);
      //$('.talk_top').removeClass("ani_style1");
      //$('.talk_to_us').find('.container').removeClass("ani_style2");
    });
})