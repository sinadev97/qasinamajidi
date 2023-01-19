import { useParams } from "react-router";
import { useFetchQuestionItem } from "../api/questions.api";
import Layout from "../components/Layout";
import QuestionDetails from "../components/QuestionDetails";
import NotFound from "./NotFound";

const QuestionDetailsPage = () => {
  const { qId } = useParams<{ qId: string }>();

  const { data: question, isLoading } = useFetchQuestionItem({ qId: +qId! });

  if (isLoading) return <div className="text-5xl">...Loading</div>;

  if (!question) return <NotFound />;

  return (
    <Layout title="جزییات سوال">
      <QuestionDetails question={question} />
      <></>
    </Layout>
  );
};

export default QuestionDetailsPage;
