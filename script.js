// setting the default date as today

const taskDate = document.getElementById("taskdate");

const today = new Date().toISOString().split("T")[0];

taskDate.value = today;

// --------------
const Add = document.getElementById("Add");
const taskArea = document.getElementById("taskArea");
const ul = document.getElementById("ul");
const score = document.getElementById("score");
const resetBtn = document.getElementById("Reset");


// array to store tasks
let tasks = [];


taskDate.addEventListener("change",()=>{
    const locked = isPastDate(taskDate.value);
    Add.disabled = locked;
    taskArea.disabled = locked;
     
     renderTask();
})

// save tasks in localStorage
function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}



// update score
function updateScore() {

   const selectedTasks = tasks.filter(task=>task.date === taskDate.value)

    const completedTasks =
        selectedTasks.filter(task => task.completed).length;

    const totalTasks = selectedTasks.length;

    score.innerText =
        `Score: ${completedTasks}/${totalTasks}`;
}



// reusable function to create task
function createTask(taskValue) {

    
    // create li
    const li = document.createElement("li");

    const locked = isPastDate(taskValue.date);

    if(locked){
        li.style.opacity = "0.7";
        li.style.cursor = "not allowed";
    }

    // task text
    const taskText = document.createElement("span");

    taskText.innerText = taskValue.text.toUpperCase();

   

    // checkbox
    const checkbox = document.createElement("input");

    checkbox.disabled = locked;
    checkbox.type = "checkbox";

    checkbox.classList.add("task-checkbox");



    // restore saved checkbox state
    checkbox.checked = taskValue.completed;



    // checkbox event
    checkbox.addEventListener("change", () => {

        taskValue.completed = checkbox.checked;

        saveTasks();

      renderTask();

    });




    // delete icon
    const deleteIcon = document.createElement("i");

    deleteIcon.classList.add(
        "fa-solid",
        "fa-trash",
        "delete-icon"
    );



    // delete task
    deleteIcon.addEventListener("click", () => {

        if(locked)return;

        tasks = tasks.filter(
            task=> task!== taskValue
        )
        // save updated tasks
        saveTasks();

    //    render
    renderTask();
       

    });




    // add elements inside li
    li.appendChild(taskText);

    li.appendChild(deleteIcon);

    li.appendChild(checkbox);




    // add li into ul
    ul.appendChild(li);
}





// load tasks after refresh
function loadTasks() {

    const storedTasks =
        localStorage.getItem("tasks");



    if (storedTasks) {

        tasks = JSON.parse(storedTasks);

        renderTask();
    }



   
}





// add button
Add.addEventListener("click", () => {


    if (isPastDate(taskDate.value)) {
    return;
}
    // prevent empty tasks
    if (taskArea.value === "") {

        return;
    }



    // create task object
    const newTask = {

        text: taskArea.value,
        date: taskDate.value,
        completed: false
    };



    // add into array
    tasks.push(newTask);



    // save tasks
    saveTasks();



    // show on screen
    renderTask();



  

    // clear input
    taskArea.value = "";

});


// reset button
resetBtn.addEventListener("click", () => {
    
    let warning = confirm("Are you sure you want to reset")

    if(warning){
    // clear array
    tasks = [];

    // clear localStorage
    saveTasks();

    // clear UI
    ul.innerHTML = "";

    // reset score
    updateScore();}

});

 function renderTask(){
    ul.innerHTML = "";

    const selectedTasks = tasks.filter(
    task => task.date === taskDate.value
);

    selectedTasks.forEach(task=> {
         createTask(task)
    });
    updateScore();
 }

 taskDate.addEventListener("change", ()=>{
    renderTask();
 })
 
 function isPastDate(date){
    return date < today ;
 };

 taskArea.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        
    if (isPastDate(taskDate.value)) {
    return;
}
    // prevent empty tasks
    if (taskArea.value === "") {

        return;
    }



    // create task object
    const newTask = {

        text: taskArea.value,
        date: taskDate.value,
        completed: false
    };



    // add into array
    tasks.push(newTask);



    // save tasks
    saveTasks();



    // show on screen
    renderTask();



  

    // clear input
    taskArea.value = "";

    }
 })
 

// load existing tasks
loadTasks();;

