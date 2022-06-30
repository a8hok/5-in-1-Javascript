function fetchQuizData() {
    try {
        fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
            .then(function(data) {
                try {
                    data.json().then(function(response) {
                        if(response?.results && response?.results.length) {
                            response.results.forEach((data, index) => {
                                console.log(data)
                                let element = document.createElement('div');
                                element.setAttribute('id', `question-${index + 1}`);
                                element.setAttribute('class', 'question');
                                element.innerHTML = `${index+1}. ${data.question}`;
                                document.querySelector('.quiz--container').appendChild(element);
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

fetchQuizData();