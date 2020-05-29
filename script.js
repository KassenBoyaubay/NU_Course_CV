jQuery(document).ready(function ($) {
  // Nav smooth scrolling
  $("nav a").on("click", function () {
    var $root = $("html, body"),
      $this = $(this),
      href = $this.attr("href");

    $root.animate(
      {
        scrollTop: $(href).offset().top,
      },
      500,
      function () {
        window.location.hash = href;
      }
    );

    return false;
  });
});
