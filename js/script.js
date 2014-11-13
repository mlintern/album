/* Same as below
$(docuemnt).founcation({
	slider: {
	  on_change: function(){
	    var value = $('.range-slider').attr('data-slider');
	    console.log(value);
	    $('.custom-thumbnail').css({'width':value+"%"});
	  }
	}
})
*/

$('.range-slider').on('change.fndtn.slider', function(){
  var value = $('.range-slider').attr('data-slider');
  $('.custom-thumbnail').css({'width':value+"%"});
});

$(document.body).on("closed.fndtn.clearing", function(event) {
  var value = $('.range-slider').attr('data-slider');
  $('.custom-thumbnail').css({'width':value+"%"});
});

$(document.body).on("open.fndtn.clearing", function(event) {
  $('.custom-thumbnail').removeAttr('style');
});

$(document).foundation({
  accordion: {
    // specify the class used for accordion panels
    content_class: 'content',
    // specify the class used for active (or open) accordion panels
    active_class: 'active',
    // allow multiple accordion panels to be active at the same time
    multi_expand: false,
    // allow accordion panels to be closed by clicking on their headers
    // setting to false only closes accordion panels when another is opened
    toggleable: false
  }
});