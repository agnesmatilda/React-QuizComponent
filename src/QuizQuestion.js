import React, { Component } from 'react'

class QuizQuestion extends Component {
    render() {
        return (
            <main>
        <section>
                    <p>Quiz.props.instruction_text</p>
        </section>
        <section className="buttons">
                <ul>
                        <li>this.props.quiz_question</li>
          </ul>
        </section>
      </main>)
    }
}
export default QuizQuestion