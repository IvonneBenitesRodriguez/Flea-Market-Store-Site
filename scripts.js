
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  function interaction(event){
      alert("Please watch the video and you will find France is a great place to visit FleaMarkets 🇫🇷💞👜👓🖼👒!");
  }
let nicebutton = document.querySelector("#parisButton");
nicebutton.addEventListener("click", interaction);

function change(event){
    alert("Berlin is not only BrandeBurg Platzt 🇩🇪🥿👚⌚📒!");
}
let prettybutton = document.querySelector("#berlinButton");
prettybutton.addEventListener("click", change);

function display(event){
    alert("Barcelona is not only Las Ramblas 🇪🇸🥿👚⌚📒!");
}
let beautifulbutton = document.querySelector("#barcelonaButton");
beautifulbutton.addEventListener("click", display);

$(function(){
    $(".carousel").carousel({interval:2000});
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("i").hasClass("fa-pause")){
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
    } else{
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
    }
});
});