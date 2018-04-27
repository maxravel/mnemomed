"use strict";

document.querySelector('.abc').style.display = "none";


//************************LOADING NUMBER OF QUESTIONS
//Array.prototype.slice.call() converts node list to array (neceserry for .forEach)
var categoryButtons = Array.prototype.slice.call(document.querySelectorAll('a.collection-item')); 

fetch('data/medtasks.json').then(function (res) {
    return res.json();
}).then(function (data) {
    categoryButtons.forEach(function (x) {
        
        //Loading number of each category tasks
        var qNumber = data.filter(function (z) {
            return z.id === x.id;
        }).length;
        
        //Adding number of tasks for categories
        x.appendChild(document.createTextNode(" (" + qNumber + " pyt.)"));
      
    });
});


//*********************LOADING QUESTIONS
Array.prototype.slice.call(document.querySelectorAll('.collection-item')).forEach(function (z) {
    z.addEventListener('click', loadTasks);
});

//event is neceserry as a function parameter for mozilla
function loadTasks(event) {

    //button id is the same as task.id from JSON
    var category = event.target.id;
    
    document.querySelector('.abc').style.display = "block";
    document.querySelector('.choose').style.display = "none";

    //fetch() is not support in Internet Explorer
    fetch('data/medtasks.json').then(function (res) {
        return res.json();
    }).then(function (abcd) {

        var ratunkowa = abcd.filter(function (z) {
            return z.id === category;
        });

        var problem = document.querySelector('#problem');
        var answer1 = document.querySelector('#answer1');
        var answer2 = document.querySelector('#answer2');
        var answer3 = document.querySelector('#answer3');
        var answer4 = document.querySelector('#answer4');
        var answer5 = document.querySelector('#answer5');
        var next = document.querySelector('#next');
        var prev = document.querySelector('#prev');
        var loadInfo = document.querySelector('#loadInfo');
        var info = document.querySelector('#info');
        var punkty = document.querySelector('#punkty');

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

        // if(sessionStorage.getItem('0')==='0'){
        //     answer1.click();
        // }
        // if(sessionStorage.getItem('0')==='1'){
        //     answer2.click();
        // }
        // if(sessionStorage.getItem('0')==='2'){
        //     answer3.click();
        // }
        // if(sessionStorage.getItem('0')==='3'){
        //     answer4.click();
        // }
        // if(sessionStorage.getItem('0')==='4'){
        //     answer5.click();
        // }

        var x = 0;


        //*************************** NEXT SECTION *******************************

        var i = 0;

        next.addEventListener('click', function () {

            i++;

            if (i === ratunkowa.length) {
                i = 0;

                //template literar is not supported in some browsers
                alert("Zdoby\u0142e\u015B " + x + " punkt\xF3w!");
                x = 0;
                punkty.innerHTML = "Twoje punkty:  " + 0 + "/" + 0;
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
            info.innerText = '';
            info.style.display = 'none';

            //Disable info button when there is no info
            if (ratunkowa[i].info === "") {
                loadInfo.style.display = "none";
            } else {
                loadInfo.style.display = "block";
            }

            //loading sessionStorage past answers
            if(sessionStorage.getItem(i)==='0'){
                answer1.click();
            }
            if(sessionStorage.getItem(i)==='1'){
                answer2.click();
            }
            if(sessionStorage.getItem(i)==='2'){
                answer3.click();
            }
            if(sessionStorage.getItem(i)==='3'){
                answer4.click();
            }
            if(sessionStorage.getItem(i)==='4'){
                answer5.click();
            }
        });


        //*************************** PREV SECTION *******************************

        prev.addEventListener('click', function () {

            i--;

            if (i === -1) {
                i = 0;
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
            info.innerText = '';
            info.style.display = 'none';

            //Disable info button when there is no info
            if (ratunkowa[i].info === "") {
                loadInfo.style.display = "none";
            } else {
                loadInfo.style.display = "block";
            }

            //loading sessionStorage past answers
            if(sessionStorage.getItem(i)==='0'){
                answer1.click();
            }
            if(sessionStorage.getItem(i)==='1'){
                answer2.click();
            }
            if(sessionStorage.getItem(i)==='2'){
                answer3.click();
            }
            if(sessionStorage.getItem(i)==='3'){
                answer4.click();
            }
            if(sessionStorage.getItem(i)==='4'){
                answer5.click();
            }
        });


        //************************** ANSWER COLORS ****************************

        answer1.addEventListener('click', function () {

            //store clicked answer when all answers are unclicked (white)
            if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                sessionStorage.setItem(i,'0');
            

            if (ratunkowa[i].correct === 0) {
                //adding point when first clicked answer is correct
                if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                    x++;
                }
                answer1.style.backgroundColor = "green";

            } else {
                answer1.style.backgroundColor = "red";
                //color green for correct answer
                if (ratunkowa[i].correct === 1) {
                    answer2.style.background = "green";
                } else if (ratunkowa[i].correct === 2) {
                    answer3.style.background = "green";
                } else if (ratunkowa[i].correct === 3) {
                    answer4.style.background = "green";
                } else if (ratunkowa[i].correct === 4) {
                    answer5.style.background = "green";
                }
            }

            punkty.innerHTML = "Twoje punkty:  " + x + "/" + (i + 1);

        }

            // loadInfo.disabled = true;

        });

        answer2.addEventListener('click', function () {

            if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                sessionStorage.setItem(i,'1');
            

                if (ratunkowa[i].correct === 1) {
                    if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                        x++;
                    }
                    answer2.style.backgroundColor = "green";
                } else {
                    answer2.style.backgroundColor = "red";

                    if (ratunkowa[i].correct === 0) {
                        answer1.style.background = "green";
                    } else if (ratunkowa[i].correct === 2) {
                        answer3.style.background = "green";
                    } else if (ratunkowa[i].correct === 3) {
                        answer4.style.background = "green";
                    } else if (ratunkowa[i].correct === 4) {
                        answer5.style.background = "green";
                    }
                }

                punkty.innerHTML = "Twoje punkty:  " + x + "/" + (i + 1);

            }
        });

        answer3.addEventListener('click', function () {

            if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                sessionStorage.setItem(i,'2');

                if (ratunkowa[i].correct === 2) {
                    if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                        x++;
                    }
                    answer3.style.backgroundColor = "green";
                } else {
                    answer3.style.backgroundColor = "red";

                    if (ratunkowa[i].correct === 0) {
                        answer1.style.background = "green";
                    } else if (ratunkowa[i].correct === 1) {
                        answer2.style.background = "green";
                    } else if (ratunkowa[i].correct === 3) {
                        answer4.style.background = "green";
                    } else if (ratunkowa[i].correct === 4) {
                        answer5.style.background = "green";
                    }
                }

            punkty.innerHTML = "Twoje punkty:  " + x + "/" + (i + 1);

            }
        });

        answer4.addEventListener('click', function () {

            if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                sessionStorage.setItem(i,'3');

                if (ratunkowa[i].correct === 3) {
                    if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                        x++;
                    }
                    answer4.style.backgroundColor = "green";
                } else {
                    answer4.style.backgroundColor = "red";

                    if (ratunkowa[i].correct === 0) {
                        answer1.style.background = "green";
                    } else if (ratunkowa[i].correct === 1) {
                        answer2.style.background = "green";
                    } else if (ratunkowa[i].correct === 2) {
                        answer3.style.background = "green";
                    } else if (ratunkowa[i].correct === 4) {
                        answer5.style.background = "green";
                    }
                }

                punkty.innerHTML = "Twoje punkty:  " + x + "/" + (i + 1);

            }
        });

        answer5.addEventListener('click', function () {

            if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                sessionStorage.setItem(i,'4');

                if (ratunkowa[i].correct === 4) {
                    if (answer1.style.backgroundColor === "white" && answer2.style.backgroundColor === "white" && answer3.style.backgroundColor === "white" && answer4.style.backgroundColor === "white" && answer5.style.backgroundColor === "white") {
                        x++;
                    }
                    answer5.style.backgroundColor = "green";
                } else {
                    answer5.style.backgroundColor = "red";

                    if (ratunkowa[i].correct === 0) {
                        answer1.style.background = "green";
                    } else if (ratunkowa[i].correct === 1) {
                        answer2.style.background = "green";
                    } else if (ratunkowa[i].correct === 2) {
                        answer3.style.background = "green";
                    } else if (ratunkowa[i].correct === 3) {
                        answer4.style.background = "green";
                    }
                }

                punkty.innerHTML = "Twoje punkty:  " + x + "/" + (i + 1);

            }
        });

        
        //******************* LOADING INFO *******************************

        loadInfo.addEventListener('click', function () {

            if (i === 0) {
                if (info.innerHTML !== ratunkowa[0].info) {
                    info.style.display = 'block';
                } else if (info.style.display === 'none') {
                    info.style.display = 'block';
                } else {
                    info.style.display = 'none';
                }
            } else if (info.style.display === 'none') {
                info.style.display = 'block';
            } else {
                info.style.display = 'none';
            }

            info.innerHTML = ratunkowa[i].info;
        });
    });
};