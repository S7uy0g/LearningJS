const images = document.querySelectorAll("img");
let i=0;
let interval=null;
function initiaizeImage(){
    if(images.length>0){
        images[i].style.display = "block";
        images[i].classList.add("animation");
        interval=setInterval(nextslide,2000);
    }
}
function displayImage(index) {
    images.forEach(image=>{
        image.style.display="none";
        image.classList.add("animation");
    });
    images[i].style.display = "block";
    images[i].classList.add("animation");
}

function nextslide(){
    i++;
    if(i>=images.length){
        i=0;
    }
    displayImage(i);
}
function prevslide(){
    clearInterval(interval);
    i--;
    if(i<0){
        i=images.length-1;
    }
    displayImage(i);
}

initiaizeImage();