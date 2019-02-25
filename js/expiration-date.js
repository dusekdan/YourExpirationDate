let visualize = function (g, y, m, d) {
    var gender = convertGender(g);
    var year = parseInt(y);
    var month = convertMonth(m);
    var day = parseInt(d);

    var birth_date = new Date(year, month-1, day);
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

    var id = 1;

    //add cards to div element
    
    for (var row = 0; row < total_rows; row++){

        var new_row = document.createElement("div");
        new_row.classList.add("visualize-row");

        for (var column = 0; column < total_columns; column++){
            var new_item = document.createElement("div");
            new_item.classList.add("visualize-box");
            new_item.setAttribute("id", id.toString());
            id++;

            var new_inner_item = document.createElement("div");
            new_inner_item.classList.add("inner");

            new_item.appendChild(new_inner_item);
            new_row.appendChild(new_item);
        }

        new_visualize_grid.appendChild(new_row);
    }

    // Visualize how many weeks the person has lived.
    age_in_weeks = weeksBetween(birth_date, curr_date);
    let weeks_til_death = (total_columns * total_rows) - age_in_weeks;

    // Handle cases when one outlives themselves.
    if (weeks_til_death <= 0) {
        weeks_til_death = 0;
        document.getElementById('weeks-til-death').setAttribute('style', 'color: crimson;');
    } else {
        document.getElementById('weeks-til-death').setAttribute('style', 'color: rgba(76, 175, 79, 0.9);');
    }

    document.getElementById('weeks-wasted').innerText = age_in_weeks;
    document.getElementById('weeks-til-death').innerText = weeks_til_death;

    visualization_div.appendChild(new_visualize_grid);

    var row = 0;
    var visualize_transition = setInterval(visualization_passing, 30);

    function visualization_passing() {

        for (element_id = 1; element_id <= 104; element_id++) {
            var id = (row*104) + element_id 
            curr_element = document.getElementById(id.toString());
            if (curr_element !== null) {
                curr_element.classList.add("visualize-box-passed");
            }

            if (id >= age_in_weeks) {
                clearInterval(visualize_transition);
                break;
            }
        }

        row++;
        
    }

    let pending_box = document.getElementById(age_in_weeks.toString());
    if (pending_box) {
        pending_box.classList.add('pending');
    }
    

};


function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}


