import { QBOOLEAN } from "../../redux/types";
import BooleanQuiz, { BooleanQuizPropsTypes } from "../boolean-quiz";

interface IQuizPropsForBoolean {
  type: typeof QBOOLEAN;
  rest: BooleanQuizPropsTypes;
}

type QuizProps = IQuizPropsForBoolean;

function Quiz(props: QuizProps) {
  const { type, rest } = props;

  switch (props.type) {
    case QBOOLEAN: {
      return <BooleanQuiz {...rest} />;
    }
    default: {
      console.warn(
        `Quiz component expects type prop to be in [${QBOOLEAN}], but got ${type}`
      );
      return null;
    }
  }
}

export default Quiz;
