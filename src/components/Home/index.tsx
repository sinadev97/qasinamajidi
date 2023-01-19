import { useFetchAllQuestions } from "../../api/questions.api";
import QuestionCard from "./QuestionCard";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minutes: "numeric",
};

const Home = () => {
  const { data: questions, isLoading } = useFetchAllQuestions();

  return (
    <div className="py-8 px-14 flex flex-col gap-y-5">
      {isLoading && <div className="text-5xl">loading...</div>}
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
