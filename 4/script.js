function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
        let el1 = document.getElementById("hobby");
        el1.style.background = getRandomColor();
        el1.style.color = getRandomColor();
}

function changeColor2(){
        let el2 = document.querySelector("#hobby1");
        el2.style.background = getRandomColor();
        el2.style.color = getRandomColor();
}

function addImage() {
    let img = document.getElementById("img");
    img.innerHTML += "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Vivid_Sydney_2016_Sydney_Opera_House_Songlines_CREDIT_Destination_NSW_JH_002.jpg/200px-Vivid_Sydney_2016_Sydney_Opera_House_Songlines_CREDIT_Destination_NSW_JH_002.jpg\" id='image' width='720' height='540' " +
        "alt='Amsterdam2'/>";

}

function deleteImage() {
    let img = document.getElementById("img");
    img.innerHTML = "<p></p>";
}

function biggerImage(){
    let myImg = document.getElementById("image");
    let currWidth = myImg.clientWidth;
    let currHeight = myImg.clientHeight;
    if(currWidth >= 1000){
        alert("You have reached the maximum!");
    } else{
        myImg.style.width = (currWidth + 20) + "px";
        myImg.style.height = (currHeight + 20) + "px";
    }
}

function smallerImage(){
    let myImg2 = document.getElementById("image");
    let currWidth2 = myImg2.clientWidth;
    let currHeight2 = myImg2.clientHeight;
    if(currHeight2 <= 160){
        alert("You have reached the minimum!");
    } else{
        myImg2.style.width = (currWidth2 - 20) + "px";
        myImg2.style.height = (currHeight2 - 20) + "px";
    }
}
