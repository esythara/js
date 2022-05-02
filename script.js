$(function () {
  var galleryItems = $(".gallery").find("img");
  galleryItems.css("width", "33%").css("opacity", "0.7");

  galleryItems.mouseenter(function () {
    $(this).stop().fadeTo(200, 1);
  });

  galleryItems.mouseleave(function () {
    $(this).stop().fadeTo(200, 0.8);
  });

  galleryItems.click(function () {
    var source = $(this).attr("src");
    var image = $("<img>").attr("src", source).css("width", "100%");
    $(".lightbox").empty().append(image).fadeIn(200);
  });
  $(".lightbox").click(function () {
    $(this).stop().fadeOut();
  })
});

