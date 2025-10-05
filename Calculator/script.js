const result = document.getElementById('result');

function appendValue(value) {
    result.value += value;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = 'Error';
    }
}

function clearResult() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

const box = document.getElementById("resultBox");
box.scrollLeft = box.scrollWidth; 

function updateResult(text) {
    const box = document.getElementById("result");
    box.textContent = text;
    box.scrollLeft = box.scrollWidth; 
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
        event.preventDefault();
        backspace();
    }
});
