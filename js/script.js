var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

// Slider Listener
$('.range-slider').on('change.fndtn.slider', function(){
  if ( width > 768 ) {
    var value = $('.range-slider').attr('data-slider');
    $('.custom-thumbnail').css({'width':value+"%"});
  }else{
    $('.custom-thumbnail').css({'width':"50%"});
  }
});

// Clearing Close listener
$(document.body).on("closed.fndtn.clearing", function() {
  if ( width > 768 ) {
    var value = $('.range-slider').attr('data-slider');
    $('.custom-thumbnail').css({'width':value+"%"});
  }else{
    $('.custom-thumbnail').css({'width':"50%"});
  }
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

// Function to Get and create Thumnails for Mackenzie Section from img/amy/
function getMackenzieWeekImages(){
  var dir = '/img/mackenzie/wk/';
  var fileextension = [".png",".jpg"];
  $.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
      $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () {
        var filename = this.href.replace(window.location.host, "").replace("http:///", "").replace("mackenzie-weeks/","");
        console.log(filename);
        label = "Week ";
        var num = filename.replace("wks", "").replace(".jpg","");
        $('.mackenzie-wk').append($("<li class=\"custom-thumbnail columns\"><a class=\"th radius\" href=" + dir + filename + "><img data-caption=\"" + label + num + "\" src=" + dir + filename + "></a></li>"));
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

function getMackenzieMonthImages(){
  var dir = '/img/mackenzie/mo/';
  var fileextension = [".png",".jpg"];
  $.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
      $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () {
        var filename = this.href.replace(window.location.host, "").replace("http:///", "");
        label = "Month ";
        var num = filename.replace("mos", "").replace(".jpg","");
        $('.mackenzie-mo').append($("<li class=\"custom-thumbnail columns\"><a class=\"th radius\" href=" + dir + filename + "><img data-caption=\"" + label + num + "\" src=" + dir + filename + "></a></li>"));
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

function getBarrettMonthImages () {
  var dir = '/img/barrett/mo/';
  var fileextension = [".png",".jpg","jpeg"];
  $.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
      $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () {
        var filename = this.href.replace(window.location.host, "").replace("http:///", "").replace("barrett-months/","");
        label = "Month ";
        var num = filename.replace("mos", "").replace(".jpeg","");
        $('.barrett-mo').append($("<li class=\"custom-thumbnail columns\"><a class=\"th radius\" href=" + dir + filename + "><img data-caption=\"" + label + num + "\" src=" + dir + filename + "></a></li>"));
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
