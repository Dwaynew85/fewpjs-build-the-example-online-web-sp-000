// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal')
modal.hidden = true

let likes = document.querySelectorAll('.like')
for(const like of likes) {
    like.addEventListener('click', function(e) {
      mimicServerCall().catch((error) => {
        if (error) {
          setError(error)
        } else if (!error) {
          console.log(e)
        } 
      });
    });
}

function setError(error){
  modal.hidden = false
  modal.firstElementChild.innerHTML = error
  setTimeout(function() {
    modal.hidden = true
  }, 5000);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
