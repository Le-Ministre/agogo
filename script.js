const btn = document.querySelectorAll('.btn');
const input = document.getElementById('input');
const heurecompte = document.querySelector('.heure')
const minutecompte = document.querySelector('.minute')
const secondecompte = document.querySelector('.seconde')
const texte = document.querySelector('.texte')


let countdown;
let timer;

function startcountdown(timeIsMony, inMinute) {
  if (inMinute) {
    timeIsMony *= 60
  }

  heurecompte.style.display = 'block';
  minutecompte.style.display = 'block';
  secondecompte.style.display = 'block';
  texte.style.display = 'block'


  const newDate = new Date();
  const newDates = new Date(newDate.getTime() + timeIsMony * 1000);
  myFunction(newDates);

  countdown = timeIsMony;
  updateCountdown();
  clearInterval(timer)
  timer = setInterval(() => {
    countdown--;
    if (countdown < 0) {
      clearInterval(timer)
      heurecompte.style.display = 'none';
      minutecompte.style.display = 'none';
      secondecompte.style.display = 'none';
      texte.style.display = 'none'
    } else {
      updateCountdown();
    }
  }, 1000);
};


function updateCountdown() {
  const heure = Math.floor(countdown / 3600)
  const minute = Math.floor((countdown % 3600) / 60)
  const seconde = countdown % 60;
  if (heure < 10) {
    heurecompte.innerHTML = `0${heure}:`
  } else {
    heurecompte.innerHTML = `${heure}:`
  }
  if (minute < 10) {
    minutecompte.innerHTML = `0${minute}:`
  } else {
    minutecompte.innerHTML = `${minute}:`
  }
  if (seconde < 10) {
    secondecompte.innerHTML = `0${seconde}`
  } else {
    secondecompte.innerHTML = `${seconde}`
  }

};




btn.forEach((button, index) => {
  button.addEventListener('click', () => {
  
    clearInterval(timer)
    let timeIsMony;
    let inMinute = true;
    switch (index) {
      case 0:
        timeIsMony = 20
        inMinute = false
        break;
      case 1:
        timeIsMony = 5
        break;
      case 2:
        timeIsMony = 15
        break;
      case 3:
        timeIsMony = 20
        break;
      case 4:
        timeIsMony = 30
        break;
    default:
        break;
    }
    startcountdown(timeIsMony, inMinute)
  })
});

input.addEventListener('keydown', (Event) =>{
  if (Event.key === 'Enter') {
    const getTimes = parseFloat(input.value)
    if (!isNaN(getTimes)) {
      startcountdown(getTimes, true)
    }
  }
  
});

function myFunction(times) {
  const updateTime = times.toLocaleTimeString();
  texte.innerHTML = `Be Back At ${updateTime}`
}




// const now = new Date().getTime();


// let interval = setInterval(function(){

// }, 1000);

// getCountdown();
// if (coundown < 0) {
//     clearInterval(interval);
// }



// function zeros(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// var fin="Done";
// var player = GetPlayer();
// var count = player.GetVar("Timer_Duree");
// var minutes, seconds, timer, totalTime;
// var counter = setInterval(timer, 1000);

// function timer() {
//     count = count - 1;
//     minutes = zeros(Math.floor(count / 60));
//     seconds = zeros(count % 60);
//     if (count == 0){
//         player.SetVar("Timer_Fin",fin);
// }
//     if (count < 0) {
//         clearInterval(counter);
//         return;
//     }
//     totalTime = minutes + ':' + seconds;
//     player.SetVar("Timer_Affichage",totalTime);
// }


// let timer;
// let ele = document.getElementById('timer');

// (function(){
//     let sec = 0;
//     timer =setInterval(()=>{
//         ele.innerHTML = '00:0'+sec;
//         sec--;
//     }, 1000)
// })()

// function pause() {
//     clearInterval(timer)
// }

// function startTimer(timeIsMony, display) {
//     var timer = timeIsMony, hours, minutes, seconds;
//     setInterval(function () {

//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);


//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = timeIsMony;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };










// var countDownDate = new Date(Date.now() + 5000).getTime();
// var x = setInterval(calculate, 1000);

// function start() {
//   countDownDate = new Date(countDownDate + 500000).getTime();
//   $("#myBtn").removeClass().addClass("btnDisable");
//   myBtn.innerHTML = "Bitte warten!";
//   window.onload = setInterval(calculate, 1000);
// }

// function calculate() {
//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate + now;

//   // Time calculations for days, hours, minutes and seconds
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("myTimer").innerHTML = hours + "h "
//     + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     $("#myBtn").removeAttr("disabled");
//     $("#myBtn").removeClass().addClass("btnEnable");
//     document.getElementById("myTimer").innerHTML = "Auf zur Raubtierfütterung!";

//     myBtn.innerHTML = "FeedTheCat!";
//     return;
//   }
// }