import { useParams } from "react-router";
import { useFetchQuestionItem } from "../api/questions.api";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import QuestionDetails from "../components/QuestionDetails";
import NotFound from "./NotFound";

const QuestionDetailsPage = () => {
  const { qId } = useParams<{ qId: string }>();

  const { data: question, isLoading } = useFetchQuestionItem({ qId: +qId! });

  if (isLoading) return <Loader />;

  if (!question) return <NotFound />;

  return (
    <Layout title="جزییات سوال">
      <QuestionDetails question={question} />
    </Layout>
  );
};

export default QuestionDetailsPage;
