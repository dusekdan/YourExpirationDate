let visualize = function () {
    var gender = 0;
    var year = 1994;
    var month = 1;
    var day = 7;

    var average_lifespan = 70;

    alert("Let's visualize!");

    if (gender) {
        // woman
        average_lifespan = 80;

    }
    else {
        // man
    }


    visualization_div = document.getElementById("lifespan-visualization");

    var total_columns = 104; // two years
    var total_rows = average_lifespan/2

    //add cards to div element
    for (var row = 0; row < total_rows; row++){

        var new_row = document.createElement("div");
        new_row.classList.add("row");

        for (var column = 0; column < total_columns; column++){
            var new_item = document.createElement("div");
            new_item.classList.add("box");

            var new_inner_item = document.createElement("div");
            new_inner_item.classList.add("inner");

            var text_elem = document.createTextNode(((row*104)+column).toString());

            new_inner_item.appendChild(text_elem);
            new_item.appendChild(new_inner_item);
            new_row.appendChild(new_item);
        }

        visualization_div.appendChild(new_row);
    }



};


document.getElementById("visualize-button").addEventListener("click") = visualize;