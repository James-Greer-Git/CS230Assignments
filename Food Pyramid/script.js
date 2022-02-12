var counterOne = 0;

function incrementCountOne(){
    updateDisplayOne(++counterOne);
}
function decrementCountOne(){
    if(counterOne == 0){
        return;
    }
    updateDisplayOne(--counterOne);
}
function updateDisplayOne(val){
    document.getElementById("counter_one").innerHTML = val;
}

var counterTwo = 0;

function incrementCountTwo(){
    updateDisplayTwo(++counterTwo);
}
function decrementCountTwo(){
    if(counterTwo == 0){
        return;
    }
    updateDisplayTwo(--counterTwo);
}
function updateDisplayTwo(val){
    document.getElementById("counter_two").innerHTML = val;
}

var counterThree = 0;

function incrementCountThree(){
    updateDisplayThree(++counterThree);
}
function decrementCountThree(){
    if(counterThree == 0){
        return;
    }
    updateDisplayThree(--counterThree);
}
function updateDisplayThree(val){
    document.getElementById("counter_three").innerHTML = val;
}

var counterFour = 0;

function incrementCountFour(){
    updateDisplayFour(++counterFour);
}
function decrementCountFour(){
    if(counterFour == 0){
        return;
    }
    updateDisplayFour(--counterFour);
}
function updateDisplayFour(val){
    document.getElementById("counter_four").innerHTML = val;
}

var counterFive = 0;

function incrementCountFive(){
    updateDisplayFive(++counterFive);
}
function decrementCountFive(){
    if(counterFive == 0){
        return;
    }
    updateDisplayFive(--counterFive);
}
function updateDisplayFive(val){
    document.getElementById("counter_five").innerHTML = val;
}

var counterSix = 0;

function incrementCountSix(){
    updateDisplaySix(++counterSix);
}
function decrementCountSix(){
    if(counterSix == 0){
        return;
    }
    updateDisplaySix(--counterSix);
}
function updateDisplaySix(val){
    document.getElementById("counter_six").innerHTML = val;
}
