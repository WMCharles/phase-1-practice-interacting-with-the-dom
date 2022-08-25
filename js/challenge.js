const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.querySelector('.likes');
const commentForm = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const commentList = document.getElementById("list")


function incrementTimer() {
  counter.innerText++;
}

function decrementTimer() {
  --counter.innerText;
}

function pauseResume(e) {
  if (e.target.innerText === 'pause') {
    clearInterval(timer);
    e.target.innerText = 'resume';
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
  } else {
    timer = setInterval(incrementTimer, 1000);
    e.target.innerText = 'pause';
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
  }
}

function appendLikes() {
  const findLi = document.querySelector(`li[data-num="${counter.innerText}"]`)
  if (!findLi) {
    const list = document.createElement('li');
    list.dataset.num = counter.innerText;
    list.innerHTML = `${counter.innerText} has been liked <span>1</span> times`
    likes.append(list);
  } else {
    ++findLi.children[0].innerText;
  }
}

let timer = setInterval(incrementTimer, 1000);

plus.addEventListener('click', incrementTimer);

minus.addEventListener('click', decrementTimer);

pause.addEventListener('click', (e) => {
  pauseResume(e);
});

heart.addEventListener('click', appendLikes);

commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const p = document.createElement('p')
    p.style.margin = '10px 0';
    p.style.padding = '5px';
    p.style.border = '1px solid #999';
    p.style.width = '200px'
    p.innerText = commentInput.value
    commentList.appendChild(p)
    e.target.reset()
})