
const iconMenu = document.querySelector('.header-burger');
const menuBody = document.querySelector('.header-menu');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}
// =================================================
function myMap() {
    var mapCanvas = document.querySelector(".map");
    var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
// ===============================================
document.addEventListener('click', documentAction);
function documentAction(e){
    const targetElem = e.target;
    if (targetElem.classList.contains('arow')) {
        targetElem.closest('.arows').classList.toggle('rotte')
        
    }
}