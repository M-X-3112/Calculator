let display = document.getElementById('display')

function press(x) {
    display.value += x 
}
function calculate() {
    try{
        let result = eval(display.value);
        display.value = parseFloat(result.toFixed(10));
    }catch(e) {
        display.value = "error"
    }
}
function displayClean() {
    display.value = ""
}
function backSpace() {
    display.value = display.value.slice(0,-1)
}
