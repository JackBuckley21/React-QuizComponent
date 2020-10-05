import React, { Component } from "react";
import Quiz from "./Quiz";

class QuizQuestion extends Component() {
  render() {
    <main>
      <section>
        <p>// instruction text goes here</p>
      </section>
      <section className="buttons">
        <ul>
          <li>{this.props.quiz_question.answer_options[0]}</li>
        </ul>
      </section>
    </main>;
  }
}

export default QuizQuestion;
