//localStorage.tasks = JSON.stringify([]);

//update list
updateList();

function addEvent() {
    //input get
    let input = document.getElementById("Task_input");

    //take task from local storage
    let tasksArr = JSON.parse(localStorage.tasks);

    //push (new element) into array
    tasksArr.push(input.value);

    //update array to local storage
    localStorage.tasks = JSON.stringify(tasksArr);

    //empty the input
    input.value = "";

    //update list
    updateList();
}

function updateList() {
    //get reference ul(tasks)
    let ul = document.getElementById("tasks");

    //get tasks from localstorage
    let tasksArr = JSON.parse(localStorage.tasks);
    let length = tasksArr.length - 1;
    let html = "";


    for (let i = length; i >= 0; i--) {
        html += '<li class="list-group-item" id="' + i + ' "> ' + tasksArr[i] + ' <span class = "btn btn-danger btn-sm float-right remove_btn" onclick="removeItem(this)">Remove</span></li>'
    }

    ul.innerHTML = html;
}

//remove button
function removeItem(span_tag) {
    let index_id = span_tag.parentElement.id;

    //get array task
    let tasksArr = JSON.parse(localStorage.tasks);

    //update task in array
    tasksArr.splice(index_id, 1);

    //update localstorage new array
    localStorage.tasks = JSON.stringify(tasksArr);

    //update list
    updateList();
}

//pratiksha Sawandkar