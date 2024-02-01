let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// quiz //
document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");

  const correctAnswers = ["Ja", "Nee", "Ja", "Ja", "Nee", "Nee", "Ja", "Nee"];

  submitButton.addEventListener("click", calculateScore);

  function calculateScore() {
      let score = 0;
      for (let i = 1; i <= 8; i++) {
          const answer = document.querySelector(`input[name="q${i}"]:checked`);
          if (answer) {
              if (answer.value === correctAnswers[i - 1]) {
                  score++;
              }
          }
      }
      resultContainer.textContent = `Je score is: ${score} / 8`;
  }
});

// countdown //
document.addEventListener("DOMContentLoaded", function () {
  const countdownContainer = document.getElementById("countdown-container");
  const timeElement = document.getElementById("time");
  const greetingElement = document.getElementById("greeting");

  function updateCountdown() {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      let targetHour, greeting;

      if (currentHour >= 6 && currentHour < 13) {
          targetHour = 13;
          greeting = "Goedemorgen";
      } else if (currentHour >= 13 && currentHour < 18) {
          targetHour = 18;
          greeting = "Goedemiddag";
      } else {
          targetHour = 6;
          greeting = "Goedenavond";
      }

      const targetDate = new Date();
      targetDate.setHours(targetHour, 0, 0, 0);

      const timeDiff = targetDate - currentDate;
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      timeElement.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
      greetingElement.textContent = greeting;
  }

  setInterval(updateCountdown, 1000);
});
