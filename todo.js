let addtaskBtn = document.querySelector(".addtask")
let createtaskBtn = document.querySelector(".createtask")
let taskEntryDiv = document.querySelector(".task-entry")
let todoList = document.querySelector(".todo-list")
let  back = document.querySelector(".left")
let list = document.querySelector(".list");
let colors = ["#fe5147","#fe9e41","#f8c509","#43a0ff"]
addtaskBtn.addEventListener("click",function () {
    addtaskBtn.style.display = "none";
    todoList.style.display = "none";
    taskEntryDiv.style.display = "block";
    createtaskBtn.style.display = "block";

})
back.addEventListener("click",function () {
    taskEntryDiv.style.display = "none";
    createtaskBtn.style.display = "none"; 
    addtaskBtn.style.display = "block";
    todoList.style.display = "block";
 
})

createtaskBtn.addEventListener("click",function () {
    let title = document.querySelector(".titleinput");
 if (title.value === "") {
     alert("Enter a Task title")
 }
 else {
   let titleValue = title.value
   let deadline = document.querySelector(".deadlineinput");
   let startTime = document.querySelector(".starttimeinput");
   let endTime = document.querySelector(".endtimeinput");
  let startTimeValue = startTime.value;
 let  endTimeValue = endTime.value;
let deadlineValue = deadline.value;
console.log(deadlineValue);
console.log(titleValue);
console.log(endTimeValue);
console.log(startTimeValue);

let listItem = document.createElement("div");
let startTimeText = document.createElement("p");
let deadLineText = document.createElement("p");
deadLineText.textContent = "Deadline " + deadlineValue;
deadLineText.style.textAlign = "right";
let delBtn = document.createElement("i");
delBtn.classList.add("far","fa-trash-alt");
delBtn.style.position = "absolute";
delBtn.style.right = "10px";
delBtn.style.cursor = "pointer";
startTimeText.textContent = "Start Time " + startTimeValue
let endTimeText = document.createElement("p");
endTimeText.textContent = "End Time " + endTimeValue;

listItem.classList.add("listitem")

let todoTitle = document.createElement("h4")

todoTitle.textContent = titleValue;

listItem.appendChild(delBtn)
listItem.appendChild(startTimeText);

listItem.appendChild(todoTitle)

listItem.appendChild(endTimeText)

listItem.appendChild(deadLineText)

todoList.appendChild(listItem);


  title.value = "";    
  deadline.value = "";
  startTime.value = "";
  endTime.value = ""

  taskEntryDiv.style.display = "none";
  createtaskBtn.style.display = "none"; 
  addtaskBtn.style.display = "block";
  todoList.style.display = "block";


  delBtn.addEventListener("click",function () {
      listItem.remove();
  })

 }
 
  
  
})