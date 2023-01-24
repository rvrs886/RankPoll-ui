function generatePoll(queryURL, tagId) {
    hasAlreadyVoted('ad502f2c-37b6-4e3a-a4fd-062d63fd9a00', queryURL, tagId);
}

function getPollFromApi(queryURL, tagId) {
    return $.ajax({
        url: queryURL,
        type: "GET",
        dataType: "json",
        error: function (error) {
            console.debug(error);
        },
        success: function (response) {
            return createVotingForm(response, tagId);
        }
    })
}

function createVotingForm(response, tagId) {
    var stringJSON = JSON.stringify(response);
    var parsedJSON = JSON.parse(stringJSON);

    var element = document.getElementById(tagId);

    var title = parsedJSON['title'];
    var answers = parsedJSON['answers'];

    var titleElement = document.createElement("p");
    var titleContent = document.createTextNode(title);

    titleElement.appendChild(titleContent);

    var formElement = document.createElement("form");

    for (i in answers) {
        var br = document.createElement("br");
        var answer = document.createElement("input");
        answer.setAttribute("type", "radio");
        answer.setAttribute("name", "answer");
        answer.setAttribute("value", answers[i])
        answer.setAttribute("id", answers[i]);
        var label = document.createElement("label");
        label.setAttribute("for", answers[i]);
        var labelContent = document.createTextNode(answers[i]);
        label.appendChild(labelContent);
        formElement.appendChild(answer);
        formElement.appendChild(label);
        formElement.appendChild(br);
    }

    var br = document.createElement("br");
    var submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    submitButton.setAttribute("id", "submitForm");
    formElement.appendChild(br);
    formElement.appendChild(submitButton);

    element.appendChild(titleElement);
    element.appendChild(formElement);

    var innerElement = element.innerHTML;

    $('#' + tagId).replaceWith(innerElement);

    $('#submitForm').on('click', function() {
        var answer = $("input[type='radio']:checked").val();
        submitVote('ad502f2c-37b6-4e3a-a4fd-062d63fd9a00', answer);
    })
}

function submitVote(pollId, answer) {
    return $.ajax({
        url: 'http://localhost:8080/api/polls/external/submit',
        type: "POST",
        data: {"pollId": "ad502f2c-37b6-4e3a-a4fd-062d63fd9a00", "submittedAnswers": [answer]},
        contentType: "application/json",
        error: function (error) {
            console.debug(error);
        },
        success: function (response) {
            alert();
        }
    })
}

function crateSummaryForm() {

}

function createClosedForm() {

}

function hasAlreadyVoted(pollId, queryURL, tagId) {
    return $.ajax({
        url: 'http://localhost:8080/api/polls/external/submit/ad502f2c-37b6-4e3a-a4fd-062d63fd9a00/isSubmitted',
        type: "GET",
        dataType: "json",
        error: function (error) {
            console.debug(error);
        },
        success: function (response) {
            if (response == false) {
                return getPollFromApi(queryURL, tagId);
            } else {
                console.log(response);
            }
        }
    })
}