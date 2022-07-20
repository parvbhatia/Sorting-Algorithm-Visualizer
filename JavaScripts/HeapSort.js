function Heap_Sort()
{
    document.getElementById("Time_Worst").innerHTML = "O(N log N)";
    document.getElementById("Time_Average").innerHTML = "O(N log N)";
    document.getElementById("Time_Best").innerHTML = "O(N log N)";

    document.getElementById("Space_Worst").innerHTML = "O(1)";

    c_delay = 0;

    heapsort();

    enable_buttons();
}

function swap(i, j)
{
    div_update(divs[j], div_size[j], "red");    
    div_update(divs[j], div_size[j], "red");
    
    var temp = div_size[i];
    div_size[i] = div_size[j];
    div_size[j] = temp;

    div_update(divs[i], div_size[i], "red");
    div_update(divs[j], div_size[j], "red");

    div_update(divs[i], div_size[i], "blue");
    div_update(divs[j], div_size[j], "blue");
}

function heapify(n, i)
{
    var largest = i;
    var left = 2*i + 1;
    var right = 2*i + 2;

    if(left < n && div_size[left] > div_size[largest])
    {
        if(largest != i)
        {
            div_update(divs[largest], div_size[largest], "blue");
        }
        largest = left;
        
        div_update(divs[largest], div_size[largest], "red");
    }

    if(right < n && div_size[right] > div_size[largest])
    {
        if(largest != i)
        {
            div_update(divs[largest], div_size[largest], "blue");
        }
        largest = right;
        
        div_update(divs[largest], div_size[largest], "red");
    }

    if(largest != i)
    {
        swap(i, largest);
        heapify(n, largest);
    }
}

function heapsort()
{
    //build heap
    for(var i = Math.floor(array_size/2)-1; i >= 0; i--)
    {
        heapify(array_size, i);
    }

    for(var i = array_size-1; i > 0; i--)
    {
        swap(0, i);
        div_update(divs[i], div_size[i], "green");
        div_update(divs[i], div_size[i], "yellow");

        heapify(i, 0);
        
        div_update(divs[i], div_size[i], "blue");
        div_update(divs[i], div_size[i], "green");
    }
    div_update(divs[i], div_size[i], "green");
}