// Slider Listener
$('.range-slider').on('change.fndtn.slider', function(){
  var value = $('.range-slider').attr('data-slider');
  $('.custom-thumbnail').css({'width':value+"%"});
});

// Clearing Close listener
$(document.body).on("closed.fndtn.clearing", function() {
  var value = $('.range-slider').attr('data-slider');
  $('.custom-thumbnail').css({'width':value+"%"});
});

// Clearing Open Listener
$(document.body).on("open.fndtn.clearing", function() {
  $('.custom-thumbnail').removeAttr('style');
});

// Accordian Setup to overide Default
$(document).foundation({
  accordion: {
    content_class: 'content',
    active_class: 'active',
    multi_expand: false,
    toggleable: false
  }
});

// Function to Get and create Thumnails for Amy Baby Bump Section from img/amy/
function getBumpImages(){
	var dir = 'img/amy/';
	var fileextension = [".png",".jpg"];
	$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
      $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () {
        var filename = this.href.replace(window.location.host, "").replace("http:///", "");
        var num = filename.replace("wk", "").replace(".jpg","");
        $('.amy-bump').append($("<li class=\"custom-thumbnail columns\"><a class=\"th radius\" href=" + dir + filename + "><img data-caption=\"Week " + num + "\" src=" + dir + filename + "></a></li>"));
      });
      $(document).foundation({
			  clearing: {
				  close_selectors : '.clearing-close',
				  open_selectors : '',
				  skip_selector : '',
				  touch_label : '&larr;&nbsp;Swipe to Advance&nbsp;&rarr;'
				}
			});
    }
	});
}

// Function to Get and create Thumnails for Amy Baby Bump Section from img/amy/
function getNurseryImages(){
  var dir = 'img/nursery/';
  var fileextension = [".JPG",".jpg"];
  $.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
      $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () {
        var filename = this.href.replace(window.location.host, "").replace("http:///", "");
        $('.nursery').append($("<li class=\"custom-thumbnail columns\"><a class=\"th radius\" href=" + dir + filename + "><img src=" + dir + filename + "></a></li>"));
      });
      $(document).foundation({
        clearing: {
          close_selectors : '.clearing-close',
          open_selectors : '',
          skip_selector : '',
          touch_label : '&larr;&nbsp;Swipe to Advance&nbsp;&rarr;'
        }
      });
    }
  });
}

getBumpImages();
getNurseryImages();
