let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");

function deleteTask(e){
    e.currentTarget.remove();
}
input.addEventListener("keypress", function(e){
    console.log(e);
    if(e.key == "Enter"){
        let task = input.value;
        if(!task){
            alert("Error- Cannot add empty task.");
            return;
        }
        input.value="";
        let li = document.createElement("li");
        li.innerText = task;
        ul.appendChild(li);
        li.addEventListener("dblclick", deleteTask);
    }
});

function addTask(e){
    if(e.key == "ArrowUp" || e.key == "ArrowDown"){
        let task = input.value;
        if(!task){
            alert("Error- Cannot add empty task.");
            return;
        }
        input.value="";
        let li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("dblclick", deleteTask);
        
        if(e.key == "ArrowUp"){
            ul.insertBefore(li, ul.firstChild);
        }else{
            ul.appendChild(li);
        }
    }
}
input.addEventListener("keydown", addTask);