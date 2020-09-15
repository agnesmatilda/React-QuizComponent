import React, { Component } from 'react'

class QuizQuestion extends Component {
    render() {
        return (
            <main>
        <section>
          <p>// instruction text goes here</p>
        </section>
        <section className="buttons">
                <ul>
                        <li>this.props.quiz_questions</li>
          </ul>
        </section>
      </main>)
    }
}
export default QuizQuestion