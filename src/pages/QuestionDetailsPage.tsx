import { useParams } from "react-router";
import Layout from "../components/Layout";
import QuestionDetails from "../components/QuestionDetails";

const QuestionDetailsPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <Layout title="جزییات سوال">
      <QuestionDetails />
    </Layout>
  );
};

export default QuestionDetailsPage;
