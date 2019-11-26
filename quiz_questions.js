var userInitial = "";

var userScore = 0;

var quiz_questions = [
    {
        "question": "What is the first greek letter?",
        "answer": "Alpha",
        "options": ["Omicron", "Alpha", "Gamma", "Beta"]
    },
    {
        "question": "What does the fox say?",
        "answer": "Nothing",
        "options": ["Moo", "Bork", "Miau", "Nothing"]
    }
];

console.log(quiz_questions.question);

function onOptionSelect(question, answer) {
    if(question == quiz_questions[0].question) {
        if (answer != quiz_questions[0].answer) {
            // Reduce quiz score here
            // Reduce timer here
        }
    }
};

