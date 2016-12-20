$(document).ready(function() {
 
  $("#owl-demo-2").owlCarousel({
  	pagination : false,
  	navigation : false,
  	stopOnHover : true,
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});