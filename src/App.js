import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout";
import { routes } from "./routes/RoutesConfig";
function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        {routes.map((routes)=>(
          <Route exact path={routes.path} element={routes.element} />
        ))}
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
