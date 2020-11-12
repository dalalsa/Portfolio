$(document).ready(function() {
  var $cardGreen = $(".item.green");
  var $cardOrange = $(".item.Orange");
  var $cardBlue = $(".item.blue");

  // $cardGreen.hover(function() {
  //   $cardGreen.toggleClass("animated flash");
  // });
  // $cardOrange.hover(function() {
  //   $cardOrange.toggleClass("animated flash");
  // });
  // $cardBlue.hover(function() {
  //   $cardBlue.toggleClass("animated flash");
  // });
  // $cardOrange.hover(function() {
  //   $cardOrange.toggleClass("animated flash");
  // });
});
const htmlPink = document.querySelector("#myTemplatePetApp");

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
const htmlOrange = document.querySelector("#myTemplateTicTacToe");

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

const htmlRed = document.querySelector("#myTemplateWhereToEat");

tippy(".tooltipRed", {
  content: htmlRed,
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
