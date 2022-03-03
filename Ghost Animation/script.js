
function dance(){
    console.log("Dance Button Pressed");
    var svg = document.getElementById("ghost");
    elements = svg.getElementById("ghost_body");
    elements.classList.add("dance_ghost");
}
function eyeShrinkExpand(){
    reset();
    console.log("EyeShrinkExpand Button Pressed");
    var svg = document.getElementById("ghost");
    small_eye_inner = svg.getElementById("small_eye_inner");
    small_eye_outer = svg.getElementById("small_eye_outer");
    small_eye_inner.classList.add("small_eye_inner_expansion");
    small_eye_outer.classList.add("small_eye_outer_expansion");
    big_eye_inner = svg.getElementById("big_eye_inner");
    console.log(big_eye_inner);
    big_eye_outer = svg.getElementById("big_eye_outer");
    big_eye_inner.classList.add("big_eye_inner_shrink");
    big_eye_outer.classList.add("big_eye_outer_shrink");
    console.log(small_eye_inner);
}
function reset(){
    console.log("Reset Button Pressed");
    var svg = document.getElementById("ghost");
    elements = svg.getElementById("ghost_body");
    elements.classList.remove("dance_ghost");
}