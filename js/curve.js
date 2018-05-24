function Task(title, type, timing){
    this.title = title;
    this.type = type;
    this.timing = timing;
}

const curveA = document.querySelector("#curveAdd");
const curveT = document.querySelector("#curveTask");
const curveL = document.querySelector("#curveList");

document.addEventListener('DOMContentLoaded',getTasks);

function getTasks(){
    if(localStorage.getItem("tasks")===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task){
        //creating UI for task
        let x = document.createElement("li");
        x.textContent = task.title;
        x.style.color = "#b0ffff";
        //creating UI of delete button
        let del = document.createElement("a");
        del.style.paddingLeft = "20px";
        del.style.color = "red";
        del.textContent = "x";
        x.classList.add("aaac");
        x.appendChild(del);
        //appending task to list of tasks
        curveL.appendChild(x);
        del.addEventListener("click", removeTask);
    })
}

//Adding new tasks
curveA.addEventListener("click", function(){
    
    if(curveT.value===""){
        alert("wprowadź dane");
    }
    else{
        //creating new Task
        const task = new Task(`${curveT.value}`,1,1);
        addToLocalStorage(task);
        //creating UI of new task
        let x = document.createElement("li");
        x.textContent = task.title;
        x.style.color = "#b0ffff";
        //creating UI of delete button
        let del = document.createElement("a");
        del.style.paddingLeft = "20px";
        del.style.color = "red";
        del.textContent = "x";
        x.classList.add("aaac");
        x.appendChild(del);
        del.addEventListener("click", removeTask);       
        curveL.appendChild(x);
        curveT.value ="";
    }
});


function addToLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('aaac')){
        e.target.parentElement.remove();

    }  

    //remove from Local Storage
    removeFromLocalStorage(e.target.parentElement);

}

function removeFromLocalStorage(x){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(x.textContent===(task.title+"x")){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}