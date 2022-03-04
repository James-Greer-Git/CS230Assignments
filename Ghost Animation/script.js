
function dance(){
    console.log("Dance Button Pressed");
    var svg = document.getElementById("ghost");
    elements = svg.getElementById("ghost_body");
    if(elements.classList.contains("dance_ghost")){
        elements.classList.remove("dance_ghost");
    }
    else{
        elements.classList.add("dance_ghost");
    }
}
function eyeShrinkExpand(){
    console.log("EyeShrinkExpand Button Pressed");
    var svg = document.getElementById("ghost");
    if(svg.classList.contains("eyeShrinkExpand")){
        svg.classList.remove("eyeShrinkExpand");
        small_eye_inner = svg.getElementById("small_eye_inner");
        small_eye_outer = svg.getElementById("small_eye_outer");
        small_eye_inner.classList.remove("small_eye_inner_expansion");
        small_eye_outer.classList.remove("small_eye_outer_expansion");
        big_eye_inner = svg.getElementById("big_eye_inner");
        big_eye_outer = svg.getElementById("big_eye_outer");
        big_eye_inner.classList.remove("big_eye_inner_shrink");
        big_eye_outer.classList.remove("big_eye_outer_shrink");
    }
    else{
        svg.classList.add("eyeShrinkExpand");
        small_eye_inner = svg.getElementById("small_eye_inner");
        small_eye_outer = svg.getElementById("small_eye_outer");
        small_eye_inner.classList.add("small_eye_inner_expansion");
        small_eye_outer.classList.add("small_eye_outer_expansion");
        big_eye_inner = svg.getElementById("big_eye_inner");
        big_eye_outer = svg.getElementById("big_eye_outer");
        big_eye_inner.classList.add("big_eye_inner_shrink");
        big_eye_outer.classList.add("big_eye_outer_shrink");
    }
}
function spookyFloat(){
    var svg = document.getElementById("ghost");
    elements = svg.getElementById("ghost_body");
    if(elements.classList.contains("spookyFloat")){
        elements.classList.remove("spookyFloat");
    }
    else{
        elements.classList.add("spookyFloat");
    }
}
function wink(){
    var svg = document.getElementById("ghost");
    big_eye_inner = svg.getElementById("big_eye_inner");
    big_eye_outer = svg.getElementById("big_eye_outer");
    if(svg.classList.contains("wink")){
        svg.classList.remove("wink");
        big_eye_inner.classList.remove("inner_eye_wink");
        big_eye_outer.classList.remove("outer_eye_wink");
    }
    else{
        svg.classList.add("wink");
        big_eye_inner.classList.add("inner_eye_wink");
        big_eye_outer.classList.add("outer_eye_wink");
    }
}
function hide(){
    console.log("Hide Button Pressed");
    var svg = document.getElementById("ghost");
    elements = svg.getElementById("ghost_body");
    if(elements.classList.contains("hide_ghost")){
        elements.classList.remove("hide_ghost");
    }
    else{
        elements.classList.add("hide_ghost");
    }
}
function reset(){
    var svg = document.getElementById("ghost");
    elements = svg.getElementById("ghost_body");
    elements.classList.remove("dance_ghost");
    elements.classList.remove("spookyFloat");
    elements.classList.remove("hide_ghost");
    small_eye_inner = svg.getElementById("small_eye_inner");
    small_eye_outer = svg.getElementById("small_eye_outer");
    big_eye_inner = svg.getElementById("big_eye_inner");
    big_eye_outer = svg.getElementById("big_eye_outer");
    small_eye_inner.classList.remove("small_eye_inner_expansion");
    small_eye_outer.classList.remove("small_eye_outer_expansion");
    big_eye_inner.classList.remove("big_eye_inner_shrink");
    big_eye_outer.classList.remove("big_eye_outer_shrink");
    big_eye_inner.classList.remove("inner_eye_wink");
    big_eye_outer.classList.remove("outer_eye_wink");
}
function exportSVG(){
    var svg = document.getElementsByClassName("animationDisplayBox")[0].innerHTML;
    document.getElementById("svgSourceDisplay").textContent = svg;
}