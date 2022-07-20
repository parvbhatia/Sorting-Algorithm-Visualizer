function Selection_Sort()
{
    document.getElementById("Time_Worst").innerHTML = "O(N^2)";
    document.getElementById("Time_Average").innerHTML = "O(N^2)";
    document.getElementById("Time_Best").innerHTML = "O(N^2)";

    document.getElementById("Space_Worst").innerHTML = "O(1)";

    c_delay = 0;

    for(var i = 0; i < array_size-1; i++)
    {
        div_update(divs[i], div_size[i], "red"); //colour update

        var index_min = i;
        
        for(j = i+1; j < array_size; j++)
        {
            div_update(divs[j], div_size[j], "yellow"); //colour update

            if(div_size[index_min] > div_size[j])
            {
                if(index_min != i)
                {
                    div_update(divs[index_min], div_size[index_min], "blue"); //colour update
                }

                index_min = j;
                div_update(divs[index_min], div_size[index_min], "red") //colour update
            }

            else
            {
                div_update(divs[j], div_size[j], "blue"); //colour update
            }
        }

        if(index_min != i)
        {
            var temp = div_size[index_min];
            div_size[index_min] = div_size[i];
            div_size[i] = temp;

            div_update(divs[index_min], div_size[index_min], "red"); //height colour update
            div_update(divs[i], div_size[i], "red"); // height colour update
            div_update(divs[index_min], div_size[index_min], "blue"); //colour update
        }
        div_update(divs[i], div_size[i], "green"); //colour update
    }
    div_update(divs[i], div_size[i], "green"); //colour update

    enable_buttons();
}