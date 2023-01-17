import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionDetailsPage from "./pages/QuestionDetailsPage";
import routes from "./routes/routes";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.details(":qId")} element={<QuestionDetailsPage />} />
    </Routes>
  );
}

export default App;
