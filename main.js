$(document).ready(function() {
  var $cardGreen = $(".item.green");
  var $cardPink = $(".item.pink");
  var $cardBlue = $(".item.blue");
 

  // $cardGreen.hover(function() {
  //   $cardGreen.toggleClass("animated flash");
  // });
  // $cardPink.hover(function() {
  //   $cardPink.toggleClass("animated flash");
  // });
  // $cardBlue.hover(function() {
  //   $cardBlue.toggleClass("animated flash");
  // });
  // $cardOrange.hover(function() {
  //   $cardOrange.toggleClass("animated flash");
  // });
 
});
const htmlOrange = document.querySelector("#myTemplatePetApp"); 

tippy(".tooltipOrange", {
  content: htmlOrange,
  delay: 100,
  arrow: true,
  arrowType: "round",
  size: "large",
  duration: 500,
  animation: "scale",
  allowHTML: true,
  flip: true,
  // followCursor: true,
  interactive: true,
  theme: "google"
});

const htmlBlue = document.querySelector("#myTemplateEcommerceApp"); 

tippy(".tooltipBlue", {
  content: htmlBlue,
  delay: 100,
  arrow: true,
  arrowType: "round",
  size: "large",
  duration: 500,
  animation: "scale",
  allowHTML: true,
  flip: true,
  // followCursor: true,
  interactive: true,
  theme: "google"
});
const htmlPink = document.querySelector("#myTemplateTicTacToe"); 

tippy(".tooltipPink", {
  content: htmlPink,
  delay: 100,
  arrow: true,
  arrowType: "round",
  size: "large",
  duration: 500,
  animation: "scale",
  allowHTML: true,
  flip: true,
  // followCursor: true,
  interactive: true,
  theme: "google"
});
const htmlGreen = document.querySelector("#myTemplateMultiPlayerGame"); 

tippy(".tooltipGreen", {
  content: htmlGreen,
  delay: 100,
  arrow: true,
  arrowType: "round",
  size: "large",
  duration: 500,
  animation: "scale",
  allowHTML: true,
  flip: true,
  // followCursor: true,
  interactive: true,
  theme: "google"
});

