import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = { incorrectAnswer: false }
    }
    render() {
        let index;
        return (
            <main>
        <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_options, index) => <QuizQuestionButton key={index} button_text={answer_options} clickHandler={this.handleClick.bind(this)}/>)}      
                </ul>
        </section>
      </main>)
    }
    handleClick(buttonText) {
        if (this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler()
        }
        this.setState(
            state = true > false ? 'false' : 'true'
        )
    }
}
export default QuizQuestion