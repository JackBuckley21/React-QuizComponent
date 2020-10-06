import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="QuizQuestion">
          {quizData.quiz_questions[0].instruction_text}
          <QuizQuestion
            quiz_questions={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
