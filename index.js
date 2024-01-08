const heartColors = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🩷", "🩵"]
const palletteOne = ["❤️", "🧡", "💛", "💚"]
const palletteTwo = ["💙", "💜", "🩷", "🩵"]
const palletteThree = ["💙","🩵","💚","💛"]

let heartGen = document.getElementById("hearts")
let generateBtnEl = document.getElementById("generate-btn")
let generateAltOneBtnEl = document.getElementById("generateOne-btn")
let generateAltTwoBtnEl = document.getElementById("generateTwo-btn")
let generateAltThreeBtnEl = document.getElementById("generateThree-btn")
let copyBtn = document.getElementById("copy-btn")


generateBtnEl.addEventListener("click", function(){
    
    let heartArray = []
    
    for (let i = 0; i < 132; i++) {
        heartArray.push(heartColors[Math.floor(Math.random()*heartColors.length)])
        
    }
    heartGen.textContent = heartArray.join("")
    copyBtn.textContent = "Copy"
})

generateAltOneBtnEl.addEventListener("click", function(){
    
    let heartArray = []
    
    for(let i =0; i < 132; i++) {
        heartArray.push(palletteOne[Math.floor(Math.random()*palletteOne.length)])
    }
    heartGen.textContent = heartArray.join("")
    copyBtn.textContent = "Copy"
    
})

generateAltTwoBtnEl.addEventListener("click", function(){
    
    let heartArray = []
    
    for(let i =0; i < 132; i++) {
        heartArray.push(palletteTwo[Math.floor(Math.random()*palletteTwo.length)])
    }
    heartGen.textContent = heartArray.join("")
    copyBtn.textContent = "Copy"
    
})

generateAltThreeBtnEl.addEventListener("click", function(){
    
    let heartArray = []
    
    for(let i =0; i < 132; i++) {
        heartArray.push(palletteThree[Math.floor(Math.random()*palletteThree.length)])
    }
    heartGen.textContent = heartArray.join("")
    copyBtn.textContent = "Copy"
    
})



copyBtn.addEventListener("click", function(){
    
    let copyText = heartGen
    let range = document.createRange()
    range.selectNode(copyText)
    window.getSelection().addRange(range)
    document.execCommand("copy")
    
    copyBtn.textContent = "Copied"
    
})
