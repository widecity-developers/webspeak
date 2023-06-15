    let text = document.querySelectorAll('.widy_speak')
    text.forEach(function(element){
    element.addEventListener('mouseover',()=> {
                let text = element.innerText
                console.log(text)
                let utternance = new SpeechSynthesisUtterance(text)
                speechSynthesis.speak(utternance)
                
             })
    element.addEventListener('mouseleave',()=> {
                let utternance = new SpeechSynthesisUtterance(text)
                speechSynthesis.cancel()
    
    })
    })
