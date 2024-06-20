const display = document.getElementById("display");

function append_to_display(input){
    display.value += input;
}

function calculate(){
    display.value = eval(display.value);
}

function clearDisplay(){
    display.value = "";
}