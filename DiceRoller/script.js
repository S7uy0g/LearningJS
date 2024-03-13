function roll(){
    let noOfDice=document.getElementById('Number').value;
    let imageContainer=document.getElementById('Images');
    let value=document.getElementById('values');
    let images=[];
    let total=0;
    for(let i=1;i<=noOfDice;i++){
        let values=Math.floor(Math.random()*6)+1;
        let image=`<img src="Images/${values}.png">`;
        total=values+total;
        images.push(image);
    }
    value.textContent=`Total:${total}`;
    imageContainer.innerHTML=images;
}