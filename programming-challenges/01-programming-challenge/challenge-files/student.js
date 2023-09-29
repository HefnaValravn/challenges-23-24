// Write your code here
done1 = 0;
done2 = 0;

function myFirstFunction(bike) {
    forward(bike);
}

function twiceForward(bike) {
    forward(bike);
    forward(bike);
}

function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward5(bike) {
    let i = 5;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function forward7(bike) {
    let i = 7;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function forward9(bike) {
    let i = 9;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function forward10(bike) {
    let i = 10;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function right(bike) {
    turnRight(bike);
    forward(bike);
}


function ellShape(bike) {
    forward5(bike);
    turnRight(bike);
    forward4(bike);
}

function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}

function crookedUTurn(bike) {
    forward7(bike);
    turnRight(bike);
    forward9(bike);
    turnRight(bike);
    thriceForward(bike);
}

function forwardUntilWall(bike) {
    let s = 0;
    while (!sensor(bike)) {
        forward(bike);
        s++;
    }
    return s;
}

function smartEllShape(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
    turnRight(bike);
    while (!sensor(bike)) {
        forward(bike);
    }
}

function spiral(bike) {
    let i = 17;
    while (i > 0) {
        forwardUntilWall(bike);
        turnRight(bike);
        i = i - 1;
    }
    forward(bike);
}

function turnLeft(bike) {
    turnRight(bike);
    turnRight(bike);
    turnRight(bike);
}

function left(bike) {
    turnLeft(bike);
    forward(bike);
}

function slalom(bike) {
    forwardUntilWall(bike);
    turnLeft(bike);
    forwardUntilWall(bike);
    turnRight(bike);
    forwardUntilWall(bike);
    turnRight(bike);
    forwardUntilWall(bike);
    turnLeft(bike);
    forwardUntilWall(bike);
    turnLeft(bike);
    forwardUntilWall(bike);
    turnRight(bike);
    forwardUntilWall(bike);
    turnRight(bike);
    forwardUntilWall(bike);
}

function leftOrRight(bike) {
    turnRight(bike);
    if (sensor(bike)) {
        turnRight(bike);
        turnRight(bike);
    }
    else {
        forwardUntilWall(bike);
    }
    forwardUntilWall(bike);
    turnRight(bike);
    if (sensor(bike)) {
        turnRight(bike);
        turnRight(bike);
    }
    else {
        forwardUntilWall(bike);
    }
    forwardUntilWall(bike);
}

function whereI(bike) {
    while (sensor(bike)) {
        turnRight(bike);
    }
}


function justGo(bike){
    while (sensor(bike)){
        turnRight(bike);
    }
    forwardUntilWall(bike);
}


function incompleteU(bike){
    justGo(bike);
    turnRight(bike);
    if(sensor(bike)){
        turnLeft(bike);
    }
    else if(!sensor(bike)){
        justGo(bike);
    }
    if(sensor(bike)){
        turnRight(bike);
        forwardUntilWall(bike);
    }
    else if(!sensor(bike)){
        justGo(bike);
    }

}


function whichDirection(bike) {
    while (sensor(bike)) {
        turnRight(bike);
    }
    forwardUntilWall(bike);
}


function sensorRight(bike){
    turnRight(bike);
    let result1 = sensor(bike);
    turnLeft(bike);

    return result1;
}

function sensorLeft(bike){
    turnLeft(bike);
    let result2 = sensor(bike);
    turnRight(bike);

    return result2;
}

function forwardUntilFreeRight(bike){
    while (sensorRight(bike)){
        forward(bike);
    }
}

function forwardUntilFreeLeft(bike){
    while (sensorLeft(bike)){
        forward(bike);
    }
}

function firstRight(bike) {
    forwardUntilFreeRight(bike);
    if (!sensorRight(bike)){
        turnRight(bike);
        forwardUntilWall(bike);
    }
    
}

function firstRight2(bike) {
    let i = 1;
    while (i > 0){
        while (sensorRight(bike)){
            forward(bike);
        }
        if (!sensorRight(bike)){
            turnRight(bike);
            forwardUntilWall(bike);
            i = i - 1;
        }
    }
    
}


function firstLeft(bike){
    while (sensorLeft(bike)){
        forward(bike);
    }
    if (!sensorLeft(bike)){
        turnLeft(bike);
    }
    forwardUntilWall(bike);
    
}


function zigZag(bike){
    firstRight2(bike);
    forwardUntilWall(bike);
    firstLeft(bike);
    forwardUntilWall(bike);
    turnRight(bike);
    turnRight(bike);
    forward(bike);
    turnRight(bike);
    forwardUntilWall(bike);

}


function secondRight(bike){
    forwardUntilFreeRight(bike);
    forward(bike);
    forwardUntilFreeRight(bike);
    turnRight(bike);
    forwardUntilWall(bike);
}

function thirdRight(bike){
    forwardUntilFreeRight(bike);
    forward(bike);
    forwardUntilFreeRight(bike);
    forward(bike);
    forwardUntilFreeRight(bike);
    turnRight(bike);
    forwardUntilWall(bike);
}

function fourthRight(bike){
    let i = 4;
    while (i > 1){
        forward(bike);
        sensorRight(bike);
        if (sensor(bike)){
            forward(bike);
        }
        else if (!sensor(bike)){
            forward(bike);
            i = i - 1;
        }
        
    }
    forward(bike);
    forwardUntilFreeRight(bike);
    turnRight(bike);
    forwardUntilWall(bike);

}

function fifthLeft(bike){
    let i = 6;
    while (i > 1){
        forward(bike);
        sensorLeft(bike);
        if (sensor(bike)){
            break;
        }
        else if (!sensor(bike)){
            forward(bike);
            i = i - 1;
        }
        
    }
    forward(bike);
    forwardUntilFreeLeft(bike);
    turnLeft(bike);
    forwardUntilWall(bike);

}

function forwardUntilNthLeft(bike, n){
    let i = n;
    while (i > 0){
        forward(bike);
        sensorLeft(bike);
        if (sensor(bike)){
            break;
        }
        else if (!sensor(bike)){
            i = i - 1;
        }
        
    }
}

function forwardUntilNthRight(bike, n){
    let i = n;
    while (i > 0){
        forward(bike);
        sensorRight(bike);
        if (sensor(bike)){
            break;
        }
        else if (!sensor(bike)){
            i = i - 1;
        }
    }
}

function maze(bike){
    function L(n){
        forwardUntilNthLeft(bike, n);
        turnLeft(bike);
    }

    function R(n){
        forwardUntilNthRight(bike, n);
        turnRight(bike);
    }
    R(7);
    L(3);
    L(9);
    L(5);
    R(9);
    R(4);
    L(7);
    forwardUntilWall(bike);
}

function DeadRecon(bike){
    let r = 0;
    sensor(bike);
    if (sensor(bike)){
        r = r + 1;
    }
    turnRight(bike);
    sensor(bike);
    if (sensor(bike)){
        r = r + 1;
    }
    turnRight(bike);
    sensor(bike);
    if (sensor(bike)){
        r = r + 1;
    }
    turnRight(bike);
    sensor(bike);
    if (sensor(bike)){
        r = r + 1;
    }
    turnRight(bike);
    return r;
}


function backward(bike){
    turnRight(bike);
    turnRight(bike);
    forward(bike);
    turnRight(bike);
    turnRight(bike);
}


function findDeadEnd(bike){
    let i = 4;
    while (i > 0){
        forward(bike);
        if(sensorLeft(bike) && sensorRight(bike) && sensor(bike)){
            return;
        }
        else{
            backward(bike);
            turnRight(bike);
        }
        i--;
    }

}




function forwardUntilDestination(bike){
    while(!destinationReached(bike)){
        forward(bike);
    }
}

function forwardUntilLDestination(bike){
    while(!destinationReached(bike)){
        forwardUntilWall(bike);
        turnLeft(bike);
        forward(bike);
        turnLeft(bike);
    }
}

function forwardUntilRDestination(bike){
    while(!destinationReached(bike)){
        forwardUntilWall(bike);
        turnRight(bike);
        forward(bike);
        turnRight(bike);

    }
}


function follow(bike){
    let i = 100;
    while (i > 0){
        forwardUntilWall(bike);
        if (sensorRight(bike) && !sensorLeft(bike)){
            turnLeft(bike);
        }
        else if (sensorLeft(bike) && !sensorRight(bike)){
            turnRight(bike);
        }
        else if (sensorLeft(bike) && sensorRight(bike) && sensor(bike)){
            i = 0;
        }
        i--;
    }
}

/*
function follow(bike){
    while (!destinationReached(car)){
        forwardUntilWall(bike);
        if (sensorRight(bike)){
            turnLeft(bike);
        }
        else if (sensorLeft(bike)){
            turnRight(bike);
        }
    }
}

*/

function rightHand(bike){
    let i = 200;
    while(i > 0){
        forward(bike);
        if(!sensorRight(bike) && sensorLeft(bike)){
            turnRight(bike);
        
        }
        else if(!sensorLeft(bike) && sensorRight(bike) && sensor(bike)){
            turnLeft(bike);
        }
        else if(!sensorLeft(bike) && !sensorRight(bike) && sensor(bike)){
            turnRight(bike);
        }
        else if(!sensorLeft(bike) && !sensorRight(bike) && !sensor(bike)){
            turnRight(bike);
        }
        else if(sensorLeft(bike) && sensorRight(bike) && sensor(bike)){
            i = 0;
        }
        i--;
    }
  }

function part1(bike){
  forwardUntilWall(bike);
  turnRight(bike);
  forward(bike);
  turnRight(bike);
  forwardUntilWall(bike);
  turnLeft(bike);
  forward(bike);
  turnLeft(bike);

}



function turnRightTwice(bike){
    turnRight(bike);
    turnRight(bike);
}

function UpNDown(bike){
    forward(bike);
    turnLeft(bike);
    forwardUntilWall(bike);
    turnRightTwice(bike);
    forwardUntilWall(bike);
    turnRight(bike);
    
}

function sweep(bike){
    for (i = 0; i < 25; i++){
        forward(bike);
        if (sensor(bike) && sensorLeft(bike) && i < 10){
            turnRight(bike);
            forward(bike);
            turnRight(bike);
        }
        else if (sensor(bike) && sensorLeft(bike) && i > 10){
            turnRight(bike);
            forward(bike);
            turnRight(bike);
        }
        else if (sensor(bike) && !sensorLeft(bike) && !sensorRight(bike) && i < 15){
            turnLeft(bike);
            forward(bike);
            turnLeft(bike);
        }
        else if (sensor(bike) && !sensorLeft(bike) && !sensorRight(bike) && i < 22){
            turnRight(bike);
            forward(bike);
            turnRight(bike);
        
        }

    
    }
    

}

/*

function roomba(bike){
    sweep(bike);
    
    while (!destinationReached(bike)){
        UpNDown(bike);
    }

}
*/

function getOffset(bike) {
    const rect = bike.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

/*

function roomba(bike){
    sweep(bike);
    getOffset(bike).top;
    getOffset(bike).left;
    while (finishPosition < -200){
        UpNDown(bike);
        finishPosition = finishPosition + 1;
    }

}

*/