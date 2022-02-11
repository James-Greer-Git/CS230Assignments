.rectangle{
    position: relative;
    width: 100%;
    height: 100px;
}
.rectangle:hover .button{
    visibility: visible;
}
.triangle{
    clip-path: polygon(50% 0, 30% 100%, 70% 100%);
}
.one{
    background-color: red;
}
.two{
    background-color: orange;
}
.three{
    background-color: yellow;
}
.four{
    background-color: blue;
}
.five{
    background-color: brown;
}
.six{
    background-color: green;
}
.button{
    background-color: white;
    height: 30px;
    width: 30px;
    position: relative;
    margin-top: 50px;
    margin-left: -50px;
    margin-right: 50px;
    padding: 10px;
    left: 50%;
    border-color: 2px solid black;
    border-radius: 50%;
    cursor: pointer;
    visibility: hidden;
}
