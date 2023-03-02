const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.querySelectorAll(".title").forEach((element) => {
  element.onmouseover = e => {  
    let interval = null;
    
    let intervalCount = 0

    clearInterval(interval)

    interval = setInterval(() => {
      e.target.innerText = e.target.innerText.split("")
      .map((letter, index) => {
        if(index < intervalCount) {
          return e.target.dataset.text[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("")    

      if(intervalCount >= e.target.dataset.text.length){
        clearInterval(interval)      
      }     
      intervalCount += 1 / 2
    }, 30)
  }
})
