function Insertion_Sort()
{
    document.getElementById("Time_Worst").innerHTML = "O(N^2)";
    document.getElementById("Time_Average").innerHTML = "O(N^2)";
    document.getElementById("Time_Best").innerHTML = "O(N)";

    document.getElementById("Space_Worst").innerHTML = "O(1)";

    c_delay = 0;

    for(var i = 1; i < array_size; i++)
    {
        div_update(divs[i], div_size[i], "yellow"); //colour update

        var key = div_size[i];
        var j = i-1;

        while(j >= 0 && div_size[j] > key)
        {
            div_update(divs[j], div_size[j], "red"); //colour update
            div_update(divs[j+1], div_size[j+1], "red"); //colour update
            
            div_size[j+1] = div_size[j];
            
            div_update(divs[j], div_size[j], "red"); //colour update
            div_update(divs[j+1], div_size[j+1], "red"); //colour update
            
            div_update(divs[j], div_size[j], "blue"); //colour update
            if(j == i-1)
            {
                div_update(divs[j+1],div_size[j+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[j+1],div_size[j+1],"blue");//Color update
            }
            j--;
        }

        div_size[j+1] = key;

        for(var k = 0; k < i; k++)
        {
            div_update(divs[k], div_size[k], "green"); //colour update
        }
        div_update(divs[i], div_size[i], "green"); //colour update

        enable_buttons();
    }
}