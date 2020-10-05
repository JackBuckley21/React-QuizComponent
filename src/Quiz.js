import React, { component } from "react";

let quizData = require("./quiz_data.json");

class Quiz extends component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
  render() {
    <div>
      <div className="QuizQuestion">
        <quiz_questions />
      </div>
    </div>;
  }
}

export default Quiz;
