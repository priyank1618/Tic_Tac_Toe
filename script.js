console.log("Welcome to Tic Tac Toe");

// lets make audio variable
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;


//--------Function to change the turn
//it is function expression

const changeturn = () => {
    return turn === "X" ? "0" : "X"
}

//---------Function to check for a win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " " + "won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })

}



//-------Game logic

//this return html collection 
//to covert into ARRAY use array dot from

// in this logic var name boxes contain html collection which has all the elemets which class is boxes
// now then this html collectiobn into the array and after it
// each elements of box taken and after it take a query selector to get theboxtext which is in the box classs div
// now put event listener on all the elements of the box class and add the logic according work
// in last getElementsByClassName written [0] bcz it give collection



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }

        }
    })
})


// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let text = document.querySelectorAll('.boxtext');
    Array.from(text).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})






