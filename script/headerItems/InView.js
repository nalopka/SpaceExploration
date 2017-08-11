$(document).ready(function(){

inView.threshold(0.5);
inView('.section').on('enter', function(el){
console.log($(el));
var blockName = $(el).attr('id');
$('.header-menu').find('a[href="#'+blockName+'"]').addClass("active");
});

inView('.section').on('exit', function(el){
console.log($(el));
var blockName = $(el).attr('id');
$('.header-menu').find('a[href="#'+blockName+'"]').removeClass("active");
});

});