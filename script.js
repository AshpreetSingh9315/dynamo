function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}
loco()

function img(){

    var main = document.querySelector('.main');
    var image = document.querySelector('.page1 .img');

    main.addEventListener('mousemove',function(dets){
        image.style.top=1-dets.y*0.05+"px"
        image.style.left=1-dets.x*0.05+"px"
    })


}

img()