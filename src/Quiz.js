import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
        //this.props.quiz_questions
    }
    render() {
        return (
            <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.stat.quiz_position- 1]}/>
            </div>
        )
    }
}

export default Quiz