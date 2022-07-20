//  Variables
var inp_size = document.getElementById('size'), array_size = inp_size.value;
var inp_gen = document.getElementById("generate");
var inp_speed = document.getElementById("speed");
var button_algo = document.querySelectorAll(".algos button");
var div_size = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";


//  Array generation and updation
inp_gen.addEventListener("click", generate_array);
inp_size.addEventListener("input", update_array_size); 


function generate_array()
{
    cont.innerHTML = "";

    for(var i = 0; i < array_size; i++)
    {
        div_size[i] = Math.floor(Math.random() * 0.5 * (inp_size.max - inp_size.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = "margin:0%" + margin_size + "%; background-color:blue; width:" + (100/array_size - (2*margin_size)) + "%; height:" + (div_size[i]) + "%;";
    }
    
}

function update_array_size()
{
    array_size = inp_size.value;
    generate_array();
}

window.onload = update_array_size();

//  Running the Clicked Algorithm Button
for(var i = 0; i < button_algo.length; i++)
{
    button_algo[i].addEventListener("click", runalgo);
}

function disable_buttons()
{
    for(var i = 0; i < button_algo.length; i++)
    {
        button_algo[i].classList = [];
        button_algo[i].classList.add("butt_locked");

        button_algo[i].disabled = true;
        inp_size.disabled = true;
        inp_gen.disabled = true;
        inp_speed.disabled = true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble": Bubble_Sort();
            break;
        case "Selection": Selection_Sort();
            break;
        case "Insertion": Insertion_Sort();
            break;
        case "Merge": Merge_Sort();
            break;
        case "Quick": Quick_Sort();
            break;
        case "Heap": Heap_Sort();
            break;
    }
}


