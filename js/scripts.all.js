
var dec = document.querySelector('.dec');
let dec1 = document.querySelector('.dec__dec1');
let dec2 = document.querySelector('.dec__dec2');
let dec3 = document.querySelector('.dec__dec3');
let dec4 = document.querySelector('.dec__dec4');
window.addEventListener('mousemove', function(e) {
    $(dec).each(function() {
        $(this).addClass( "active" );
      });
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight; 
    if(window.innerWidth >= 1024) {
        dec1.style.transform = 'translate(-' + x * 200 + 'px, -' + y * 200 + 'px)';
        dec1.classList.add('active');
        dec2.style.transform = 'translate(' + x * 140 + 'px, ' + y * 140 + 'px)';
        dec2.classList.add('active');
        dec3.style.transform = 'translate(' + x * 100 + 'px, ' + y * 100 + 'px)';
        dec3.classList.add('active');
        dec4.style.transform = 'translate(-' + x * 200 + 'px, -' + y * 200 + 'px)';
        dec4.classList.add('active');
    }
    
});

window.onload=function(){
    document.querySelector('.main-wrapper').style.opacity = 1;
};


function moveDiv() {
    dec1.classList.remove('active');
    dec2.classList.remove('active');
    dec3.classList.remove('active');
    dec4.classList.remove('active');

    let min = -400;
    let max = 400;
    var $span1 = $(".dec__dec1");
    var $span2 = $(".dec__dec2");
    var $span3 = $(".dec__dec3");
    var $span4 = $(".dec__dec4");
    
        var maxLeft = $(window).width() - $span1.width();
        var maxTop = $(window).height() - $span1.height();

        var leftPos1 = Math.floor(Math.random() *  (max - min) + min);
        var topPos1 = Math.floor(Math.random() *  (max - min) + min);


        var leftPos2 = Math.floor(Math.random() * (max - min) + min);
        var topPos2 = Math.floor(Math.random() * (max - min) + min);


        var leftPos3 = Math.floor(Math.random() * (max - min) + min);
        var topPos3 = Math.floor(Math.random() * (max - min) + min);


        var leftPos4 = Math.floor(Math.random() * (max - min) + min);
        var topPos4 = Math.floor(Math.random() * (max - min) + min);


        $span1.css({ 'transform': 'translate('+leftPos1+'px, '+topPos1+'px)'});
        $span2.css({ 'transform': 'translate('+leftPos2+'px, '+topPos2+'px)'});
        $span3.css({ 'transform': 'translate('+leftPos3+'px, '+topPos3+'px)'});
        $span4.css({ 'transform': 'translate('+leftPos4+'px, '+topPos4+'px)'});
};
if(window.innerWidth >= 1024) {
    moveDiv();
    setInterval(moveDiv, 3000);
}

