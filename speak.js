 function speak(text){
                let utternance = new SpeechSynthesisUtterance(text)
                console.log('speaking',text)
                speechSynthesis.speak(utternance)
                console.log('done');
                
             }
