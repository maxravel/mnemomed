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
        x.style.marginBottom = "15px";
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
        const task = new Task(`${curveT.value}`,1,Date.now());
        addToLocalStorage(task);
        //creating UI of new task
        // creatingTask();
        let x = document.createElement("li");
        x.textContent = task.title;
        x.style.color = "#b0ffff";
        x.style.marginBottom = "15px";
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
        //counting task title without info words like: "musisz powtórzyc..."
        if(x.textContent.substr(0,task.title.length)===task.title){
            tasks.splice(index, 1);
        }
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
        if(x.textContent.substr(0,task.title.length)===task.title){
            //task.timing
            let taskTime = task.timing;
            console.log(task.type);
            diff = Date.now() - taskTime;
            console.log(msToTime(diff));
            const h=3600;

            if(task.type===1 && diff < 24*h*1000){  
                const xyz = 24*h*1000;
                greyCreator(x, diff,h,xyz);                 
            }

            else if(task.type===1 && diff < 2*24*h*1000 && diff > 24*h*1000){
                x.style.background = "orange";
                let info = document.createElement("p");
                info.textContent = `-> Musisz dzisiaj to powtórzyc! Masz na to: ${msToTime(2*24*h*1000-diff)}`;
                info.style.background = "red";
                info.style.fontSize = "15px";
                x.appendChild(info);
                let review = document.createElement("button");
                review.innerHTML = "Powtarzam!";
                review.classList.add("btn");
                x.appendChild(review);
                review.addEventListener("click", function(){
                    x.style.background = "grey";
                    info.style.background = "grey";
                    info.textContent = `-> Do powtórki pozostało ${msToTime(3*24*h*1000-diff)}`;
                    review.disabled = "true";
                    //changing type from 1 to 2;
                    changingType(x, 1);
                });
            }

            else if(task.type===1 && diff > 2*24*h*1000){
                //orangeDeleyed(x);
                x.style.background = "orange";
                let info = document.createElement("p");
                info.textContent = "-> Musisz natychmiast to powtórzyc!";
                info.style.background = "red";
                info.style.fontSize = "15px";
                x.appendChild(info);
                let review = document.createElement("button");
                review.innerHTML = "Powtarzam!";
                review.classList.add("btn");
                x.appendChild(review);
                review.addEventListener("click", function(){
                    x.style.background = "grey";
                    info.style.background = "grey";
                    info.textContent = `-> Do powtórki pozostało ${msToTime(24*h*1000-diff)}`;
                    review.disabled = "true";
                    //Staying type 1
                    changingType(x, 0);
                });
            }
            
            else if(task.type===2 && diff < 3*24*h*1000){
                let xyz = 3*24*h*1000;
                greyCreator(x, diff,h,xyz); 
            }

            else if(task.type===2 && diff>3*24*h*1000 && diff<4*24*h*1000){
                x.style.background = "orange";
                let info = document.createElement("p");
                info.textContent = `-> Musisz dzisiaj to powtórzyc! Masz na to: ${msToTime(4*24*h*1000-diff)}`;
                info.style.background = "red";
                info.style.fontSize = "15px";
                x.appendChild(info);
                let review = document.createElement("button");
                review.innerHTML = "Powtarzam!";
                review.classList.add("btn");
                x.appendChild(review);
                review.addEventListener("click", function(){
                    x.style.background = "grey";
                    info.style.background = "grey";
                    info.textContent = `-> Do powtórki pozostało ${msToTime(7*24*h*1000-diff)}`;
                    review.disabled = "true";
                    //changing type from 2 to 3;
                    changingType(x, 1);
                });
            }

            else if(task.type===2 && diff > 4*24*h*1000){
                x.style.background = "orange";
                let info = document.createElement("p");
                info.textContent = "-> Musisz natychmiast to powtórzyc!";
                info.style.background = "red";
                info.style.fontSize = "15px";
                x.appendChild(info);
                let review = document.createElement("button");
                review.innerHTML = "Powtarzam!";
                review.classList.add("btn");
                x.appendChild(review);
                review.addEventListener("click", function(){
                    x.style.background = "grey";
                    info.style.background = "grey";
                    info.textContent = `-> Do powtórki pozostało ${msToTime(24*h*1000-diff)}`;
                    review.disabled = "true";
                    //changing type from 2 to 1;
                    changingType(x, -1);
                });
            }

            else if(task.type===3 && diff < 7*24*h*1000){
                let xyz = 7*24*h*1000;
                greyCreator(x, diff,h,xyz);  
            }

            else if(task.type===3 && diff > 7*24*h*1000 && diff < 9*24*h*1000){
                x.style.background = "orange";
                let info = document.createElement("p");
                info.textContent = `-> Musisz niebawem to powtórzyc! Masz na to: ${msToTime(9*24*h*1000-diff)}`;
                info.style.background = "red";
                info.style.fontSize = "15px";
                x.appendChild(info);
                let review = document.createElement("button");
                review.innerHTML = "Powtarzam!";
                review.classList.add("btn");
                x.appendChild(review);
                review.addEventListener("click", function(){
                    x.style.background = "grey";
                    info.style.background = "grey";
                    info.textContent = `-> Do powtórki pozostało ${msToTime(14*24*h*1000-diff)}`;
                    review.disabled = "true";
                    //changing type from 3 to 4;
                    changingType(x, 1);
                });
            }

            else if(task.type===3 && diff > 9*24*h*1000){
                x.style.background = "orange";
                let info = document.createElement("p");
                info.textContent = "-> Musisz natychmiast to powtórzyc!";
                info.style.background = "red";
                info.style.fontSize = "15px";
                x.appendChild(info);
                let review = document.createElement("button");
                review.innerHTML = "Powtarzam!";
                review.classList.add("btn");
                x.appendChild(review);
                review.addEventListener("click", function(){
                    x.style.background = "grey";
                    info.style.background = "grey";
                    info.textContent = `-> Do powtórki pozostało ${msToTime(3*24*h*1000-diff)}`;
                    review.disabled = "true";
                    //changing type from 3 to 2;
                    changingType(x, -1);
                });
            }

            else if(task.type===4 && diff < 14*24*h*1000){
                let xyz = 14*24*h*1000;
                greyCreator(x, diff,h,xyz); 
            }

            else if(task.type===4 && diff > 14*24*h*1000 && diff < 17*24*h*1000){
                x.style.background = "orange";
                let info = document.createElement("p");
                info.textContent = `-> Musisz niebawem to powtórzyc! Masz na to: ${msToTime(17*24*h*1000-diff)}`;
                info.style.background = "red";
                info.style.fontSize = "15px";
                x.appendChild(info);
                let review = document.createElement("button");
                review.innerHTML = "Powtarzam!";
                review.classList.add("btn");
                x.appendChild(review);
                review.addEventListener("click", function(){
                    x.style.background = "grey";
                    info.style.background = "grey";
                    info.textContent = `-> Do powtórki pozostało ${msToTime(14*24*h*1000-diff)}`;
                    review.disabled = "true";
                    //still type 4, and review after month
                    changingType(x, 0);
                });
            }

            else if(task.type===4 && diff > 17*24*h*1000){
                x.style.background = "orange";
                let info = document.createElement("p");
                info.textContent = "-> Musisz natychmiast to powtórzyc!";
                info.style.background = "red";
                info.style.fontSize = "15px";
                x.appendChild(info);
                let review = document.createElement("button");
                review.innerHTML = "Powtarzam!";
                review.classList.add("btn");
                x.appendChild(review);
                review.addEventListener("click", function(){
                    x.style.background = "grey";
                    info.style.background = "grey";
                    info.textContent = `-> Do powtórki pozostało ${msToTime(7*24*h*1000-diff)}`;
                    review.disabled = "true";
                    //changing type from 4 to 3;
                    changingType(x, -1);
                });
            }
        }
    }); 
} 

function msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24)
        , days = parseInt((duration/(1000*3600*24)));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return days +"D"+":"+hours + ":" + minutes; //+ ":" + seconds + "." + milliseconds;
};

function greyCreator(x, diff, h, xyz){
    x.style.background = "grey";
    let info = document.createElement("p");
    info.style.background = "grey";
    info.style.fontSize = "15px";
    x.appendChild(info);
    info.textContent = `-> Do powtórki pozostało ${msToTime(xyz-diff)}`;  
    let review = document.createElement("button");
    review.innerHTML = "Powtarzam!";
    review.classList.add("btn");
    x.appendChild(review);
    review.disabled = "true";
};



//**********************WORKING ON ORANGE DELEYED
// function orangeDeleyed(x){
//     x.style.background = "orange";
//     let info = document.createElement("p");
//     info.textContent = "-> Musisz natychmiast to powtórzyc!";
//     info.style.background = "red";
//     info.style.fontSize = "15px";
//     x.appendChild(info);
//     let review = document.createElement("button");
//     review.innerHTML = "Powtarzam!";
//     review.classList.add("btn");
//     x.appendChild(review);
//     review.addEventListener("click", function(){
//         x.style.background = "grey";
//         info.style.background = "grey";
//         info.textContent = `-> Do powtórki pozostało ${msToTime(24*h*1000-diff)}`;
//         review.disabled = "true";
//         //Staying type 1
//         changingType(x, 0);
//     });
// };

function changingType(x, change){
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(x.textContent.substr(0,task.title.length)===task.title){
            task.type = task.type+change;
            task.timing = Date.now();
        }                 
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};