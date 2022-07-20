function Bubble_Sort()
{
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "O(N^2)";
    document.getElementById("Time_Best").innerHTML = "O(n)";

    document.getElementById("Space_Worst").innerHTML = "O(1)";

    c_delay = 0;

    var counter = 1;
    while(counter < array_size)
    {
        for(var i = 0; i < array_size-counter; i++)
        {
            div_update(divs[i], div_size[i], "yellow"); //colour update

            if(div_size[i] > div_size[i+1])
            {
                div_update(divs[i], div_size[i], "red"); //colour update
                div_update(divs[i+1], div_size[i+1], "red"); //colour update

                var temp = div_size[i];
                div_size[i] = div_size[i+1];
                div_size[i+1] = temp;

                div_update(divs[i], div_size[i], "red"); //colour update
                div_update(divs[i+1], div_size[i+1], "red"); //colour update
            }

            div_update(divs[i], div_size[i], "blue"); //colour update
        }
        div_update(divs[i], div_size[i], "green"); //colour update
        counter++;
    }


    div_update(divs[0], div_size[0], "green"); //colour update
    enable_buttons();
}
