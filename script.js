
const body  = document.getElementById('con1');
const background = document.getElementById('background');
const entry = document.getElementById('entry');
const words = document.getElementById('words');
const input = document.getElementById('input');
const action = document.getElementById('action');
const text = document.getElementById('text');
const change = document.getElementById('change');
const picker = document.getElementById('picker');
const color = document.getElementById('color');
const colorPicker = document.getElementById('colorPicker');


change.onclick = function(){
    if(text.innerHTML == "This is the first HTML, CSS and JavaScript Fusion"){
        text.innerHTML = "I am coding";
    }
    else if(text.innerHTML == "I am coding"){
        text.innerHTML = "This is the first HTML, CSS and JavaScript Fusion";
    }
}

colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    body.style.backgroundColor = selectedColor;
  });

color.onclick = function(){
    let value = picker.value;

    body.style.background = value;
}


background.onclick = function(){
    if (background.innerHTML == "🌙"){
        body.style.background = 'black';
        body.style.color = "white";
        background.innerHTML = "☀️";
        background.style.background = "white";
        entry.style.background = "white";
        entry.style.color = "black";
    }

    else if (background.innerHTML == "☀️"){
        body.style.background = 'white';
        body.style.color = "black";
        background.innerHTML = "🌙";
        background.style.background = "black";
        entry.style.background = "white";
        entry.style.color = "black";
    }
}