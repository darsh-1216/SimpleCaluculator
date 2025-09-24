const result = document.getElementById('result');

function appendValue(value){
    result.value += value;
}

function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch{
        result.value='Error';
    }
}

function clearResult(){
    result.value='';
}