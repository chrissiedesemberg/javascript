var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // find out the day of the week.
    var dayOfWeek = d.getDay();

    /* set a variable, called youShould, with a different
       string based on what day of the week it is. */
    var youShould;

    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Do 10 sit ups!";
            break;
        case 2:
            youShould = "Do 20 crunches!";
            break;
        case 3:
            youShould = "Give that tummy a rest!";
            break;
        case 4:
            youShould = "Plank for 60 seconds! Three times in the day!";
            break;
        case 5:
            youShould = "Side plank for 60 seconds, three times in the day!";
            break;
        case 6:
            youShould = "Sit up straight and activate those muscles!";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }

    // output the value of youShould into the thingToDo div    
    document.getElementById("thingToDo").innerHTML = youShould;
}