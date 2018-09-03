//Start prg circle
(function($) {
  /*
   * Example 1:
   *
   * -  animation
   * - custom gradient
   *
   * By the way - you may specify more than 2 colors for the gradient
   */
  $('.first.circle').circleProgress({
    value: 0.75,
    animation: true,
    fill: {gradient: ['#00A99D', '#4ac1b8']}
  });

  /*
   * Example 2:
   *
   * - default gradient
   * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
   */
  $('.second.circle').circleProgress({
    value: 0.92,
    fill: {gradient: [['#4ac1b8', .5], ['#00A99D', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });

  /*
   * Example 3:
   *
   * - very custom gradient
   * - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
   */
  $('.third.circle').circleProgress({
    value: 0.75,
    fill: {gradient: [['#00A99D', .5], ['#4ac1b8', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });
     /*
   * Example 4:
   *
   * - no animation
   * - custom gradient
   *
   * By the way - you may specify more than 2 colors for the gradient
   */
  $('.forth.circle').circleProgress({
    value: 1,
    animation: false,
    fill: {gradient: ['#00A99D', '#4ac1b8']}
  });

  /*
   * Example 5:
   *
   * - solid color fill
   * - custom start angle
   * - custom line cap
   * - dynamic value set
   */
  var c4 = $('.fivth.circle');

  c4.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.83,
    lineCap: 'round',
    fill: {color: '#00A99D'}
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c4.circleProgress('value', 0.90); }, 1000);
  setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c4.circleProgress('value', 0.83); }, 2100);
    
  /*
   * Example 6:
   *
   * - very custom gradient
   * - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
   */
  $('.sixth.circle').circleProgress({
    value: 0.5,
    fill: {gradient: [['#00A99D', .5], ['#4ac1b8', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });


})(jQuery);
//End prg circle
//start Owl.js
var owl = $('.owl-carousel');
    owl.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
//end owl.js
//start slid show
  $(function() {
      $(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: true,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "",         // String: Text for the "previous" button
  nextText: "",       // String: Text for the "next" button
  maxwidth: "",          // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
      });
  });
//end slid show


// Add Google Maps 
/*
function myMap() {
    myCenter=new google.maps.LatLng(41.878114, -87.629798);
    var mapOptions= {
        center:myCenter,
        zoom:12, scrollwheel: false, draggable: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}
*/
// Smooth Scroll To Div 
    
$('a').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
        window.console.log('#' + $(this).data('value'));
        
    });