let count=100000000;
document.getElementById("Decrease").onclick=function(){
    count--;
    document.getElementById("Number").textContent=count;
}
document.getElementById("Reset").onclick=function(){
    count=0;
    document.getElementById("Number").textContent=count;
}
document.getElementById("Increase").onclick=function(){
    count++;
    document.getElementById("Number").textContent=count;
}