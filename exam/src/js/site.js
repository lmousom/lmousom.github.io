function shuffleQuestion(array) {
  array.sort(() => Math.random() - 0.5);
}
let questions = [
  {
    id: 1,
    question: "One lakh can be expressed as ____________.",
    answer: "100 thousands",
    options: [
      "1000 thousands",
      "100 hundreds",
      "10 thousands",
      "100 thousands"
    ]
  },
  {
    id: 2,
    question: "Which of the following is true for the number 82,951?",
    answer: "2 is the face value of 2 in 82,951.",
    options: [
      "8 is the place value of 8 in 82,951.",
      "900 is the face value of 9 in 82,951.",
      "2 is the face value of 2 in 82,951.",
      "500 is the place value of 5 in 82,951"
    ]
  },
  {
    id: 3,
    question: "Which of the following is the standard form for the given expanded form? 40,000 + 6,000 + 700 + 80 + 1",
    answer: "46,781",
    options: [
      "47,187",
      "46,781",
      "64,781",
      "47,681"
    ]
  },
  
  {
    id: 4,
    question: "Which of the following can also be written as 4,50,000?",
    answer: "Forty-five ten thousands",
    options: [
      "Four thousands five hundreds",
      "Forty-five ten thousands",
      "Forty thousands",
      "Forty-five hundreds"
    ]
  },
  {
    id: 5,
    question: "Which of the following is the smallest 5-digit number?",
    answer: "10,000",
    options: [
      "11,111",
      "90,000",
      "99,999",
      "10,000"
    ]
  },
  
  {
    id: 6,
    question: "Which of the following shows the first three places from the right in a 5-digit number?",
    answer: "Ones period",
    options: [
      "Ten thousands period",
      "Thousands period",
      "Tens period",
      "Ones period"
    ]
  }
];

shuffleQuestion(questions);

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

  if (question_count == questions.length - 2) {
  document.getElementById("btn_next").innerHTML = "FINISH";
  }
   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
 

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
 

  question_count++;
  show(question_count);
}

if(points <= 0){

  points += 0;
  sessionStorage.setItem("points", points);

}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
