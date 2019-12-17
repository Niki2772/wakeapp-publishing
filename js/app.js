$(document).ready(function () {
  jarallax(document.querySelectorAll('.masthead'), {
    speed: 1.2,
    type: 'scroll',
    imgSize: 'cover',
    //keepImg: true,
    //imgSize: 'contain',
    imgPosition: '100% 100%'
  });

  jarallax(document.querySelectorAll('.developers'), {
    speed: 1.2,
    type: 'scroll',
    //keepImg: true,
    imgSize: 'cover',
    imgPosition: '100% 100%',
  });

  $('.slider').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplaySpeed: 2000,
    dots: true
  });

  $('[data-show-reg]').on('click', function () {
    $('.modal, .overlay').fadeIn();
  })
  $('.overlay').on('click', function () {
    $('.modal, .overlay').fadeOut();
  });


  $('[data-tooltip]').click(function () {
    var $circle = $(this).find('i');
    var text = $circle.attr('title');
    var tooltip;
    try {
      tooltip = $circle.tooltipster('instance');
    } catch (e) {

    }

    if (!tooltip) {
      $circle
        .tooltipster({
          trigger: 'click',
          animation: 'fade',
          side: 'left',
          contentAsHTML: true,
          functionAfter: function (instance, helper) {
            instance.close();
            $(helper.origin).closest('li').removeClass('active');
          },
          functionBefore: function (instance, helper) {
            $(helper.origin).closest('li').addClass('active');
          },
        })
        .tooltipster('content', text)
        .tooltipster('open');
    } else {
      tooltip.open();
    }
  });
  // $('.modal, .overlay').fadeIn();

});


$(document).ready(function () {
  $('.input-group input, .input-group textarea').focus(function () {
    var me = $(this);
    $("label[for='" + me.attr('id') + "']").addClass("animate-label");
  });
  $('.input-group input, .input-group textarea').blur(function () {
    var me = $(this);
    if (me.val() == "") {
      $("label[for='" + me.attr('id') + "']").removeClass("animate-label");
    }
  });

})