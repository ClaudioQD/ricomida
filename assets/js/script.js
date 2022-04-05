var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)



$("#titleA").click(function(){
$("#textoA").toggle("slow");
})

$("#titleB").click(function(){
$("#textoB").toggle("slow");
})
    
$("#titleC").click(function(){
$("#textoC").toggle("slow");
})
