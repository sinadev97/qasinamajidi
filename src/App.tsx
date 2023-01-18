import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import QuestionDetailsPage from "./pages/QuestionDetailsPage";
import routes from "./routes/routes";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.questions} element={<HomePage />} />
      <Route
        path={routes.questionDetails(":qId")}
        element={<QuestionDetailsPage />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
