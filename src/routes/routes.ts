const routes = {
  home: "/",
  details: (qId: number | ":qId") => `/details/${qId}`,
};

export default routes;
