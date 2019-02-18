let visualize = function (g, y, m, d) {
    var gender = convertGender(g);
    var year = parseInt(y);
    var month = convertMonth(m);
    var day = parseInt(d);

    //male, null, null, null

    var birth_date = new Date(year, month, day);
    var curr_date = new Date();

    var average_lifespan = 70;

    if (gender) {
        // woman
        average_lifespan = 80;

    }
    else {
        // man
    }


    visualization_div = document.getElementById("lifespan-visualization");

    while (visualization_div.firstChild) {
        visualization_div.removeChild(visualization_div.firstChild);
    }

    new_visualize_grid = document.createElement("div");
    new_visualize_grid.classList.add("visualize-grid");


    var total_columns = 104; // two years
    var total_rows = average_lifespan/2;

    id = 1;

    //add cards to div element
    for (var row = 0; row < total_rows; row++){

        var new_row = document.createElement("div");
        new_row.classList.add("visualize-row");

        for (var column = 0; column < total_columns; column++){
            var new_item = document.createElement("div");
            new_item.classList.add("visualize-box");
            new_item.setAttribute("id", id);
            id++;

            var new_inner_item = document.createElement("div");
            new_inner_item.classList.add("inner");

            //var text_elem = document.createTextNode(((row*104)+column).toString());

            //new_inner_item.appendChild(text_elem);
            new_item.appendChild(new_inner_item);
            new_row.appendChild(new_item);
        }

        new_visualize_grid.appendChild(new_row);
    }

    age_in_weeks = weeksBetween(birth_date, curr_date);
    new_announcenment = document.createTextNode(age_in_weeks.toString() + " weeks are gone..");

    visualization_div.appendChild(new_announcenment);
    visualization_div.appendChild(new_visualize_grid);

    for (var curr_id = 1; curr_id <= age_in_weeks; curr_id++) {
        curr_element = document.getElementById(curr_id);
        curr_element.setAttribute("style", "-webkit-animation: color_passed 2s ease-in-out;\
        -moz-animation: color_passed 2s ease-in-out;\
        -ms-animation: color_passed 2s ease-in-out;\
        -o-animation: color_passed 2s ease-in-out;\
        animation: color_passed 2s ease-in-out;\
        ");
    }

    setTimeout(() => {
        for (var curr_id = 1; curr_id <= age_in_weeks; curr_id++) {
            curr_element = document.getElementById(curr_id);
            curr_element.classList.add("visualize-box-passed");
        }
    }, 1000);


};


function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

document.getElementById("visualize-button").addEventListener("click") = visualize;


