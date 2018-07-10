"use strict";

document.querySelector('.abc').style.display = "none";

//*************Preloader
setTimeout(function(){
    document.querySelector("#preloader-window").style.display="none";
},2000)

//************************LOADING NUMBER OF QUESTIONS
//Array.prototype.slice.call() converts node list to array (neceserry for .forEach)
var categoryButtons = Array.prototype.slice.call(document.querySelectorAll('a.collection-item')); 

categoryButtons.forEach(function(x){

    //loading number of questions, json file name have to be the same as category button id
    fetch(`data/${x.id}.json`).then(function (res) {
        return res.json();
    }).then(function (data) {

            var qNumber = data.length;
            x.appendChild(document.createTextNode(" (" + qNumber + " pyt.)"));

    });
})


//older number of questions loader
// fetch('data/medtasks.json').then(function (res) {
//     return res.json();
// }).then(function (data) {
//     categoryButtons.forEach(function (x) {
        
//         //Loading number of each category tasks
//         var qNumber = data.filter(function (z) {
//             return z.id === x.id;
//         }).length;
        
//         //Adding number of tasks for categories
//         x.appendChild(document.createTextNode(" (" + qNumber + " pyt.)"));
      
//     });
// });


//*********************LOADING QUESTIONS
Array.prototype.slice.call(document.querySelectorAll('.collection-item')).forEach(function (z) {
    z.addEventListener('click', loadTasks);
});

//event is neceserry as a function parameter for mozilla
function loadTasks(event) {

    //clearing sessionStorage, before starting new test
    sessionStorage.clear();

    //button id have to be the same as task.id from JSON, and same as json file name
    var category = event.target.id;
    
    document.querySelector('.abc').style.display = "block";
    document.querySelector('.choose').style.display = "none";

    //fetch() is not support in Internet Explorer
    fetch(`data/${event.target.id}.json`).then(function (res) {
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
        var reset = document.querySelector('#reset');

        problem.innerHTML = ratunkowa[0].task;
        answer1.innerHTML = ratunkowa[0].answer1;
        answer2.innerHTML = ratunkowa[0].answer2;
        answer3.innerHTML = ratunkowa[0].answer3;
        answer4.innerHTML = ratunkowa[0].answer4;
        answer5.innerHTML = ratunkowa[0].answer5;

        answer1.style.backgroundColor = "white";
        answer2.style.backgroundColor = "white";
        answer3.style.backgroundColor = "white";
        answer4.style.backgroundColor = "white";
        answer5.style.backgroundColor = "white";

        //correct answers clicked
        var x = 0;

        //all answers clicked
        var z =ratunkowa.length

        punkty.innerHTML = "Twoje punkty:  " + x + "/" + z;

        //*************************** NEXT SECTION *******************************

        var i = 0;

        next.addEventListener('click', function () {

            i++;

            if (i === ratunkowa.length) {
                i = 0;

                //template literar is not supported in some browsers
                alert("Zdoby\u0142e\u015B " + x + "("+x/z+"%)"+" punkt\xF3w!");
                x = 0;
                punkty.innerHTML = "Twoje punkty:  " + 0 + "/" + 0;
            };

            problem.innerHTML = ratunkowa[i].task;
            answer1.innerHTML = ratunkowa[i].answer1;
            answer2.innerHTML = ratunkowa[i].answer2;
            answer3.innerHTML = ratunkowa[i].answer3;
            answer4.innerHTML = ratunkowa[i].answer4;
            answer5.innerHTML = ratunkowa[i].answer5;

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

                if (ratunkowa[i].correct === 0) {
                     answer1.style.backgroundColor = "green";
                 } else {
                     answer1.style.backgroundColor = "red";
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
 
             }
             if(sessionStorage.getItem(i)==='1'){
           
                 if (ratunkowa[i].correct === 1) {
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
 
             }
             if(sessionStorage.getItem(i)==='2'){
         
                 if (ratunkowa[i].correct === 2) {
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
 
             }
             if(sessionStorage.getItem(i)==='3'){
 
                 if (ratunkowa[i].correct === 3) {
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
             }
             if(sessionStorage.getItem(i)==='4'){
                 if (ratunkowa[i].correct === 4) {
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
             }
        });


        //*************************** PREV SECTION *******************************

        prev.addEventListener('click', function () {

            i--;

            if (i === -1) {
                i = 0;
            };

            problem.innerHTML = ratunkowa[i].task;
            answer1.innerHTML = ratunkowa[i].answer1;
            answer2.innerHTML = ratunkowa[i].answer2;
            answer3.innerHTML = ratunkowa[i].answer3;
            answer4.innerHTML = ratunkowa[i].answer4;
            answer5.innerHTML = ratunkowa[i].answer5;

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

               if (ratunkowa[i].correct === 0) {
                    answer1.style.backgroundColor = "green";
                } else {
                    answer1.style.backgroundColor = "red";
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

            }
            if(sessionStorage.getItem(i)==='1'){
          
                if (ratunkowa[i].correct === 1) {
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

            }
            if(sessionStorage.getItem(i)==='2'){
        
                if (ratunkowa[i].correct === 2) {
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

            }
            if(sessionStorage.getItem(i)==='3'){

                if (ratunkowa[i].correct === 3) {
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
            }
            if(sessionStorage.getItem(i)==='4'){
                if (ratunkowa[i].correct === 4) {
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
            }
        });


        //************************** ANSWER COLORS ****************************

        answer1.addEventListener('click', function () {
            if (typeof sessionStorage.getItem(i) !== "string") {
                sessionStorage.setItem(i,'0');

                if (ratunkowa[i].correct === 0) {
                    x++;
                    answer1.style.backgroundColor = "green";

                } else {
                    answer1.style.backgroundColor = "red";
                    //color green for correct answer
                    if (ratunkowa[i].correct == 1) {
                        answer2.style.background = "green";
                    } else if (ratunkowa[i].correct == 2) {
                        answer3.style.background = "green";
                    } else if (ratunkowa[i].correct == 3) {
                        answer4.style.background = "green";
                    } else if (ratunkowa[i].correct == 4) {
                        answer5.style.background = "green";
                    }
                }

                punkty.innerHTML = "Twoje punkty:  " + x + "/" + z;

            }

        });

        answer2.addEventListener('click', function () {
            //answer2 is grey because of hovering answer2 before click
            if (typeof sessionStorage.getItem(i) !== "string") {
                sessionStorage.setItem(i,'1');         

                if (ratunkowa[i].correct === 1) {
                    x++;
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

                punkty.innerHTML = "Twoje punkty:  " + x + "/" + z;

            }
        });

        answer3.addEventListener('click', function () {

            if (typeof sessionStorage.getItem(i) !== "string") {
                sessionStorage.setItem(i,'2');

                if (ratunkowa[i].correct === 2) {
                    x++;
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

            punkty.innerHTML = "Twoje punkty:  " + x + "/" + z;

            }
        });

        answer4.addEventListener('click', function () {

            if (typeof sessionStorage.getItem(i) !== "string") {
                sessionStorage.setItem(i,'3');

                if (ratunkowa[i].correct === 3) {
                    x++;
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

                punkty.innerHTML = "Twoje punkty:  " + x + "/" + z;

            }
        });

        answer5.addEventListener('click', function () {

            if (typeof sessionStorage.getItem(i) !== "string") {
                sessionStorage.setItem(i,'4');

                if (ratunkowa[i].correct === 4) {
                    x++;
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

                punkty.innerHTML = "Twoje punkty:  " + x + "/" + z;

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

        //******************************** RESET *****************************88 */

        reset.addEventListener('click', function(){
            sessionStorage.clear();
            answer1.style.backgroundColor = "white";
            answer2.style.backgroundColor = "white";
            answer3.style.backgroundColor = "white";
            answer4.style.backgroundColor = "white";
            answer5.style.backgroundColor = "white";
            punkty.innerHTML = "Twoje punkty:  " + 0 + "/" + z;
            x=0;
        })

        answer1.addEventListener("mouseover",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer1.style.backgroundColor="grey";
            }
        })
        answer1.addEventListener("mouseout",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer1.style.backgroundColor="white";
            }
        })
        answer2.addEventListener("mouseover",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer2.style.backgroundColor="grey";
            }
        })
        answer2.addEventListener("mouseout",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer2.style.backgroundColor="white";
            }
        })

        answer3.addEventListener("mouseover",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer3.style.backgroundColor="grey";
            }
        })
        answer3.addEventListener("mouseout",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer3.style.backgroundColor="white";
            }
        })

        answer4.addEventListener("mouseover",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer4.style.backgroundColor="grey";
            }
        })
        answer4.addEventListener("mouseout",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer4.style.backgroundColor="white";
            }
        })

        answer5.addEventListener("mouseover",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer5.style.backgroundColor="grey";
            }
        })
        answer5.addEventListener("mouseout",function(){
            if (typeof sessionStorage.getItem(i) !== "string") {
                answer5.style.backgroundColor="white";
            }
        })
        
    });
};

// answer1.addEventListener("mouseover",function(){
//     if (typeof sessionStorage.getItem(i) !== "string") {
//         answer1.style.backgroundColor="grey";
//     }
// })
// answer1.addEventListener("mouseout",function(){
//     if (typeof sessionStorage.getItem(i) !== "string") {
//         answer1.style.backgroundColor="white";
//     }
// })

// answer2.addEventListener("mouseover",function(){
//     answer2.style.backgroundColor="grey";
// })
// answer2.addEventListener("mouseout",function(){
//     answer2.style.backgroundColor="white";
// })

// answer3.addEventListener("mouseover",function(){
//     answer3.style.backgroundColor="grey";
// })
// answer3.addEventListener("mouseout",function(){
//     answer3.style.backgroundColor="white";
// })

// answer4.addEventListener("mouseover",function(){
//     answer4.style.backgroundColor="grey";
// })
// answer4.addEventListener("mouseout",function(){
//     answer4.style.backgroundColor="white";
// })

// answer5.addEventListener("mouseover",function(){
//     answer5.style.backgroundColor="grey";
// })
// answer5.addEventListener("mouseout",function(){
//     answer5.style.backgroundColor="white";
// })