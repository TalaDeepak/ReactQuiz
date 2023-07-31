import { useQuiz } from "../contexts/QuizProvider";

function NextButton() {
  const { dispatch, answer, index, numLength } = useQuiz();
  if (answer === null) return;

  if (index < numLength - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numLength - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
