//DEPENDENCIES: jQuery
function openDrawer(){
    $('.drawer-handle').toggleClass('open');
    $('.dropdown-menu').toggleClass('open');
    $('header').toggleClass('open');
}