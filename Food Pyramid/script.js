var currentHeightOne = "100px";
var currentHeightTwo = "100px";
var currentHeightThree = "100px";
var currentHeightFour = "100px";
var currentHeightFive = "100px";
var currentHeightSix = "100px";

var counterOne = 0;
var counterTwo = 0;
var counterThree = 0;
var counterFour = 0;
var counterFive = 0;
var counterSix = 0;

var youngChild = false;

function updateHeight(id, instruction){
    let currentHeight = "";
    let newHeight = "";

    switch(id){
        case "one": currentHeight = currentHeightOne;
        break;
        case "two": currentHeight = currentHeightTwo;
        break;
        case "three": currentHeight = currentHeightThree;
        break;
        case "four": currentHeight = currentHeightFour;
        break;
        case "five": currentHeight = currentHeightFive;
        break;
        case "six": currentHeight = currentHeightSix;
        break;
    }

    result = currentHeight.substring(0, 3);


    number = parseInt(result);
    
    if(instruction == "inc"){
        number = number + 10;
    }
    else{
        number = number - 10;
    }

    newHeight = number.toString() + "px";
    let top_margin = (number - 50) + "px";
    console.log(top_margin);
    let counter_id = "counter_" + id;

    switch(id){
        case "one": currentHeightOne = newHeight;
        break;
        case "two": currentHeightTwo = newHeight;
        break;
        case "three": currentHeightThree = newHeight;
        break;
        case "four": currentHeightFour = newHeight;
        break;
        case "five": currentHeightFive = newHeight;
        break;
        case "six": currentHeightSix = newHeight;
        break;  
    }
    document.getElementById(id).style.height = newHeight;
    document.getElementById(counter_id).style.marginTop = top_margin;
}

function incrementCountOne(){
    if(counterOne >= 5){
        return;
    }
    id = "one"
    updateDisplayOne(++counterOne);
    updateHeight(id, "inc");
}
function decrementCountOne(){
    if(counterOne == 0){
        return;
    }
    id = "one";
    updateDisplayOne(--counterOne);
    updateHeight(id, "dec");
}
function updateDisplayOne(val){
    if(val == 0){
        document.getElementById("counter_one").style.backgroundColor = "white";
    }
    else{
        if(youngChild){
            if(val > 0){
                document.getElementById("counter_one").style.backgroundColor = "red";
            }
            else{
                document.getElementById("counter_one").style.backgroundColor = "lime";
            }
            
        }
        else{
            if(val > 1){
                document.getElementById("counter_one").style.backgroundColor = "red";
            }
            else{
                document.getElementById("counter_one").style.backgroundColor = "lime";
            }
        }
    }
    document.getElementById("counter_one").innerHTML = val;
}

function incrementCountTwo(){
    if(counterTwo >= 5){
        return;
    }
    id = "two"
    updateDisplayTwo(++counterTwo);
    updateHeight(id, "inc");
}
function decrementCountTwo(){
    if(counterTwo == 0){
        return;
    }
    id = "two";
    updateDisplayTwo(--counterTwo);
    updateHeight(id, "dec");
}
function updateDisplayTwo(val){
    console.log(val);
    if(val == 0){
        document.getElementById("counter_two").style.backgroundColor = "white";
    }
    else{
        if(youngChild){
            if(val > 0){
                document.getElementById("counter_two").style.backgroundColor = "red"
            }
            else{
                document.getElementById("counter_two").style.backgroundColor = "lime";
            }
        }
        else{
            if(val > 1){
                document.getElementById("counter_two").style.backgroundColor = "red";
            }
            else{
                document.getElementById("counter_two").style.backgroundColor = "lime";
            }
        }
    } 
    document.getElementById("counter_two").innerHTML = val;
}

function incrementCountThree(){
    if(counterThree >= 5){
        return;
    }
    id = "three"
    updateDisplayThree(++counterThree);
    updateHeight(id, "inc");
}
function decrementCountThree(){
    if(counterThree == 0){
        return;
    }
    id = "three";
    updateDisplayThree(--counterThree);
    updateHeight(id, "dec");
}
function updateDisplayThree(val){
    if(val == 0){
        document.getElementById("counter_three").style.backgroundColor = "white";
    }
    else{
        if(youngChild){
            if(val < 3){
                document.getElementById("counter_three").style.backgroundColor = "yellow";
            }
            else if(val >= 3 && val < 5){
                document.getElementById("counter_three").style.backgroundColor = "lime";
            }
            else{
                document.getElementById("counter_three").style.backgroundColor = "red";
            }
        }
        else{
            if(val < 2){
                document.getElementById("counter_three").style.backgroundColor = "yellow";
            }
            else if(val == 2){
                document.getElementById("counter_three").style.backgroundColor = "lime";
            }
            else{
                document.getElementById("counter_three").style.backgroundColor = "red";
            }
        }
    }
    document.getElementById("counter_three").innerHTML = val;
}

function incrementCountFour(){
    if(counterFour >= 10){
        return;
    }
    id = "four"
    updateDisplayFour(++counterFour);
    updateHeight(id, "inc");
}
function decrementCountFour(){
    if(counterFour == 0){
        return;
    }
    id = "four";
    updateDisplayFour(--counterFour);
    updateHeight(id, "dec");
}
function updateDisplayFour(val){
    if(val == 0){
        document.getElementById("counter_four").style.backgroundColor = "white";
    }
    else{
        if(youngChild){
            if(val < 3){
                document.getElementById("counter_four").style.backgroundColor = "yellow";
            }
            else if(val == 3){
                document.getElementById("counter_four").style.backgroundColor = "lime";
            }
            else{
                document.getElementById("counter_four").style.backgroundColor = "red";
            }
        }
        else{
            if(val < 3){
                document.getElementById("counter_four").style.backgroundColor = "yellow";
            }
            else if(val == 3){
                document.getElementById("counter_four").style.backgroundColor = "lime";
            }
            else{
                document.getElementById("counter_four").style.backgroundColor = "red";
            }
        }
    }
    document.getElementById("counter_four").innerHTML = val;
}

function incrementCountFive(){
    if(counterFive >= 10){
        return;
    }
    id = "five"
    updateDisplayFive(++counterFive);
    updateHeight(id, "inc");
}
function decrementCountFive(){
    if(counterFive == 0){
        return;
    }
    id = "five";
    updateDisplayFive(--counterFive);
    updateHeight(id, "dec");
}
function updateDisplayFive(val){
    if(val == 0){
        document.getElementById("counter_five").style.backgroundColor = "white";
    }
    else{
        if(youngChild){
            if(val < 4){
                document.getElementById("counter_five").style.backgroundColor = "yellow";
            }
            else if(val >= 4 && val <= 5){
                document.getElementById("counter_five").style.backgroundColor = "lime";
            }
            else{
                document.getElementById("counter_five").style.backgroundColor = "red";
            }
        }
        else{
            if(val < 3){
                document.getElementById("counter_five").style.backgroundColor = "yellow";
            }
            else if(val >= 3 && val <= 5){
                document.getElementById("counter_five").style.backgroundColor = "lime";
            }
            else{
                document.getElementById("counter_five").style.backgroundColor = "red";
            }
        }
    }
    document.getElementById("counter_five").innerHTML = val;
}

function incrementCountSix(){
    if(counterSix >= 10){
        return;
    }
    id = "six"
    updateDisplaySix(++counterSix);
    updateHeight(id, "inc");
}
function decrementCountSix(){
    if(counterSix == 0){
        return;
    }
    id = "six";
    updateDisplaySix(--counterSix);
    updateHeight(id, "dec");
}
function updateDisplaySix(val){
    if(val == 0){
        document.getElementById("counter_six").style.backgroundColor = "white";
    }
    else{
        if(youngChild){
            if(val < 4){
                document.getElementById("counter_six").style.backgroundColor = "yellow";
            }
            else if(val >= 4 && val <= 6){
                document.getElementById("counter_six").style.backgroundColor = "lime";
            }
            else{
                document.getElementById("counter_six").style.backgroundColor = "red";
            }
        }
        else{
            if(val < 5){
                document.getElementById("counter_six").style.backgroundColor = "yellow";
            }
            else if(val >= 5 && val <= 7){
                document.getElementById("counter_six").style.backgroundColor = "lime";
            }
            else{
                document.getElementById("counter_six").style.backgroundColor = "red";
            }
        }
    }
    document.getElementById("counter_six").innerHTML = val;
}
function setYoungChild(){
    youngChild = true;
    document.getElementById("age").innerHTML = "Young Child";
    //console.log("Young Child? " + youngChild);
    updateDisplayOne(0);
    updateDisplayTwo(0);
    updateDisplayThree(0);
    updateDisplayFour(0);
    updateDisplayFive(0);
    updateDisplaySix(0);
    counterOne = 0;
    counterTwo = 0;
    counterThree = 0;
    counterFour = 0;
    counterFive = 0;
    counterSix = 0;
}
function setAdult(){
    youngChild = false;
    document.getElementById("age").innerHTML = "Adult";
    //console.log("Young Child? " + youngChild);
    updateDisplayOne(0);
    updateDisplayTwo(0);
    updateDisplayThree(0);
    updateDisplayFour(0);
    updateDisplayFive(0);
    updateDisplaySix(0);
    counterOne = 0;
    counterTwo = 0;
    counterThree = 0;
    counterFour = 0;
    counterFive = 0;
    counterSix = 0; 
}
