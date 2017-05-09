jQuery(document).ready(function($) {
  var menuButton = $("#menu-button");
  var menu = $(".hotrod__header-nav nav.menu");
  menuButton.click(function() {
    menu.slideToggle();
  });
});
