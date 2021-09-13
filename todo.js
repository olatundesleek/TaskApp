let addtaskBtn = document.querySelector(".addtask");
let createtaskBtn = document.querySelector(".createtask");
let taskEntryDiv = document.querySelector(".task-entry");
let todoList = document.querySelector(".todo-list");
let back = document.querySelector(".left");
let list = document.querySelector(".list");
let colors = ["#fe5147", "#fe9e41", "#f8c509", "#43a0ff"];
let startTimeData = [];
let notificationsDiv = document.querySelector(".notifications")
let notificationCount = 0;
let alarm = new Audio("sound/church_bells_01.wav");
let notificationBell = document.querySelector(".fa-bell") ;
let taskNumber = document.querySelector(".task-number");
let editTaskBtn = document.querySelector(".edittask")
let id = 1;

addtaskBtn.addEventListener("click", function () {
  addtaskBtn.style.display = "none";
  todoList.style.display = "none";
  taskEntryDiv.style.display = "block";
  createtaskBtn.style.display = "block";
});
back.addEventListener("click", function () {
  taskEntryDiv.style.display = "none";
  createtaskBtn.style.display = "none";
  addtaskBtn.style.display = "block";
  todoList.style.display = "block";
  editTaskBtn.style.display = "none"
});

function doCreateTask() {


  let title = document.querySelector(".titleinput");
  if (title.value === "") {
    alert("Enter a Task title");
  } else {
    let selColor = colors[Math.floor(Math.random() * colors.length)];

    let titleValue = title.value;
    // let deadline = document.querySelector(".deadlineinput");
    let startTime = document.querySelector(".starttimeinput");
    let endTime = document.querySelector(".endtimeinput");
    let startTimeValue = startTime.value;
    startTimeData.push(startTimeValue);
    let endTimeValue = endTime.value;
    // let deadlineValue = deadline.value;
startTimeValue = "";
    let listItem = document.createElement("div");
    let startTimeText = document.createElement("p");
    // let deadLineText = document.createElement("p");
    // deadLineText.textContent = "Deadline " + deadlineValue;
    // deadLineText.style.textAlign = "right";
    let delBtn = document.createElement("i");
    delBtn.classList.add("far", "fa-trash-alt");
    delBtn.style.position = "absolute";
    delBtn.style.right = "10px";
    delBtn.style.cursor = "pointer";
    startTimeText.textContent = "Start Time " + startTimeValue;
    let endTimeText = document.createElement("p");
    endTimeText.textContent = "End Time " + endTimeValue;

    listItem.classList.add("listitem");

   
    listItem.style.background = selColor;

    let todoTitle = document.createElement("h4");
todoTitle.classList.add("todotitle")
todoTitle.id = "todo"+id;
id += 1;
let editedInput = document.querySelector(".titleinput").value;
console.log(editedInput);
    todoTitle.textContent = editedInput;

    

    listItem.appendChild(delBtn);
    listItem.appendChild(startTimeText);

    listItem.appendChild(todoTitle);

    listItem.appendChild(endTimeText);

    // listItem.appendChild(deadLineText);

    todoList.appendChild(listItem);

    todoList.scrollTop = 500;

    title.value = "";
    // deadline.value = "";
    startTime.value = "";
    endTime.value = "";

    taskEntryDiv.style.display = "none";
    createtaskBtn.style.display = "none";
    addtaskBtn.style.display = "block";
    todoList.style.display = "block";

    let listItemLength = document.getElementsByClassName("listitem").length;
    

    taskNumber.textContent = listItemLength > 1 ? listItemLength + " Tasks Todo": listItemLength + " Task Todo";

    delBtn.addEventListener("click", function () {
      listItem.remove();
      let listItemLength2 = document.getElementsByClassName("listitem").length;
      taskNumber.textContent = listItemLength2 > 1 ? listItemLength2 + " Tasks Todo": listItemLength2 + " Task Todo";
    });

    // editing a todo
    listItem.addEventListener("click",function (event) {
        let clickedTarget = event.target;
        console.log(clickedTarget);
        taskEntryDiv.style.display = "block";
        createtaskBtn.style.display = "none";
        addtaskBtn.style.display = "none";
        todoList.style.display = "none";
       editTaskBtn.style.display = "block"
    title.value = "";
        startTime.value = "02:3";
   

    editTaskBtn.addEventListener("click",function () {
      let input2 = document.querySelector(".titleinput2");
      let input2Value = input2.value;
      taskEntryDiv.style.display = "none";
        createtaskBtn.style.display = "none";
        addtaskBtn.style.display = "block";
        todoList.style.display = "block";
        editTaskBtn.style.display = "none"
        startTimeValue = "";
     
   
   clickedTarget.textContent = input2Value;
console.log(titleValue);
    
    })
        
    })
  }

 
}

document.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    doCreateTask();
  }
});

setInterval(() => {
  let da = new Date();
  let hour = da.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let min = da.getMinutes();
  min = min < 10 ? "0" + min : min;
  let timeNow = hour + ":" + min;
  console.log(timeNow);


  for (let index = 0; index < startTimeData.length; index++) {
    console.log(startTimeData[index]);

    if (startTimeData[index] === timeNow) {
      notificationCount = notificationCount + 1;
      alarm.loop = true;
alarm.play()
    }
  }
  console.log(notificationCount);
  if (notificationCount > 0) {
      notificationsDiv.textContent = notificationCount
     notificationsDiv.style.display = "block" 
  }
}, 60000);

notificationBell.addEventListener("click",function () {
    notificationCount = 0;
    alarm.pause();
    console.log("i was pressed");
    notificationsDiv.textContent = notificationCount
    notificationsDiv.style.display = "none" 
})

createtaskBtn.addEventListener("click", doCreateTask);
