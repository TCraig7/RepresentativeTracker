// This file is in the entry point in your webpack config.
$("#find-button").on("click", () => {
  $('.search-container').slideUp(900);
  $('.index-container').slideDown();
})

$('.name-link').on("click", () => {
  $('.index-container').slideUp(900);
  $('.individual-member-container').slideDown();
})

$(".topnav-container").on("click", () => {
  $('.index-container').slideUp(600);
  $('.individual-member-container').slideUp(600);
  $('.search-container').slideDown(600);
})
