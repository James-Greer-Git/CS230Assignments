var counterValOne = 0;

function incrementCountOne(){
    updateDisplayOne(++counterValOne);
}
function decrementCountOne(){
    if(counterValOne == 0){
        return;
    }
    updateDisplayOne(--counterValOne);
}
function updateDisplayOne(val){
    document.getElementById("counter_one").innerHTML = val;
}

var counterValTwo = 0;

function incrementCountTwo(){
    updateDisplayTwo(++counterValTwo);
}
function decrementCountTwo(){
    if(counterValTwo == 0){
        return;
    }
    updateDisplayTwo(--counterValTwo);
}
function updateDisplayTwo(val){
    document.getElementById("counter_two").innerHTML = val;
}

var counterValThree = 0;

function incrementCountThree(){
    updateDisplayThree(++counterValThree);
}
function decrementCountThree(){
    if(counterValThree == 0){
        return;
    }
    updateDisplayThree(--counterValThree);
}
function updateDisplayThree(val){
    document.getElementById("counter_three").innerHTML = val;
}

var counterValFour = 0;

function incrementCountFour(){
    updateDisplayFour(++counterValFour);
}
function decrementCountFour(){
    if(counterValFour == 0){
        return;
    }
    updateDisplayFour(--counterValFour);
}
function updateDisplayFour(val){
    document.getElementById("counter_four").innerHTML = val;
}

var counterValFive = 0;

function incrementCountFive(){
    updateDisplayFive(++counterValFive);
}
function decrementCountFive(){
    if(counterValFive == 0){
        return;
    }
    updateDisplayFive(--counterValFive);
}
function updateDisplayFive(val){
    document.getElementById("counter_five").innerHTML = val;
}

var counterValSix = 0;

function incrementCountSix(){
    updateDisplaySix(++counterValSix);
}
function decrementCountSix(){
    if(counterValSix == 0){
        return;
    }
    updateDisplaySix(--counterValSix);
}
function updateDisplaySix(val){
    document.getElementById("counter_six").innerHTML = val;
}
