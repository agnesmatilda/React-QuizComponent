import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {
    render() {
        return <div><div className="QuizQuestion">QuizData.quiz_questions.instruction_text</div></div>;
    }
    constructor(props) {
        super();
        this.state = { quiz_position: 1};
    }
}

export default Quiz;