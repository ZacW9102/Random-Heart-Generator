const heartColors1 = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🩷", "🩵"]
const heartColors2 = ["💜","💙","🩵","🤍"]
const heartColors3 = ["❤️", "🧡", "💛", "💚"]
const heartColors4 = ["🖤","🩶","🤍","🩵"]
const heartColors5 = ["💖","💞","💗","💘"]
const heartColors6 = ["❤️‍🔥","❤️","🧡","💛"]
const closeBtn = document.getElementById("close")
const closeBtn1 = document.getElementById("close1")

const generate1 = document.getElementById("generate1")
const copy1 = document.getElementById("copy1")
const box1 = document.getElementById("box1")
const generate2 = document.getElementById("generate2")
const copy2 = document.getElementById("copy2")
const box2 = document.getElementById("box2")
const generate3 = document.getElementById("generate3")
const copy3 = document.getElementById("copy3")
const box3 = document.getElementById("box3")
const generate4 = document.getElementById("generate4")
const copy4 = document.getElementById("copy4")
const box4 = document.getElementById("box4")
const generate5 = document.getElementById("generate5")
const copy5 = document.getElementById("copy5")
const box5 = document.getElementById("box5")
const generate6 = document.getElementById("generate6")
const copy6 = document.getElementById("copy6")
const box6 = document.getElementById("box6")
const generate7 = document.getElementById("generate7")

//page1
generate1.addEventListener("click", function(){
  let heartArray = []
    
  for (let i = 0; i < 130; i++) {
      heartArray.push(heartColors1[Math.floor(Math.random()*heartColors1.length)])
      
  }
  box1.textContent = heartArray.join("")
  copy1.textContent = "COPY"
})

copy1.addEventListener("click", function(){
    
  let copyText = box1
  navigator.clipboard.writeText(copyText.innerText)

  copy1.textContent = "COPIED"
})

//page2
generate2.addEventListener("click", function(){
  let heartArray = []
    
  for (let i = 0; i < 130; i++) {
      heartArray.push(heartColors2[Math.floor(Math.random()*heartColors2.length)])
      
  }
  box2.textContent = heartArray.join("")
  copy2.textContent = "COPY"
})

copy2.addEventListener("click", function(){
    
  let copyText = box2
  navigator.clipboard.writeText(copyText.innerText)
  
  copy2.textContent = "COPIED"
})

//page3
generate3.addEventListener("click", function(){
  let heartArray = []
    
  for (let i = 0; i < 130; i++) {
      heartArray.push(heartColors3[Math.floor(Math.random()*heartColors3.length)])
      
  }
  box3.textContent = heartArray.join("")
  copy3.textContent = "COPY"
})

copy3.addEventListener("click", function(){
    
  let copyText = box3
  navigator.clipboard.writeText(copyText.innerText)
  
  copy3.textContent = "COPIED"
})

//page4
generate4.addEventListener("click", function(){
  let heartArray = []
    
  for (let i = 0; i < 130; i++) {
      heartArray.push(heartColors4[Math.floor(Math.random()*heartColors4.length)])
      
  }
  box4.textContent = heartArray.join("")
  copy4.textContent = "COPY"
})

copy4.addEventListener("click", function(){
    
  let copyText = box4
  navigator.clipboard.writeText(copyText.innerText)
  
  copy4.textContent = "COPIED"
})

//page5
generate5.addEventListener("click", function(){
  let heartArray = []
    
  for (let i = 0; i < 130; i++) {
      heartArray.push(heartColors5[Math.floor(Math.random()*heartColors5.length)])
      
  }
  box5.textContent = heartArray.join("")
  copy5.textContent = "COPY"
})

copy5.addEventListener("click", function(){
    
  let copyText = box5
  navigator.clipboard.writeText(copyText.innerText)
  
  copy5.textContent = "COPIED"
})

//page6
generate6.addEventListener("click", function(){
  let heartArray = []
    
  for (let i = 0; i < 130; i++) {
      heartArray.push(heartColors6[Math.floor(Math.random()*heartColors6.length)])
      
  }
  box6.textContent = heartArray.join("")
  copy6.textContent = "COPY"
})

copy6.addEventListener("click", function(){
    
  let copyText = box6
  navigator.clipboard.writeText(copyText.innerText)
  
  copy6.textContent = "COPIED"
})

generate7.addEventListener("click", function(){
  document.getElementById("popup").classList.remove("hidden")
})

closeBtn.addEventListener("click", function(){
  document.getElementById("popup").classList.add("hidden")
})

closeBtn1.addEventListener("click", function(){
  document.getElementById("popup1").classList.add("hidden")
})

const pages = document.querySelectorAll(".page");
    const translateAmount = 100; 
    let translate = 0;

    slide = (direction) => {

      direction === "next" ? translate -= translateAmount : translate += translateAmount;

      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }