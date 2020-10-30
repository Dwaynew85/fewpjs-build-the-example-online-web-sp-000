// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal')
modalHide()
let likeSpan;
let likes = document.querySelectorAll('.like')
for(const like of likes) {
    like.addEventListener('click', function(e) {
      mimicServerCall()
      .then(function(response) {
        likeSpan = e.path[0].firstElementChild.innerHTML
        setHeart(likeSpan)
      })
      .catch((error) => {
        setError(error);
      });
    });
  }

function setError(error){
  modalShow()
  modal.firstElementChild.innerHTML = error
  setTimeout(function() {
    modalHide()
  }, 5000);
}

function modalHide() {
  modal.setAttribute('class', 'hidden')
}

function modalShow() {
  modal.removeAttribute('class')
}

function setHeart(likeSpan) {
  if ( likeSpan === EMPTY_HEART ) {
    likeSpan = FULL_HEART;
  }else {
    console.log('full heart');
  }
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
