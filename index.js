var textin = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
var square = [];
var myi;
var win;
var previous = "nothing";
var calledBefore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //to prevent choosing x for example and then changing it to o in the same cell 
var player_one = {

    name: "player one",
    score: 0,
};
var player_two = {

    name: "player two",
    score: 0,
};

for (var i = 0; i < 9; i++) {
    square[i] = document.querySelectorAll(".square")[i];
    square[i].myi = i;//since i has no meaning inside the addevent listener because the event continues after the loop is ended 
    //myi stores the number of the square after the end of the for loop  
    square[i].addEventListener("click", function () {
        textin[this.myi] = document.querySelectorAll(".textin")[this.myi];
        if (previous === "nothing") //initial condition
        {
            textin[this.myi].innerHTML = "X";
            previous = "X";
            textin[this.myi].style.position = "relative";
            textin[this.myi].style.top = "35px";
            textin[this.myi].style.fontSize = "5em";
            this.style.background = "grey";
            this.style.textAlign = "center";
            this.style.lineHeight = "30px";
            calledBefore[this.myi] = 1;
        }
        else if (previous === "X" && calledBefore[this.myi] !== 1) //if the one before this is x the next will be o then change the previous to be o
        {
            textin[this.myi].innerHTML = "O";
            previous = "O";
            textin[this.myi].style.position = "relative";
            textin[this.myi].style.top = "35px";
            textin[this.myi].style.fontSize = "5em";
            this.style.background = "grey";
            this.style.textAlign = "center";
            this.style.lineHeight = "30px";
            calledBefore[this.myi] = 1;
        }
        else if (previous === "O" && calledBefore[this.myi] !== 1) //vice versa the above condition
        {
            textin[this.myi].innerHTML = "X";
            previous = "X";
            textin[this.myi].style.position = "relative";
            textin[this.myi].style.top = "35px";
            textin[this.myi].style.fontSize = "5em";
            this.style.background = "grey";
            this.style.textAlign = "center";
            this.style.lineHeight = "30px";
            calledBefore[this.myi] = 1;
        }

        compare();

    });
}

function win() {
    document.getElementById("win").innerHTML = "You have won !";
    //to prevent clicking after winning
    for (var i = 0; i < 9; i++) {
        if (calledBefore[i] !== 1) {
            calledBefore[i] = 1;
        }
        win = 1;
    }


}

function compare() {

    for (var i = 0; i < 9; i = i + 3) {
        if (textin[i].innerHTML !== undefined)
            if (textin[i].innerHTML === textin[i + 1].innerHTML && textin[i + 1].innerHTML === textin[i + 2].innerHTML) {
                square[i].style.background = "green";
                square[i + 1].style.background = "green";
                square[i + 2].style.background = "green";
                win();
            }
    }
    for (var i = 0; i < 3; i++) {
        if (textin[i].innerHTML !== undefined)
            if (textin[i].innerHTML === textin[i + 3].innerHTML && textin[i + 3].innerHTML === textin[i + 6].innerHTML) {
                square[i].style.background = "green";
                square[i + 3].style.background = "green";
                square[i + 6].style.background = "green";
                win();
            }

    }
    if (textin[0].innerHTML !== undefined)
        if (textin[0].innerHTML === textin[4].innerHTML && textin[4].innerHTML === textin[8].innerHTML) {
            square[0].style.background = "green";
            square[4].style.background = "green";
            square[8].style.background = "green";

            win();
        }
    if (textin[2].innerHTML !== undefined)
        if (textin[2].innerHTML === textin[4].innerHTML && textin[4].innerHTML === textin[6].innerHTML) {
            square[2].style.background = "green";
            square[4].style.background = "green";
            square[6].style.background = "green";

            win();
        }

    if (detectNoWin() && win !== 1) {
        document.getElementById("win").innerHTML = "No one have won!";

    }

} //closing of compare function

function detectNoWin() {
    var sum = 0;
    for (var i = 0; i < 9; i++) {
        if (calledBefore[i] === 1)
            sum++;
    }
    if (sum === 9)
        return true;
    else {
        return false;
    }
}
