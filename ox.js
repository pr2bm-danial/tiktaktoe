// JavaScript (ox.js)
let rndm; // Declare rndm variable globally
function random() {
    const options = [0, 1];
    const optionsIndex = Math.floor(Math.random() * options.length);
    return options[optionsIndex];
}

function checkRandom() {
rndm = random();
console.log(rndm);
}

function terminate() {
    let tell = document.getElementById('announce');
    if (rndm === 0) {
        tell.innerHTML = "O begins!";
    } else {
        tell.innerHTML = "X begins!";
    }
}

function startGame() {
    checkRandom();
    terminate();
    console.log("game begins!")
}

// Rest of your functions (first(), second(), ..., paint()) goes here

const number = [0, 1, 2, 3, 4, 5 ,6 ,7, 8]
number.fill(false)

const circle = [0, 1, 2, 3, 4, 5, 6, 7, 8]
circle.fill(false)

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8]
x.fill(false)

const filled = [0, 1, 2, 3, 4, 5, 6, 7, 8]
filled.fill(false)

let winner = false;

function first() {
    number[0] = true;
    paint();
    checkForResult();
};

function second() {
    number[1] = true;
    paint();
    checkForResult();
};

function third() {
    number[2] = true;
    paint();
    checkForResult();
};


function forth() {
    number[3] = true;
    paint();
    checkForResult();
};

function fifth() {
    number[4] = true;
    paint();
    checkForResult();
};

function sixth() {
    number[5] = true;
    paint();
    checkForResult();
};

function seventh() {
    number[6] = true;
    paint();
    checkForResult();
};

function eighth() {
    number[7] = true;
    paint();
    checkForResult();
};

function nineth() {
    number[8] = true;
    paint();
    checkForResult();
};


function paint() {
    let tell = document.getElementById("announce");

    let un = document.getElementById('a');
    let deux = document.getElementById('b');
    let troi = document.getElementById('c');
    let quatre = document.getElementById('d');
    let cinq = document.getElementById('e');
    let sis = document.getElementById('f');
    let sept = document.getElementById('g');
    let huit = document.getElementById('h');
    let neuf = document.getElementById('i');

    //fill cell with O
    if (rndm === 0 && number[0]) {
        filled[0] = true;
        number[0] = false;
        un.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[0] = true;
        un.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    } else if (rndm === 0 && number[1]) {
        filled[1] = true;
        number[1] = false;
        deux.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[1] = true;
        deux.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    } else if (rndm === 0 && number[2]) {
        filled[2] = true;
        number[2] = false;
        troi.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[2] = true;
        troi.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    } else if (rndm === 0 && number[3]) {
        filled[3] = true;
        number[3] = false;
        quatre.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[3] = true;
        quatre.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    } else if (rndm === 0 && number[4]) {
        filled[4] = true;
        number[4] = false;
        cinq.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[4] = true;
        cinq.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    } else if (rndm === 0 && number[5]) {
        filled[5] = true;
        number[5] = false;
        sis.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[5] = true;
        sis.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    } else if (rndm === 0 && number[6]) {
        filled[6] = true;
        number[6] = false;
        sept.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[6] = true;
        sept.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    } else if (rndm === 0 && number[7]) {
        filled[7] = true;
        number[7] = false;
        huit.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[7] = true;
        huit.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    } else if (rndm === 0 && number[8]) {
        filled[8] = true;
        number[8] = false;
        neuf.innerHTML = "<img src='circle.png' alt='0' style='width: 48px; height: 48px'>";
        rndm ++;
        console.log(rndm);
        circle[8] = true;
        neuf.classList.add('disabled');
        tell.innerHTML = "it's X turn!";
    }
    //fill cell with X
    else if (rndm === 1 && number[0]) {
        filled[0] = true;
        number[0] = false;
        un.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[0] = true;
        un.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    } else if (rndm === 1 &&  number[1]) {
        filled[1] = true;
        number[1] = false;
        deux.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[1] = true;
        deux.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    } else if (rndm === 1 &&  number[2]) {
        filled[2] = true;
        number[2] = false;
        troi.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[2] = true;
        troi.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    } else if (rndm === 1 &&  number[3]) {
        filled[3] = true;
        number[3] = false;
        quatre.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[3] = true;
        quatre.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    } else if (rndm === 1 &&  number[4]) {
        filled[4] = true;
        number[4] = false;
        cinq.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[4] = true;
        cinq.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    } else if (rndm === 1 &&  number[5]) {
        filled[5] = true;
        number[5] = false;
        sis.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[5] = true;
        sis.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    } else if (rndm === 1 &&  number[6]) {
        filled[6] = true;
        number[6] = false;
        sept.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[6] = true;
        sept.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    } else if (rndm === 1 &&  number[7]) {
        filled[7] = true;
        number[7] = false;
        huit.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[7] = true;
        huit.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    } else if (rndm === 1 &&  number[8]) {
        filled[8] = true;
        number[8] = false;
        neuf.innerHTML = "<img src='cross.png' alt='0' style='width: 38px; height: 38px'>"
        rndm --;
        console.log(rndm);
        x[8] = true;
        neuf.classList.add('disabled');
        tell.innerHTML = "it's O turn!";
    }
};

function disableTheCells() {
    let board = document.querySelectorAll('table td');
    board.forEach(cell => {
        cell.classList.add('disabled');
    });
}



function restartGame() {
    let cells = document.querySelectorAll('table td');
    let body = document.getElementById('body');
    
    circle.fill(false);
    x.fill(false);
    filled.fill(false);

    winner = false;

    cells.forEach(cell => {
        // Setze den Inhalt der Zellen zurück
        cell.innerHTML = " ";

        // Entferne die 'disabled'-Klasse
        cell.classList.remove('disabled');
    });

    startGame();
}


function checkForResult() {
    let body = document.getElementById('body');
    let tell = document.getElementById('announce');
    if (x[0] && x[1] && x[2]) {
        tell.innerHTML = "X wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (x[0] && x[4] && x[8]) {
        tell.innerHTML = "X wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (x[0] && x[3] && x[6]) {
        tell.innerHTML = "X wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (x[1] && x[4] && x[7]) {
        tell.innerHTML = "X wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (x[2] && x[5] && x[8]) {
        tell.innerHTML = "X wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (x[2] && x[4] && x[6]) {
        tell.innerHTML = "X wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (x[3] && x[4] && x[5]) {
        tell.innerHTML = "X wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (x[6] && x[7] && x[8]) {
        tell.innerHTML = "X wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (circle[0] && circle[1] && circle[2]) {
        tell.innerHTML = "O wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (circle[0] && circle[4] && circle[8]) {
        tell.innerHTML = "O wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (circle[0] && circle[3] && circle[6]) {
        tell.innerHTML = "O wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (circle[1] && circle[4] && circle[7]) {
        tell.innerHTML = "O wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (circle[2] && circle[5] && circle[8]) {
        tell.innerHTML = "O wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (circle[2] && circle[4] && circle[6]) {
        tell.innerHTML = "O wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (circle[3] && circle[4] && circle[5]) {
        tell.innerHTML = "O wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    } else if (circle[6] && circle[7] && circle[8]) {
        tell.innerHTML = "O wins!!"
        disableTheCells();
        setTimeout(restartGame, 3000);
        console.log("restarted!");
        winner = true;
    }
    else if(filled[0] && filled[1] && filled[2] && filled[3] && filled[4] && filled[5] && filled[6] && filled[7] && filled[8] && winner === false ){
        console.log("tie!");
        tell.innerHTML = "tie!"
        setTimeout(restartGame, 3000);
    }
}
