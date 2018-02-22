let task1 = [["Jest to pierwsze pytanie do LEKu, poprawna odpowiedź jest C","odpowiedź A", "odpowiedź B", "odpowiedź C", "odpowiedź D", "odpowiedź E", 2],
["to drugie pytanie", "A", "B", "C", "D", "E", 4],
['to trzecie', 's','d','f','g','h', 0],
['wciąz kolejne pytania', 1,2,3,4,5,1],
['i jeszcze jedno, tym razem 4 poprawna', 1,2,3,4,5,3]
];

//console.log(task1.length);
//let t2 = ["to drugie pytanie", "A", "B", "C", "D", "E", 4];

let problem = document.querySelector('#problem');
let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');
let answer4 = document.querySelector('#answer4');
let answer5 = document.querySelector('#answer5');
const next = document.querySelector('#next');

//console.log(task1);

problem.innerText = task1[0][0];
answer1.innerText = task1[0][1];
answer2.innerText = task1[0][2];
answer3.innerText = task1[0][3];
answer4.innerText = task1[0][4];
answer5.innerText = task1[0][5];

answer1.addEventListener('click', function(){
    if(task1[0][6]===0){
        answer1.style.backgroundColor = "green";
    }
    else{
        answer1.style.backgroundColor = "red";
    }
});

answer2.addEventListener('click', function(){
    if(task1[0][6]===1){
        answer2.style.backgroundColor = "green";
    }
    else{
        answer2.style.backgroundColor = "red";
    }
});

answer3.addEventListener('click', function(){
    if(task1[0][6]===2){
        answer3.style.backgroundColor = "green";
    }
    else{
        answer3.style.backgroundColor = "red";
    }
});

answer4.addEventListener('click', function(){
    if(task1[0][6]===3){
        answer4.style.backgroundColor = "green";
    }
    else{
        answer4.style.backgroundColor = "red";
    }
});

answer5.addEventListener('click', function(){
    if(task1[0][6]===4){
        answer5.style.backgroundColor = "green";
    }
    else{
        answer5.style.backgroundColor = "red";
    }
});

let i=1;
let b=1;

next.addEventListener('click', function(){
    //for(let i=1; i<task1.length; i++){
    //task1 = t2; 
    console.log(i);
    //console.log(b);
    b=i;
    
    problem.innerText = task1[i][0];
    answer1.innerText = task1[i][1];
    answer2.innerText = task1[i][2];
    answer3.innerText = task1[i][3];
    answer4.innerText = task1[i][4];
    answer5.innerText = task1[i][5];
    console.log(task1[i][6]);

    answer1.addEventListener('click', function(){
        console.log(i);
        console.log(b);
        //b=i;
        if(b===0){b=task1.length-1};
        if(task1[b-1][6]===0){
            answer1.style.backgroundColor = "green";
        }
        else{
            answer1.style.backgroundColor = "red";
        }
    });

    answer2.addEventListener('click', function(){
        if(b===0){b=task1.length-1};
        if(task1[b-1][6]===1){
            answer2.style.backgroundColor = "green";
        }
        else{
            answer2.style.backgroundColor = "red";
        }
    });

    answer3.addEventListener('click', function(){
        if(b===0){b=task1.length-1};
        if(task1[b-1][6]===2){
            answer3.style.backgroundColor = "green";
        }
        else{
            answer3.style.backgroundColor = "red";
        }
    });

    answer4.addEventListener('click', function(){
        if(b===0){b=task1.length-1};
        if(task1[b-1][6]===3){
            answer4.style.backgroundColor = "green";
        }
        else{
            answer4.style.backgroundColor = "red";
        }
    });

    answer5.addEventListener('click', function(){
        if(b===0){b=task1.length-1};
        if(task1[b-1][6]===4){
            answer5.style.backgroundColor = "green";
        }
        else{
            answer5.style.backgroundColor = "red";
        }
    });
    
    b++;
    i++;
    if(i===task1.length){i=0;
    //b=task1.length-1
    };
    answer1.style.backgroundColor = "rgb(139, 139, 139)";
    answer2.style.backgroundColor = "rgb(139, 139, 139)";
    answer3.style.backgroundColor = "rgb(139, 139, 139)";
    answer4.style.backgroundColor = "rgb(139, 139, 139)";
    answer5.style.backgroundColor = "rgb(139, 139, 139)";
//}
});

const tasksar= [['one','two','three'],['for','five','six']];
//console.log(tasksar[0][1]);
for(let i=0;i<tasksar.length;i++){
    console.log(tasksar[i][i])
}

const number = document.querySelector('#number');
const nextNumber = document.querySelector('#nextnumber');
let a=0;
nextNumber.addEventListener('click', function(){
    
    number.innerText = a;
    a++;
})
