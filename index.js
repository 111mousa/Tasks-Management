let theInput = document.querySelector(".todo-container .add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let deleteAllElement = document.querySelector(".another-operations .dat");
let finishAllElement = document.querySelector(".another-operations .fat");

let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
window.onload = function(){
    theInput.focus();
};
theAddButton.onclick = function(){
    if(theInput.value ===''){
        alert("The Field Is Empty?! Please Fill It And Try Again");
        theInput.focus();
    }else{
        let noTasksMsg = document.querySelector(".no-tasks-message");
        if(document.body.contains(noTasksMsg)){
            noTasksMsg.remove();
        }
        let mainSpan = document.createElement("span");
        let deleteElement = document.createElement("span");
        let text = document.createTextNode(theInput.value);
        let deleteText = document.createTextNode("Delete");
        mainSpan.appendChild(text);
        mainSpan.className = 'task-box';
        deleteElement.appendChild(deleteText);
        deleteElement.className = 'delete';
        mainSpan.appendChild(deleteElement);
        tasksContainer.appendChild(mainSpan);
        theInput.value="";
        theInput.focus();
        calculateTasks();
    }
}
document.addEventListener('click',function(e){
    if(e.target.className == "delete"){
        e.target.parentNode.remove();
        calculateTasks();
    }
    if(e.target.classList.contains("task-box")){
        e.target.classList.toggle("finished");
        calculateTasks();
    }
    if(tasksContainer.childElementCount===0){
        createNoTasks();
    }
});
function createNoTasks(){
    let msgSpn = document.createElement("span");
    let msgText = document.createTextNode("No Tasks To Show");
    msgSpn.appendChild(msgText);
    msgSpn.className = "no-tasks-message";
    tasksContainer.appendChild(msgSpn);
}
function calculateTasks(){
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}
deleteAllElement.addEventListener('click', function(e){
    let x = document.querySelectorAll(".task-box").length;
    if(x>0){
    while(x>0){
        document.querySelector(".task-box").remove();
        --x; 
    }}
    else{
    alert("Nothing To Delete?!");
}
    calculateTasks();
});
finishAllElement.addEventListener('click',function(e){
    let arr = Array.from(document.querySelectorAll(".task-box"));
    for(var i=0;i<arr.length;i++){
        arr[i].classList.toggle("finished");
    }
    calculateTasks();
});