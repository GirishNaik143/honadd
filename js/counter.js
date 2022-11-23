/*------------------------------------
  HT Counter
--------------------------------------*/
(function($){
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

  $('.close_talk').click(function()                           {
      $('.talk_to_us').css("display","none");
      /*$('.talk_top').css({
        'transform':'translateY(0px)'
      },2000);*/
      $('.talk_top').addClass("ani_style1");
      $('#taler').addClass("ani_style2");
    });
	$.fn.countTo=function(options){options=options||{};return $(this).each(function(){var settings=$.extend({},$.fn.countTo.defaults,{from:$(this).data('from'),to:$(this).data('to'),speed:$(this).data('speed'),refreshInterval:$(this).data('refresh-interval'),decimals:$(this).data('decimals')},options);var loops=Math.ceil(settings.speed/settings.refreshInterval),increment=(settings.to-settings.from)/loops;var self=this,$self=$(this),loopCount=0,value=settings.from,data=$self.data('countTo')||{};$self.data('countTo',data);if(data.interval){clearInterval(data.interval);} data.interval=setInterval(updateTimer,settings.refreshInterval);render(value);function updateTimer(){value+=increment;loopCount++;render(value);if(typeof(settings.onUpdate)=='function'){settings.onUpdate.call(self,value);} if(loopCount>=loops){$self.removeData('countTo');clearInterval(data.interval);value=settings.to;if(typeof(settings.onComplete)=='function'){settings.onComplete.call(self,value);}}} function render(value){var formattedValue=settings.formatter.call(self,value,settings);$self.html(formattedValue);}});};$.fn.countTo.defaults={from:0,to:0,speed:1000,refreshInterval:100,decimals:0,formatter:formatter,onUpdate:null,onComplete:null};function formatter(value,settings){return value.toFixed(settings.decimals);}}(jQuery));jQuery(function($){$('.count-number').data('countToOptions',{formatter:function(value,options){return value.toFixed(options.decimals).replace(/B(?=(?:d{3})+(?!d))/g,',');}});$('.count-number').each(count);function count(options){var $this=$(this);options=$.extend({},options||{},$this.data('countToOptions')||{});$this.countTo(options);}});