$(document).ready ( function() {
  $(".wrapper nav ul").children().each(function(index) {
    if ($(this).hasClass("tag-h2") || $(this).hasClass("tag-h3")) {
         $(this).remove()
    }
  })
});
