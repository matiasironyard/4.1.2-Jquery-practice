(function($){
  $(function(){
    "use strict";

var navRow = $('.nav-row');
var menuList = $('.menu-list');
var menuItems = $('li');


menuItems.hide();

navRow.click(function(event){
  event.preventDefault();
  navRow.css('background-color', '#4E5052');
});

navRow.click(function(event){
  event.preventDefault();
  menuList.slideDown();
  $(this).next().children().slideToggle(500);
  $(this).css('background-color', '#849A32');
});

//-----------


});
}(jQuery));
