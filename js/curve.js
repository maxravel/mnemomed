let arrayTasks = [];

function Task(title, type){
    this.title = title;
    this.type = type;
}

const curveA = document.querySelector("#curveAdd");
const curveT = document.querySelector("#curveTask");
const curveL = document.querySelector("#curveList");


curveA.addEventListener("click", function(){
    //creating new Task
    const task = new Task(`${curveT.value}`,1);
    localStorage.setItem(1,JSON.stringify(task));
    console.log(task);
    //adding new task to array
    arrayTasks.push(task);
    console.log(arrayTasks);
    //creating UI of new task
    let x = document.createElement("li");
    x.textContent = task.title;
    let del = document.createElement("a");
    del.style.paddingLeft = "20px";
    del.style.color = "red";

    del.textContent = "x";
    del.addEventListener("click", function(){
        del.parentElement.remove();
    })

    x.appendChild(del);
    curveL.appendChild(x);
    
});