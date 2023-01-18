const routes = {
  home: "/",
  questions: "/questions",
  questionDetails: (qId: number | ":qId") => `/questions/${qId}`,
};

export default routes;
