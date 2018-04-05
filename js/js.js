document.querySelector('.abc').style.display="none";
document.querySelector('#ratunkowa').addEventListener('click', loadTasks);
document.querySelector('#interna').addEventListener('click', loadTasks);
document.querySelector('#chirurgia').addEventListener('click', loadTasks);

function loadTasks(){
    const category = event.target.id;
    console.log(category);
    document.querySelector('.abc').style.display="block";
    document.querySelector('.choose').style.display="none";

    fetch('data/medtasks.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
          
        const ratunkowa = data.filter(z => z.id === category);

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

        problem.innerText = ratunkowa[0].task;
        answer1.innerText = ratunkowa[0].answer1;
        answer2.innerText = ratunkowa[0].answer2;
        answer3.innerText = ratunkowa[0].answer3;
        answer4.innerText = ratunkowa[0].answer4;
        answer5.innerText = ratunkowa[0].answer5;

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

            if(i===ratunkowa.length){
                i=0;
                alert(`Zdobyłeś ${x} punktów!`);
                x=0;
                punkty.innerHTML = `Twoje punkty:  ${0}/${0}`;
            };
            
            problem.innerText = ratunkowa[i].task;
            answer1.innerText = ratunkowa[i].answer1;
            answer2.innerText = ratunkowa[i].answer2;
            answer3.innerText = ratunkowa[i].answer3;
            answer4.innerText = ratunkowa[i].answer4;
            answer5.innerText = ratunkowa[i].answer5;
            
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
                i=0;
            };
            
            problem.innerText = ratunkowa[i].task;
            answer1.innerText = ratunkowa[i].answer1;
            answer2.innerText = ratunkowa[i].answer2;
            answer3.innerText = ratunkowa[i].answer3;
            answer4.innerText = ratunkowa[i].answer4;
            answer5.innerText = ratunkowa[i].answer5;

            answer1.style.backgroundColor = "white";
            answer2.style.backgroundColor = "white";
            answer3.style.backgroundColor = "white";
            answer4.style.backgroundColor = "white";
            answer5.style.backgroundColor = "white";
            info.innerText='';
            info.style.display='none';
            
        });




        //************************** ANSWER COLORS ****************************

        answer1.addEventListener('click', function(){

            if(ratunkowa[i].correct===0){
                if(answer1.style.backgroundColor === "white" &&
                answer2.style.backgroundColor === "white" &&
                answer3.style.backgroundColor === "white" &&
                answer4.style.backgroundColor === "white" &&
                answer5.style.backgroundColor === "white"){
                    x++;
                }
                answer1.style.backgroundColor = "green";

                // sessionStorage.setItem(i,'1green');
            }

            else{
                answer1.style.backgroundColor = "red";

                if(ratunkowa[i].correct===1){answer2.style.background = "green";}
                else if(ratunkowa[i].correct===2){answer3.style.background = "green";}
                else if(ratunkowa[i].correct===3){answer4.style.background = "green";}
                else if(ratunkowa[i].correct===4){answer5.style.background = "green";}

                // sessionStorage.setItem(i,'1red');

            }

            punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

        });

        answer2.addEventListener('click', function(){

            if(ratunkowa[i].correct===1){
                if(answer1.style.backgroundColor === "white" &&
                answer2.style.backgroundColor === "white" &&
                answer3.style.backgroundColor === "white" &&
                answer4.style.backgroundColor === "white" &&
                answer5.style.backgroundColor === "white"){
                    x++;
                }
                answer2.style.backgroundColor = "green";
            }

            else{
                answer2.style.backgroundColor = "red";

                if(ratunkowa[i].correct===0){answer1.style.background = "green";}
                else if(ratunkowa[i].correct===2){answer3.style.background = "green";}
                else if(ratunkowa[i].correct===3){answer4.style.background = "green";}
                else if(ratunkowa[i].correct===4){answer5.style.background = "green";}
            }
            
            punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

        });

        answer3.addEventListener('click', function(){

            if(ratunkowa[i].correct===2){
                if(answer1.style.backgroundColor === "white" &&
                answer2.style.backgroundColor === "white" &&
                answer3.style.backgroundColor === "white" &&
                answer4.style.backgroundColor === "white" &&
                answer5.style.backgroundColor === "white"){
                    x++;
                }
                answer3.style.backgroundColor = "green";
            }

            else{
                answer3.style.backgroundColor = "red";

                if(ratunkowa[i].correct===0){answer1.style.background = "green";}
                else if(ratunkowa[i].correct===1){answer2.style.background = "green";}
                else if(ratunkowa[i].correct===3){answer4.style.background = "green";}
                else if(ratunkowa[i].correct===4){answer5.style.background = "green";}
            }

            punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

        });

        answer4.addEventListener('click', function(){

            if(ratunkowa[i].correct===3){
                if(answer1.style.backgroundColor === "white" &&
                answer2.style.backgroundColor === "white" &&
                answer3.style.backgroundColor === "white" &&
                answer4.style.backgroundColor === "white" &&
                answer5.style.backgroundColor === "white"){
                    x++;
                }
                answer4.style.backgroundColor = "green";
            }

            else{
                answer4.style.backgroundColor = "red";

                if(ratunkowa[i].correct===0){answer1.style.background = "green";}
                else if(ratunkowa[i].correct===1){answer2.style.background = "green";}
                else if(ratunkowa[i].correct===2){answer3.style.background = "green";}
                else if(ratunkowa[i].correct===4){answer5.style.background = "green";}
            }

            punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

        });

        answer5.addEventListener('click', function(){

            if(ratunkowa[i].correct===4){
                if(answer1.style.backgroundColor === "white" &&
                answer2.style.backgroundColor === "white" &&
                answer3.style.backgroundColor === "white" &&
                answer4.style.backgroundColor === "white" &&
                answer5.style.backgroundColor === "white"){
                    x++;
                }
                answer5.style.backgroundColor = "green";
            }

            else{
                answer5.style.backgroundColor = "red";

                if(ratunkowa[i].correct===0){answer1.style.background = "green";}
                else if(ratunkowa[i].correct===1){answer2.style.background = "green";}
                else if(ratunkowa[i].correct===2){answer3.style.background = "green";}
                else if(ratunkowa[i].correct===3){answer4.style.background = "green";}
            }

            punkty.innerHTML = `Twoje punkty:  ${x}/${i+1}`;

        });


        //******************* LOADING INFO *******************************8

        loadInfo.addEventListener('click', function(){

            if(i===0){
                if(info.innerHTML!==ratunkowa[0].info){
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

            info.innerHTML=ratunkowa[i].info;
        });

    })
 
};

