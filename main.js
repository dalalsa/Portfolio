$(document).ready(function() {
  var $cardGreen = $(".item.green");
  var $cardPink = $(".item.pink");
  var $cardBlue = $(".item.blue");
  var $cardOrange = $("div.item.orange");
  var infoDiv = document.querySelector(".infoDiv");

  $cardGreen.hover(function() {
    $cardGreen.toggleClass("animated flash");
  });
  $cardPink.hover(function() {
    $cardPink.toggleClass("animated flash");
  });
  $cardBlue.hover(function() {
    $cardBlue.toggleClass("animated flash");
  });
  // $cardOrange.hover(function() {
  //   $cardOrange.toggleClass("animated flash");
  // });
  $cardGreen.click(function() {
    infoDiv.innerText = "hii1";
  });
  $cardPink.click(function() {
    infoDiv.innerText = "hii2";
  });
  $cardBlue.click(function() {
    infoDiv.innerText = "hii3";
  });
  $cardBlue.click(function() {
    var CSStransforms = anime({
      targets: "#move .blue",
      translateX: 400  ,
      translateY: -200,

      scale: 2,
      rotate: "2turn"
    });
    CSStransforms;
  });
  $cardOrange.click(function() {
   
    
    var orangContent = "<p>Test</p>";
   // $cardOrange.append(orangContent);
    
     
    var CSStransforms = anime({
      targets: "#move .orange",
      translateX: 80  ,
      translateY: -200,

      scale: 1.5

      // rotate: "1turn"
    });
    
      $cardOrange.next(".hidden-content").slideToggle();
    CSStransforms;
      return false;

  });
  
  //$hoverCard.addEventListener("mousemove", onMouseMove);
  function onMouseMove(event) {
    console.log("hi");
    var infoDiv = document.querySelector(".infoDiv");
    infoDiv.innerText = "hii";
  }
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

