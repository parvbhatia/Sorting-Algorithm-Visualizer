function Quick_Sort()
{
    document.getElementById("Time_Worst").innerHTML = "O(N^2)";
    document.getElementById("Time_Average").innerHTML = "O(N log N)";
    document.getElementById("Time_Best").innerHTML = "O(N log N)";

    document.getElementById("Space_Worst").innerHTML = "O(log N)";

    c_delay = 0;

    quickSort(0, array_size-1);

    enable_buttons();
}

function quickSort(start, end)
{
    if(start < end)
    {
        var pidx = partition(start, end);

        quickSort(start, pidx-1);
        quickSort(pidx+1, end);
    }
}

function partition(start, end)
{
    var pivot = div_size[start];
    var i = start + 1;  
    div_update(divs[start], div_size[start], "yellow");

    for(var j = start+1; j <= end; j++)
    {
        if(div_size[j] < pivot)
        {
            div_update(divs[j], div_size[j], "yellow");
            
            div_update(divs[i], div_size[i], "red");
            div_update(divs[j], div_size[j], "red");

            swap(i, j);
            
            div_update(divs[i], div_size[i], "red");
            div_update(divs[j], div_size[j], "red");
            
            div_update(divs[i], div_size[i], "blue");
            div_update(divs[j], div_size[j], "blue");
            
            i++;
        }
    }

    div_update(divs[start], div_size[start], "red");
    div_update(divs[i-1], div_size[i-1], "red");
    
    swap(start, i-1);

    div_update(divs[start], div_size[start], "red");
    div_update(divs[i-1], div_size[i-1], "red");
    
    for(var t = start; t <= i; t++)
    {
        div_update(divs[t], div_size[t], "green");
    }

    return i-1;
}

function swap(i, j)
{
    var temp = div_size[i];
    div_size[i] = div_size[j];
    div_size[j] = temp;
}