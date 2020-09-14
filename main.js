$('.spoiler').hide();

$('.spoilerButton').on('click', function () {
$('.spoiler2').hide();
$('.spoiler3').hide();
  $('.spoiler').fadeIn(2000);
});




$('.spoiler2').hide();
$('.spoilerButton2').on('click', function () {
$('.spoiler').hide();
$('.spoiler3').hide();
  $('.spoiler2').fadeIn(2000);
});




$('.spoiler3').hide();
$('.spoilerButton3').on('click', function () {
$('.spoiler').hide();
$('.spoiler2').hide();
  $('.spoiler3').fadeIn(2000);
});
