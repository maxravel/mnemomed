function Task(title, type){
    this.title = title;
    this.type = type;
}

const curveA = document.querySelector("#curveAdd");
const curveT = document.querySelector("#curveTask");


curveA.addEventListener("click", function(){
    const d = new Task(`${curveT.value}`,1);
    console.log(d);
    let zxc = curveT.value;
    console.log(zxc);
});