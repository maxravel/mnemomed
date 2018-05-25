//constructor of tasks
function Task(title, type, timing){
    this.title = title;
    this.type = type; //position 1 - 24h to review, position 2 - 72 h to review, position 3 - 1 week, position 4 - 1 month
    this.timing = timing; //time of adding task
}

//selectors
const curveA = document.querySelector("#curveAdd"); //button
const curveT = document.querySelector("#curveTask"); //input
const curveL = document.querySelector("#curveList"); //task ul


//getting tasks from localStorage
document.addEventListener('DOMContentLoaded',getTasks);

function getTasks(){
    let tasks =[];
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
        x.addEventListener("click", counting(x));
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
        const task = new Task(`${curveT.value}`,1,new Date());
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
        x.addEventListener("click", counting(x));
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
        // if(x.textContent===(task.title+"x")){
        //     tasks.splice(index, 1);
        // }

        if(x.textContent.substr(0,x.textContent.length-1)===task.title){
            tasks.splice(index, 1);
        }
        //console.log(x.textContent.substr(0,x.textContent.length-1));
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function counting(x){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        if(x.textContent.substr(0,x.textContent.length-1)===task.title){
            //task.timing
            let taskTime = new Date(task.timing);
            
            //let nowTime = new Date();
            //console.log(nowTime);
            diff = Date.now() - taskTime.getTime();
            console.log(msToTime(diff));

            if(diff<24*60*60*100){
                x.style.background = "grey";
            }
            //console.log(Date.now());
        } 
    });
    //console.log("timing");
} 


function msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

//const dpr = Array.prototype.slice.call(document.querySelectorAll("li.aaac"));
//console.log(dpr);
//dpr.forEach(function(listItem){listItem.addEventListener("click", counting)});