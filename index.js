const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
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
    question: 'What is the value of 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '15', correct: false },
      { text: '20', correct: false }
    ]
  },
  {
    question: 'Who is the best coder?',
    answers: [
      { text: 'vaibhav', correct: true },
      { text: 'Media', correct: false },
      { text: 'Dev', correct: false },
      { text: 'Fun Function', correct: false}
    ]
  },
  {
    question: 'HTML stands for?',
    answers: [
      { text: 'HyperText Markuping Language', correct: false },
      { text: 'HyperText Markup Language', correct: true },
      { text: 'HyperTest Markup Language', correct: false },
      { text: 'HyperText to Markup ', correct: false }
    ]
  },
  {
    question: 'What does stands for CSS?',
    answers: [
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Cascade Styling Seats', correct: false },
      { text: 'Cascade Style Seats', correct: false },
      { text: 'Cascode Style Seats', correct: false }
    ]
  },
  {
    question: 'PHP stands for?',
    answers: [
      { text: 'PHP: Hyper Preprocessor', correct: false },
      { text: 'PHP: Hypertext Preprocessing', correct: false },
      { text: 'PHP: Hypertext Preprocessor', correct: true },
      { text: 'Hypertest Preprocessor', correct: false }
    ]
  },
  {
    question: 'What is bootstrap?',
    answers: [
      { text: 'Hyper Preprocessor', correct: false },
      { text: ' Preprocessing', correct: false },
      { text: 'Framework', correct: true },
      { text: 'Hypertest Preprocessor', correct: false }
    ]
  },
  {
    question: 'Bootstrap Initial release date ?',
    answers: [
      { text: '19 August 2013', correct: false },
      { text: ' 10 August 2017', correct: false },
      { text: '15 August 2018', correct: false },
      { text: '19 August 2011', correct: true }
    ]
  },
  {
    question: 'Javascript Initial release date ?',
    answers: [
      { text: 'December 4, 1995', correct: true },
      { text: ' ECMAScript 2021 / June 2010', correct: false },
      { text: 'ECMAScript 2021 / June 2006', correct: false },
      { text: 'ECMAScript 2021 / June 2021', correct: false }
    ]
  },
  {
    question: 'C Programming Initial release date ?',
    answers: [
      { text: '1970', correct: false },
      { text: ' 10 june 2017', correct: false },
      { text: '15 August 2000', correct: false },
      { text: '1972', correct: true }
    ]
  },


]