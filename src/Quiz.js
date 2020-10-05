import React, { Component } from "react";
import QuizQuestions from "./QuizQuestion.js";
import QuizQuestion from "./QuizQuestion.js";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
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
