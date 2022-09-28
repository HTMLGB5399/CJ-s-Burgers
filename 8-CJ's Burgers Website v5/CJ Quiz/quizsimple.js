// pre quiz state and setting constants  

document.querySelector('.quizBody').style.display = "none"
document.getElementById('resultsPage').style.display = "none"

const questionElement = document.getElementById('question')
const buttonsElement = document.getElementsByClassName('answer')
const answerOptions1 = document.getElementById('answer1')
const answerOptions2 = document.getElementById('answer2')
const answerOptions3 = document.getElementById('answer3')
const answerOptions4 = document.getElementById('answer4')

// button to begin quiz 

function beginQuiz() {
    document.getElementById('startPage').style.display = "none"
    document.querySelector('.quizBody').style.display = "block"

}

document.getElementById('startQuiz').addEventListener("click", beginQuiz)

// setting quiz text 

questionElement.innerHTML = "Your dream vacation is..."
answerOptions1.innerHTML = "Relaxing on the beach somewhere hot."
answerOptions2.innerHTML = "Hiking in the mountains."
answerOptions3.innerHTML = "Visiting a city I've never been to before and living like a local."
answerOptions4.innerHTML = "All of the above, please!"

// results constants 

const resultsBox = document.getElementById('resultsPage')
const resultsImgs = document.getElementById('resultsImgs')
const resultName = document.getElementById('resultTitle')
const resultText = document.getElementById('resultExplain')

// result 1 

function getClassicResult(){
    document.querySelector('.quiz').style.display = "none"
    resultsBox.style.display = "block"

    document.getElementById('resultImg2').style.display = "none"
    document.getElementById('resultImg3').style.display = "none"
    document.getElementById('resultImg4').style.display = "none"

    resultName.innerHTML = "The Classic Veggie Mayo"
    resultText.innerHTML = "Just like relaxing by a beach, the Classic Veggie Mayo is tried and true, simple yet refined, and a classic option to give your tastebuds the perfect vacation."
}

answerOptions1.addEventListener("click", getClassicResult)

// result 2

function getGreenResult(){
    document.querySelector('.quiz').style.display = "none"
    resultsBox.style.display = "block"

    document.getElementById('resultImg1').style.display = "none"
    document.getElementById('resultImg3').style.display = "none"
    document.getElementById('resultImg4').style.display = "none"

    resultName.innerHTML = "The Leaning Tower of Veggie"
    resultText.innerHTML = "You love the great outdoors, so this burger is perfect for you: it's got lots of fresh veggies to transport your tastebuds into nature and, what's more, it's 100% vegan so it's contributing towards a healthier planet."
}

answerOptions2.addEventListener("click", getGreenResult)

// result 3

function getFunkyResult(){
    document.querySelector('.quiz').style.display = "none"
    resultsBox.style.display = "block"

    document.getElementById('resultImg2').style.display = "none"
    document.getElementById('resultImg1').style.display = "none"
    document.getElementById('resultImg4').style.display = "none"

    resultName.innerHTML = "The Pizza Burger Double"
    resultText.innerHTML = "You've never tasted something like this before - new even to CJ's, the Pizza Burger Double will give your adventurous tastebuds the experience of something new they crave."
}

answerOptions3.addEventListener("click", getFunkyResult)

// result 4

function getFullResult(){
    document.querySelector('.quiz').style.display = "none"
    resultsBox.style.display = "block"

    document.getElementById('resultImg2').style.display = "none"
    document.getElementById('resultImg3').style.display = "none"
    document.getElementById('resultImg1').style.display = "none"

    resultName.innerHTML = "The Double Trouble Cheese Burger"
    resultText.innerHTML = "Why stop at one burger when you can have two? You live life to the fullest, and this burger will take your tastebuds on a vacation that includes both the classic and the decadent."
}

answerOptions4.addEventListener("click", getFullResult)