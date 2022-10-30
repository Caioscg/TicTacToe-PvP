const topLeft = document.querySelector("#top .left")
const topLeftSymbol = document.querySelector("#top .left p")
let TL
const topMid = document.querySelector("#top .mid")
const topMidSymbol = document.querySelector("#top .mid p")
let TM
const topRight = document.querySelector("#top .right")
const topRightSymbol = document.querySelector("#top .right p")
let TR

const midLeft = document.querySelector("#mid .left")
const midLeftSymbol = document.querySelector("#mid .left p")
let ML
const midMid = document.querySelector("#mid .mid")
const midMidSymbol = document.querySelector("#mid .mid p")
let MM
const midRight = document.querySelector("#mid .right")
const midRightSymbol = document.querySelector("#mid .right p")
let MR

const bottomLeft = document.querySelector("#bottom .left")
const bottomLeftSymbol = document.querySelector("#bottom .left p")
let BL
const bottomMid = document.querySelector("#bottom .mid")
const bottomMidSymbol = document.querySelector("#bottom .mid p")
let BM
const bottomRight = document.querySelector("#bottom .right")
const bottomRightSymbol = document.querySelector("#bottom .right p")
let BR

let x = 0
let o = 0
let blue = 0
let red = 0
const blueScore = document.querySelector("#blue-score")
const redScore = document.querySelector("#red-score")

const blackBar = document.querySelector("#black")
const playAgain = document.querySelector("button")
const DRAW = document.querySelector("#draw")
const victoryO = document.querySelector("#wino")
const victoryX = document.querySelector("#winx")

// events
topLeft.addEventListener("click", () => {
    if (TL != undefined) return
    if (is_X_or_O () === 1) {
        topLeftSymbol.textContent = "X"
        topLeftSymbol.style.color = "blue"
        TL = "X"
        x++;

        if (TM === "X" && TR === "X" || ML === "X" && BL === "X" || MM === "X" && BR === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        topLeftSymbol.textContent = "O"
        topLeftSymbol.style.color = "red"
        TL = "O"
        o++;

        if (TM === "O" && TR === "O" || ML === "O" && BL === "O" || MM === "O" && BR === "O") {
            winO()
        }
    }
})

topMid.addEventListener("click", () => {
    if (TM != undefined) return
    if (is_X_or_O () === 1) {
        topMidSymbol.textContent = "X"
        topMidSymbol.style.color = "blue"
        TM = "X"
        x++;

        if (TL === "X" && TR === "X" || MM === "X" && BM === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        topMidSymbol.textContent = "O"
        topMidSymbol.style.color = "red"
        TM = "O"
        o++;

        if (TL === "O" && TR === "O" || MM === "O" && BM === "O") {
            winO()
        }
    }
})

topRight.addEventListener("click", () => {
    if (TR != undefined) return
    if (is_X_or_O () === 1) {
        topRightSymbol.textContent = "X"
        topRightSymbol.style.color = "blue"
        TR = "X"
        x++;

        if (TL === "X" && TM === "X" || MR === "X" && BR === "X" || MM === "X" && BL === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        topRightSymbol.textContent = "O"
        topRightSymbol.style.color = "red"
        TR = "O"
        o++;
        
        if (TL === "O" && TM === "O" || MR === "O" && BR === "O" || MM === "O" && BL === "O") {
            winO()
        }
    }
})

midLeft.addEventListener("click", () => {
    if (ML != undefined) return
    if (is_X_or_O () === 1) {
        midLeftSymbol.textContent = "X"
        midLeftSymbol.style.color = "blue"
        ML = "X"
        x++;
        
        if (MM === "X" && MR === "X" || TL === "X" && BL === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        midLeftSymbol.textContent = "O"
        midLeftSymbol.style.color = "red"
        ML = "O"
        o++;
        
        if (MM === "O" && MR === "O" || TL === "O" && BL === "O") {
            winO()
        }
    }
})

midMid.addEventListener("click", () => {
    if (MM != undefined) return
    if (is_X_or_O () === 1) {
        midMidSymbol.textContent = "X"
        midMidSymbol.style.color = "blue"
        MM = "X"
        x++;
        
        if (ML === "X" && MR === "X" || TM === "X" && BM === "X" || TL === "X" && BR === "X" || TR === "X" && BL === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        midMidSymbol.textContent = "O"
        midMidSymbol.style.color = "red"
        MM = "O"
        o++;
        
        if (ML === "O" && MR === "O" || TM === "O" && BM === "O" || TL === "O" && BR === "O" || TR === "O" && BL === "O") {
            winO()
        }
    }
})

midRight.addEventListener("click", () => {
    if (MR != undefined) return
    if (is_X_or_O () === 1) {
        midRightSymbol.textContent = "X"
        midRightSymbol.style.color = "blue"
        MR = "X"
        x++;
        
        if (ML === "X" && MM === "X" || TR === "X" && BR === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        midRightSymbol.textContent = "O"
        midRightSymbol.style.color = "red"
        MR = "O"
        o++;
        
        if (ML === "O" && MM === "O" || TR === "O" && BR === "O") {
            winO()
        }
    }
})

bottomLeft.addEventListener("click", () => {
    if (BL != undefined) return
    if (is_X_or_O () === 1) {
        bottomLeftSymbol.textContent = "X"
        bottomLeftSymbol.style.color = "blue"
        BL = "X"
        x++;
        
        if (BM === "X" && BR === "X" || TL === "X" && ML === "X" || MM === "X" && TR === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        bottomLeftSymbol.textContent = "O"
        bottomLeftSymbol.style.color = "red"
        BL = "O"
        o++;
        
        if (BM === "O" && BR === "O" || TL === "O" && ML === "O" || MM === "O" && TR === "O") {
            winO()
        }
    }
})

bottomMid.addEventListener("click", () => {
    if (BM != undefined) return
    
    if (is_X_or_O () === 1) {
        bottomMidSymbol.textContent = "X"
        bottomMidSymbol.style.color = "blue"
        BM = "X"
        x++;
        
        if (BL === "X" && BR === "X" || TM === "X" && MM === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        bottomMidSymbol.textContent = "O"
        bottomMidSymbol.style.color = "red"
        BM = "O"
        o++;
        
        if (BL === "O" && BR === "O" || TM === "O" && MM === "O") {
            winO()
        }
    }
})

bottomRight.addEventListener("click", () => {
    if (BR != undefined) return
    if (is_X_or_O () === 1) {
        bottomRightSymbol.textContent = "X"
        bottomRightSymbol.style.color = "blue"
        BR = "X"
        x++;
        
        if (BL === "X" && BM === "X" || TR === "X" && MR === "X" || MM === "X" && TL === "X") {
            winX()
        }
        else if (x === 5) {
            draw()
        }
    }
    else {
        bottomRightSymbol.textContent = "O"
        bottomRightSymbol.style.color = "red"
        BR = "O"
        o++;
        
        if (BL === "O" && BM === "O" || TR === "O" && MR === "O" || MM === "O" && TL === "O") {
            winO()
        }
    }
})

playAgain.addEventListener("click", play)

// functions
function is_X_or_O () {
    if (x === o) return 1
    else if (x > 0) return 2
}

function winX () {
    blue++;
    setTimeout (() => {
        blackBar.style.visibility = "visible"
        blackBar.style.backgroundColor = "#2146C7"
        victoryX.style.visibility = "visible"
        blueScore.innerText = blue
    }, 50)
}

function winO () {
    red++;
    setTimeout (() => {
        blackBar.style.visibility = "visible"
        blackBar.style.backgroundColor = "#CF0A0A"
        victoryO.style.visibility = "visible"
        redScore.innerText = red
    }, 50)
}

function draw () {
    setTimeout (() => {
        blackBar.style.visibility = "visible"
        blackBar.style.backgroundColor = "#665A48"
        DRAW.style.visibility = "visible"
    }, 50)
}

function play() {
    x = 0;
    o = 0;
    blackBar.style.visibility = "hidden"
    DRAW.style.visibility = "hidden"
    victoryO.style.visibility = "hidden"
    victoryX.style.visibility = "hidden"
    topLeftSymbol.textContent = ""
    topMidSymbol.textContent = ""
    topRightSymbol.textContent = ""
    midLeftSymbol.textContent = ""
    midMidSymbol.textContent = ""
    midRightSymbol.textContent = ""
    bottomLeftSymbol.textContent = ""
    bottomMidSymbol.textContent = ""
    bottomRightSymbol.textContent = ""
    TL = undefined
    TM = undefined
    TR = undefined
    ML = undefined
    MM = undefined
    MR = undefined
    BL = undefined
    BM = undefined
    BR = undefined
}
