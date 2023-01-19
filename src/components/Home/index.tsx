import { useFetchAllQuestions } from "../../api/questions.api";
import Loader from "../Loader";
import QuestionCard from "./QuestionCard";

const Home = () => {
  const { data: questions, isLoading } = useFetchAllQuestions();

  return (
    <div className="py-8 px-14 flex flex-col gap-y-5">
      {isLoading && <Loader />}
      {questions
        ?.slice(0)
        .reverse()
        .map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
    </div>
  );
};

export default Home;
