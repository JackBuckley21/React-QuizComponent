import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";
class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(buttonText) {
    buttonText === this.props.quiz_question.answer
      ? this.props.showNextQuestionHandler()
      : "";
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton
              button_text={this.props.quiz_question.answer_options[0]}
            />
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => (
                <div>
                  <QuizQuestionButton
                    clickHandler={this.handleClick.bind(this)}
                    key={index}
                    button_text={answer_option}
                  />
                </div>
              )
            )}
          </ul>
        </section>
      </main>
    );
  }
}
export default QuizQuestion;