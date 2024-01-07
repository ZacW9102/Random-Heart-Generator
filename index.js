const heartColors = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🩷", "🩵"]

let heartGen = document.getElementById("hearts")
let generateBtnEl = document.getElementById("generate-btn")
let copyBtn = document.getElementById("copy-btn")

generateBtnEl.addEventListener("click", function(){
    
    let heartArray = []
    
    for (let i = 0; i < 120; i++) {
        heartArray.push(heartColors[Math.floor(Math.random()*heartColors.length)])
        
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
