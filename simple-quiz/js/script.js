function _formQuestions(question, quesEle, quesIndex) {
    question.incorrect_answers.push(question.correct_answer);
    question.incorrect_answers.forEach(function(data, index) {
        document.querySelector('.quiz-questions').appendChild(quesEle);
        let breakEle = document.createElement('br');
        quesEle.appendChild(breakEle);
        let element = document.createElement('input');
        element.setAttribute('type', 'radio');
        element.setAttribute('value', data);
        element.setAttribute('name', `answer-${quesIndex}`);
        quesEle.appendChild(element);
        let label = document.createElement('label');
        label.setAttribute('for', data);
        label.textContent = data;
        quesEle.appendChild(label);
    })
}
function _fetchQuizData() {
    try {
        fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
            .then(function(data) {
                try {
                    data.json().then(function(response) {
                        if(response?.results && response?.results.length) {
                            response.results.forEach((data, index) => {
                                let element = document.createElement('div');
                                element.setAttribute('id', `question-${index + 1}`);
                                element.setAttribute('class', 'question');
                                element.innerHTML = `${index+1}. ${data.question}`;
                                _formQuestions(data, element, index);
                            });
                        }
                    })
                } catch(err) {
                    throw err;
                }
            });
    } catch(err) {
        console.log('Something went wrong from Triviya API');
    }
}

_fetchQuizData();
