let task1 = ["Jest to pierwsze pytanie do LEKu, poprawna odpowiedź jest C","odpowiedź A", "odpowiedź B", "odpowiedź C", "odpowiedź D", "odpowiedź E", 2];
let t2 = ["to drugie pytanie", "A", "B", "C", "D", "E", 4];



let problem = document.querySelector('#problem');
let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');
let answer4 = document.querySelector('#answer4');
let answer5 = document.querySelector('#answer5');
const next = document.querySelector('#next');


//console.log(task1);

problem.innerText = task1[0];
answer1.innerText = task1[1];
answer2.innerText = task1[2];
answer3.innerText = task1[3];
answer4.innerText = task1[4];
answer5.innerText = task1[5];

answer1.addEventListener('click', function(){
    if(task1[6]===0){
        answer1.style.backgroundColor = "green";
    }
    else{
        answer1.style.backgroundColor = "red";
    }
});

answer2.addEventListener('click', function(){
    if(task1[6]===1){
        answer2.style.backgroundColor = "green";
    }
    else{
        answer2.style.backgroundColor = "red";
    }
});

answer3.addEventListener('click', function(){
    if(task1[6]===2){
        answer3.style.backgroundColor = "green";
    }
    else{
        answer3.style.backgroundColor = "red";
    }
});

answer4.addEventListener('click', function(){
    if(task1[6]===3){
        answer4.style.backgroundColor = "green";
    }
    else{
        answer4.style.backgroundColor = "red";
    }
});

answer5.addEventListener('click', function(){
    if(task1[6]===4){
        answer5.style.backgroundColor = "green";
    }
    else{
        answer5.style.backgroundColor = "red";
    }
});

next.addEventListener('click', function(){
    task1 = t2; 
    console.log(task1);
    problem.innerText = task1[0];
    answer1.innerText = task1[1];
    answer2.innerText = task1[2];
    answer3.innerText = task1[3];
    answer4.innerText = task1[4];
    answer5.innerText = task1[5];

    answer1.addEventListener('click', function(){
        if(task1[6]===0){
            answer1.style.backgroundColor = "green";
        }
        else{
            answer1.style.backgroundColor = "red";
        }
    });

    answer2.addEventListener('click', function(){
        if(task1[6]===1){
            answer2.style.backgroundColor = "green";
        }
        else{
            answer2.style.backgroundColor = "red";
        }
    });

    answer3.addEventListener('click', function(){
        if(task1[6]===2){
            answer3.style.backgroundColor = "green";
        }
        else{
            answer3.style.backgroundColor = "red";
        }
    });

    answer4.addEventListener('click', function(){
        if(task1[6]===3){
            answer4.style.backgroundColor = "green";
        }
        else{
            answer4.style.backgroundColor = "red";
        }
    });

    answer5.addEventListener('click', function(){
        if(task1[6]===4){
            answer5.style.backgroundColor = "green";
        }
        else{
            answer5.style.backgroundColor = "red";
        }
    });
});