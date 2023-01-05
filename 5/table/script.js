document.getElementById("palette").style.display = "block";
let chosen_color = "#009688";
document.querySelector('jsuites-color').addEventListener('onchange', function(a,b,c) {
    chosen_color = this.value;
});

function changeTdColor() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    document.getElementById("task1").style.backgroundColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function clickChangeColor() {
    document.getElementById("task1").style.backgroundColor = chosen_color;

}

function changeTrColor() {
    let current_color = document.getElementById("task1").style.backgroundColor;
    document.getElementById("column1").style.backgroundColor = current_color;
    document.getElementById("column2").style.backgroundColor = current_color;
    document.getElementById("column3").style.backgroundColor = current_color;
    document.getElementById("column4").style.backgroundColor = current_color;
    document.getElementById("column5").style.backgroundColor = current_color;
    document.getElementById("column6").style.backgroundColor = current_color;
    document.getElementById("column7").style.backgroundColor = current_color;
    document.getElementById("column8").style.backgroundColor = current_color;
    document.getElementById("column9").style.backgroundColor = current_color;
    document.getElementById("column10").style.backgroundColor = current_color;
    document.getElementById("column11").style.backgroundColor = current_color;
    document.getElementById("column12").style.backgroundColor = current_color;
    document.getElementById("column13").style.backgroundColor = current_color;
    document.getElementById("column14").style.backgroundColor = current_color;
    document.getElementById("column15").style.backgroundColor = current_color;
    document.getElementById("column16").style.backgroundColor = current_color;
    document.getElementById("column17").style.backgroundColor = current_color;
}
