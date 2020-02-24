function cssGenerator(){
    var animationName = document.getElementById("Name").value;
    var colorOne = document.getElementById("colorOne").value;
    var colorTwo = document.getElementById("colorTwo").value;
    var gradientAngle = document.getElementById("Angle").value;

    var outputField = document.getElementById("outputLabel");

    outputField.innerHTML = "background: linear-gradient(" + gradientAngle + "deg," + colorOne + "," + colorTwo + "); &#10; &#10; background-size: 400% 400%; &#10; &#10; animation: " + animationName + " 30s ease infinite; &#10; &#10; @keyframes " + animationName + " { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%}}";
    //document.body.style.backgroundImage = ".cssClass {background: linear-gradient(" + gradientAngle + "deg," + colorOne + "," + colorTwo + "); background-size: 400% 400%; animation: " + animationName + " 30s ease infinite; @keyframes " + animationName + " { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}}";

}

function cssPreview(){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ".cssClass {background: linear-gradient(180deg,#000000,#000000);}";
    document.getElementsByTagName('body')[0].appendChild(style);
    document.body.className = 'cssClass';
}

