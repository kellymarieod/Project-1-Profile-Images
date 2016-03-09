$(document).ready( function() {
  var textBox = $(".text-box");
  var footer = $(".footer");
  var offset = 0;

  $(window).scroll( function() {
    offset = $(window).scrollTop() - textBox.offset().top;
    // console.log(".text-box offset top " + textBox.offset().top);
    // console.log("window scroll top " + $(window).scrollTop());
    console.log("offset " + offset);
    if (offset > 100 && !$(footer).hasClass("shrink")) {
      footer.addClass("shrink");
      console.log("added class of 'shrink' to .footer");
    } else if (offset <= 100 && footer.hasClass("shrink")) {
      footer.removeClass("shrink");
      console.log("removed class of 'shrink' from .footer");
    } else {
      return;
    }
  });
});
