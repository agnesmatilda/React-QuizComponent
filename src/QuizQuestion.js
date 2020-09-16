import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    render() {
        let index;
        return (
            <main>
        <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options[index].map((t, k) => <QuizQuestionButton button_text={this.props.quiz_question.answer_options[index]} />)}      
                </ul>
        </section>
      </main>)
    }
}
export default QuizQuestion