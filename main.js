const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'.toUpperCase();
let lettersArray = Array.from(letters);
const lettersContainer = document.querySelector('.letters');

// Generate

lettersArray.forEach((letter) => {
  let span = document.createElement('span');
  let spanContent = document.createTextNode(letter);
  span.append(spanContent);
  span.classList.add('letter-box');
  lettersContainer.append(span);
});

const words = {
  programming: ['Php', 'JavaScript', 'Go', 'Java', 'mysql'],
  cars: ['Supra', 'Rx7', 'dodge', 'Mustang'],
  'animes characters': ['Luffy', 'Naruto', 'Levi', 'Chrollo'],
  sports: ['Mike Tyson', 'Ali Klay', 'lee'],
  contries: ['Morocco', 'Japan', 'France', 'England'],
};

let allKeys = Object.keys(words);
let randomCate = Math.floor(Math.random(allKeys) * allKeys.length);

let theCate = allKeys[randomCate];
document.querySelector('.category span').innerHTML = theCate;

let theCateArr = words[allKeys[randomCate]];
let randomWord = Math.floor(
  Math.random(allKeys[randomCate]) * theCateArr.length
);
let theWord = theCateArr[randomWord];

const letterGuess = document.querySelector('.letters-guess');
let wordLetters = Array.from(theWord.toUpperCase());
wordLetters.forEach((letter) => {
  let span = document.createElement('span');

  if (letter === ' ') {
    span.classList.add('space');
  }
  letterGuess.append(span);
});

let guessSpans = document.querySelectorAll('.letters-guess span');
let theDraw = document.querySelectorAll(
  '.hangman-draw .the-draw div:not(.the-man)'
);
theDraw.forEach((ele) => {
  ele.style.opacity = '0';
});
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('letter-box')) {
    if (e.target.classList.contains('cliked')) {
      return 1;
    } else {
      e.target.classList.add('cliked');
      let status = wordLetters.includes(e.target.textContent);

      if (status) {
        // true letter
        wordLetters.forEach((letter, ind) => {
          if (e.target.textContent == letter) {
            guessSpans[ind].innerText = letter;
            guessSpans[ind].classList.add('chosen');
            setTimeout(() => {
              win();
            }, 00);
          }
        });
      } else {
        // false letter
        for (let i = 0; i < theDraw.length; i++) {
          if (theDraw[i].style.opacity == 0) {
            theDraw[i].style.opacity = 1;
            setTimeout(() => {
              lose();
            }, 0);
            break;
          }
        }
      }
    }
  }
});

function lose() {
  if (theDraw[theDraw.length - 1].style.opacity == 1) {
    // change this 
    alert(`GAME  OVER THE WORD IS ${theWord.toLocaleUpperCase()}`);
    window.location.reload();
  }
}
function win() {
  let chosens = document.querySelectorAll('.chosen');
  if (chosens.length === theWord.length) {
    alert('congratulations for winning'.toLocaleUpperCase());
    window.location.reload();
  }
}
