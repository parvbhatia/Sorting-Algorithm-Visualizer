function Merge_Sort()
{
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "O(N log N)";
    document.getElementById("Time_Best").innerText = "O(N log N)";

    document.getElementById("Space_Worst").innerText = "O(N)";

    c_delay = 0;

    merge_partition(0, array_size-1);

    enable_buttons();
}

function M_Sort(start, mid, end)
{
    var p = start;
    var q = mid+1;

    var Arr = [];
    var k = 0;

    for(var i = start; i <= end; i++)
    {
        if(p > mid)
        {
            Arr[k++] = div_size[q++];
            div_update(divs[q-1], div_size[q-1], "red");//Color update
        }
        else if(q > end)
        {
            Arr[k++] = div_size[p++];
            div_update(divs[p-1], div_size[p-1], "red");//Color update
        }
        else if(div_size[p] < div_size[q])
        {
            Arr[k++] = div_size[p++];
            div_update(divs[p-1], div_size[p-1], "red");//Color update
        }
        else
        {
            Arr[k++] = div_size[q++];
            div_update(divs[q-1], div_size[q-1], "red");//Color update
        }
    }

    for(var t=0; t < k; t++)
    {
        div_size[start++] = Arr[t];
        div_update(divs[start-1], div_size[start-1], "green");//Color update
    }
}

function merge_partition(start, end)
{
    if(start < end)
    {
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_size[mid], "yellow");//Color update

        merge_partition(start, mid);
        merge_partition(mid+1, end);

        M_Sort(start, mid, end);
    }
}
