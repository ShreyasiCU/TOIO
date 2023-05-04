const startButton = document.getElementById('start-btn')
const restartButton = document.getElementById('restart-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

var correctAnswer;
var hasGameStarted = false;

startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  restartButton.classList.add('hide')
  // questionContainerElement.classList.add('hide')
  hasGameStarted = true;
  setNextQuestion()
}

function setNextQuestion() {
  resetState()

  if (currentQuestionIndex < 10)
    showQuestion(shuffledQuestions[currentQuestionIndex])
  else {
    questionContainerElement.classList.add('hide');
    restartButton.classList.remove('hide')
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      correctAnswer = answer.ans 
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
    {
      question: 'What is 1001 + 1111?',
      answers: [
        { text: '1112', correct: true, ans: 'A'},
        { text: '1113 ', correct: false, ans: 'B'},
        { text: '1121 ', correct: false, ans: 'C'},
        { text: '1113 ', correct: false, ans: 'D'}
      ]
    },
    {
      question: 'Which fish can blink with both eyes?',
      answers: [
        { text: 'Cat fish', correct: false, ans: 'A'},
        { text: 'Tiger whale', correct: false, ans: 'B'},
        { text: 'Shark', correct: true, ans: 'C'},
        { text: 'Seahorses', correct: false, ans: 'D'}
      ]
    },
    {
      question: 'Which animal urine glows under a black light?',
      answers: [
        { text: 'Elephant', correct: false, ans: 'A'},
        { text: 'Cat', correct: true, ans: 'B'},
        { text: 'Hyena', correct: false, ans: 'C'},
        { text: 'Kangaroo', correct: false, ans: 'D'}
      ]
    },
    {
      question: 'Which country drinks the most coffee per capita?',
      answers: [
        { text: 'USA', correct: false, ans: 'A'},
        { text: 'Finland', correct: true, ans: 'B'},
        { text: 'Cuba', correct: false, ans: 'C'},
        { text: 'South Africa', correct: false, ans: 'D'},
      ]
    },
    {
      question: 'How many total states are in the USA?',
      answers: [
        { text: '50', correct: false, ans: 'A'},
        { text: '51', correct: false, ans: 'B'},
        { text: '52', correct: true, ans: 'C'},
        { text: '55', correct: false, ans: 'D'}
      ]
    },
    {
      question: 'How many days can humans live without water?',
      answers: [
        { text: '3 days', correct: false, ans: 'A'},
        { text: '30 days', correct: false, ans: 'B'},
        { text: '10 days', correct: true, ans: 'C'},
        { text: '2 weeks', correct: false, ans: 'D'}
      ]
    },
    {
      question: 'Which river flows through the Grand Canyon?',
      answers: [
        { text: 'Salt river', correct: false, ans: 'A'},
        { text: 'Green river', correct: false, ans: 'B'},
        { text: 'Colorado river', correct: true, ans: 'C'},
        { text: 'Arkansas river', correct: false, ans: 'D'}
      ]
    },
    {
      question: 'What is the name of the biggest technology company in South Korea?',
      answers: [
        { text: 'Toshiba', correct: false, ans: 'A'},
        { text: 'Hyundai Motors', correct: false, ans: 'B'},
        { text: 'Samsung', correct: true, ans: 'C'},
        { text: 'Kia Motors', correct: false, ans: 'D'}
      ]
    },
    {
      question: 'Which country consumes the most chocolate per capita?',
      answers: [
        { text: 'USA', correct: false, ans: 'A'},
        { text: 'Finland', correct: false, ans: 'B'},
        { text: 'Switzerland', correct: true, ans: 'C'},
        { text: 'Netherlands', correct: false, ans: 'D'}
      ]
    },
    {
      question: 'What is the most consumed manufactured drink in the world?',
      answers: [
        { text: 'Coors Beer', correct: false, ans: 'A'},
        { text: 'Coffee', correct: false, ans: 'B'},
        { text: 'Tea', correct: true, ans: 'C'},
        { text: 'Cappuccino', correct: false, ans: 'D'}
      ]
    },
    // {
    //   question: 'Thanks !',
      
    // },
  ]