/*!

Name: highlightReel
Dependencies: jQuery
Author: Justin Duke
Author URL: http://jmduke.com
Github URL: https://github.com/jmduke
Licensed under the MIT license

*/

;(function($) {

  $.fn.highlightReel = function (options) {

    var defaults = {
      
      count     : 5,
      title     : true,
      teaser    : true,
      linked    : true,
      stats     : true,


    }, settings = $.extend({}, defaults, options);

    this.each(function () {

      var el = $(this);

      if (options === undefined || options.username === undefined) {
        alert("You must provide a Dribbble username or ID.");
        return false;
      }

      var username = settings.username;
      var url = "http://api.dribbble.com/players/" + username + "/shots?callback=?";

      $.getJSON(url, function (data) {

        var limit = settings.count;
        var list = $('<ul class="highlightReel"></ul>').replaceAll(el);

        for (var i = 0; i < limit; i++) {

          list.append('<li class="details" />');

        };

        if (settings.stats === true) {

          list.children('.details').each(function (index) {

            $(this).prepend('<ul class="stats">' + 
              '<li class="views">' + data.shots[index].views_count +
              '<li class="likes">' + data.shots[index].likes_count +
              '</ul>');

          });

        }

        var imageSource = "";
        if (settings.teaser === true) { 

          imageSource = "image_teaser_url"; 

        } else {

          imageSource = "image_url";

        }

        list.children('li').each(function (index) {

          var imgSrc = data.shots[index][imageSource];

          $(this).prepend('<span class="shot"><img src="' + imgSrc + '"/></span>');

        });

        if (settings.title === true) {

          list.children('li').each(function (index) {

            $(this).prepend('<span class="title">' + data.shots[index].title + "</span>");

          });

        }

        if (settings.linked === true) {

          list.children('.details').each(function (index) { 

            $(this).wrap('<a href="' + data.shots[index].url + '" target="_blank"></a>');

          });

        }

      });

    });

    return this;

  };

}(jQuery));