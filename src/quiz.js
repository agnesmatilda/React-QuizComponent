import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {
    render() {
        return <div><Quiz className="QuizQuestion">QuizData.quiz_questions.instruction_text</Quiz></div>;
    }
    constructor(props) {
        super();
        this.state = { quiz_position: 1};
    }
}

export default Quiz;