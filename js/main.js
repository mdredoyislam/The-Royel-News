
$(document).ready(function(){
  $('.news-row').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:4
        }
    }
})
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
});