$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
  	pagination : false,
  	navigation : false,
  	stopOnHover : true,
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});