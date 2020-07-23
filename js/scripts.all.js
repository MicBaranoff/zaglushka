
let dec1 = document.querySelector('.dec__dec1');
let dec2 = document.querySelector('.dec__dec2');
let dec3 = document.querySelector('.dec__dec3');
let dec4 = document.querySelector('.dec__dec4');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight; 
    if(window.innerWidth >= 1024) {
        dec1.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
        dec2.style.transform = 'translate(' + x * 70 + 'px, ' + y * 70 + 'px)';
        dec3.style.transform = 'translate(' + x * 50 + 'px, ' + y * 50 + 'px)';
        dec4.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
    }
    
});

window.onload=function(){
    document.querySelector('.main-wrapper').style.opacity = 1;
};
