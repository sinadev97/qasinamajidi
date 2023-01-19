import { useAllQuestions } from "../../api/questions.api";
import QuestionCard from "./QuestionCard";

const Home = () => {
  const { data: questions, isLoading } = useAllQuestions();

  return (
    <div className="py-8 px-14 flex flex-col gap-y-5">
      {isLoading && <div className="text-5xl">loading...</div>}
      {questions?.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Home;
