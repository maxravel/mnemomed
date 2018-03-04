let task1 = [
["Jest to pierwsze pytanie do LEKu, poprawna odpowiedź jest C","odpowiedź A", "odpowiedź B", "odpowiedź C", "odpowiedź D", "odpowiedź E", 2, "info do pytania pierwszego"],
["to drugie pytanie", "A", "B", "C", "D", "E", 4, "info do pytania drugiego"],
['to trzecie', 's','d','f','g','h', 0, "info do pytania 3"],
['wciąz kolejne pytania', 1,2,3,4,5,1, "kolejne info, tym razem 4"],
['i jeszcze jedno, tym razem 4 poprawna', 1,2,3,4,5,3, "info do pytania 5"]
];

let problem = document.querySelector('#problem');
let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');
let answer4 = document.querySelector('#answer4');
let answer5 = document.querySelector('#answer5');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const loadInfo = document.querySelector('#loadInfo');
let info = document.querySelector('#info');
let punkty = document.querySelector('#punkty');

problem.innerText = task1[0][0];
answer1.innerText = task1[0][1];
answer2.innerText = task1[0][2];
answer3.innerText = task1[0][3];
answer4.innerText = task1[0][4];
answer5.innerText = task1[0][5];

answer1.style.backgroundColor = "white";
answer2.style.backgroundColor = "white";
answer3.style.backgroundColor = "white";
answer4.style.backgroundColor = "white";
answer5.style.backgroundColor = "white";

let x=0;

//*************************** NEXT SECTION *******************************

let i=0;

next.addEventListener('click', function(){
    
    i++;

    if(i===task1.length){
        i=0;
    };
    
    problem.innerText = task1[i][0];
    answer1.innerText = task1[i][1];
    answer2.innerText = task1[i][2];
    answer3.innerText = task1[i][3];
    answer4.innerText = task1[i][4];
    answer5.innerText = task1[i][5];
    
    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "white";
    answer4.style.backgroundColor = "white";
    answer5.style.backgroundColor = "white";
    info.innerText='';
    info.style.display='none';

});


//*************************** PREV SECTION *******************************

prev.addEventListener('click', function(){
   
    i--;

    if(i===-1){
        i=task1.length-1;
    };
    
    problem.innerText = task1[i][0];
    answer1.innerText = task1[i][1];
    answer2.innerText = task1[i][2];
    answer3.innerText = task1[i][3];
    answer4.innerText = task1[i][4];
    answer5.innerText = task1[i][5];

    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "white";
    answer4.style.backgroundColor = "white";
    answer5.style.backgroundColor = "white";
    info.innerText='';
    info.style.display='none';
    
});

console.log(answer1.style.backgroundColor);


//************************** ANSWER COLORS ****************************

answer1.addEventListener('click', function(){

    if(task1[i][6]===0){
        if(answer1.style.backgroundColor === "white" &&
           answer2.style.backgroundColor === "white" &&
           answer3.style.backgroundColor === "white" &&
           answer4.style.backgroundColor === "white" &&
           answer3.style.backgroundColor === "white"){
            x++;
        }
        answer1.style.backgroundColor = "green";
    }

    else{
        answer1.style.backgroundColor = "red";
    }

    punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

});

answer2.addEventListener('click', function(){

    if(task1[i][6]===1){
        if(answer1.style.backgroundColor === "white" &&
        answer2.style.backgroundColor === "white" &&
        answer3.style.backgroundColor === "white" &&
        answer4.style.backgroundColor === "white" &&
        answer3.style.backgroundColor === "white"){
            x++;
        }
        answer2.style.backgroundColor = "green";
    }

    else{
        answer2.style.backgroundColor = "red";
    }
    console.log(x);
    punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

});

answer3.addEventListener('click', function(){

    if(task1[i][6]===2){
        if(answer1.style.backgroundColor === "white" &&
        answer2.style.backgroundColor === "white" &&
        answer3.style.backgroundColor === "white" &&
        answer4.style.backgroundColor === "white" &&
        answer3.style.backgroundColor === "white"){
            x++;
        }
        answer3.style.backgroundColor = "green";
    }

    else{
        answer3.style.backgroundColor = "red";
    }

    punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

});

answer4.addEventListener('click', function(){

    if(task1[i][6]===3){
        if(answer1.style.backgroundColor === "white" &&
        answer2.style.backgroundColor === "white" &&
        answer3.style.backgroundColor === "white" &&
        answer4.style.backgroundColor === "white" &&
        answer3.style.backgroundColor === "white"){
            x++;
        }
        answer4.style.backgroundColor = "green";
    }

    else{
        answer4.style.backgroundColor = "red";
    }

    punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

});

answer5.addEventListener('click', function(){

    if(task1[i][6]===4){
        if(answer1.style.backgroundColor === "white" &&
        answer2.style.backgroundColor === "white" &&
        answer3.style.backgroundColor === "white" &&
        answer4.style.backgroundColor === "white" &&
        answer3.style.backgroundColor === "white"){
            x++;
        }
        answer5.style.backgroundColor = "green";
    }

    else{
        answer5.style.backgroundColor = "red";
    }

    punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

});


//******************* LOADING INFO *******************************8

loadInfo.addEventListener('click', function(){

    if(i===0){
        if(info.innerText!==task1[0][7]){
            info.style.display = 'block';
        }
        else if(info.style.display === 'none'){
            info.style.display = 'block';
        }
        else{
            info.style.display = 'none';
        }}

    else if(info.style.display === 'none'){
        info.style.display = 'block';
    }

    else{
        info.style.display = 'none';
    }

    info.innerText=task1[i][7];
});



console.log(x);