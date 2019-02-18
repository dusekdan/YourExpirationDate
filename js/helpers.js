const getSharedDDO = () => {
    return { "coverTrigger": false, "constrainWidth": false, "closeOnClick": true } ;
}

const getDDItem = value => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", "#!");
    a.innerText = value;
    li.appendChild(a)
    
    return li;
}

const localStorageDoesNotExist = () => {
    let ls = window.localStorage;
    return ( 
        ls.getItem("dd-gender") === null && 
        ls.getItem("dd-day") === null && 
        ls.getItem("dd-month") === null && 
        ls.getItem("dd-year") === null
    );
}
const updateLocalStorage = (key, value) => {    
    let ls = window.localStorage;
    ls.setItem(key, value);
}

const retrieveUsersLastSelection = () => {
    // Retrieve data only when local storage was previously created.
    if (!localStorageDoesNotExist()) {
        let ls = window.localStorage;
        let gender = ls.getItem("dd-gender");
        let day = ls.getItem("dd-day");
        let month = ls.getItem("dd-month");
        let year = ls.getItem("dd-year");
        
        if (gender !== null) {
            document.getElementById("dd-gender").innerText = gender;
        }

        if (day !== null) {
            document.getElementById("dd-day").innerText = day;
        }

        if (month !== null) {
            document.getElementById("dd-month").innerText = month;
        }

        if (year !== null) {
            document.getElementById("dd-year").innerText = year;
        }

        return true;
    }

    return false;
}