import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./HomePage";
import AnotherPage from "./AnotherPage";

function App() {
  // When we want to serve the react app from a subdir like /app (e.g. mydomain.tld/app)
  // we need to tell the react router to prepend this dir to all links (e.g. /another-page => /app/another-page).
  // In the Router component we use the prop "basename" for that.
  // Please also make sure to check out package.json as we need to set a property called "homepage"
  // to the same value. You can use a full URL (http://mydomain.tld/app) or just the path of the subdir (/app).
  return (
    <Router basename="/app">
      <Routes>
        <Route path="/another-page" element={<AnotherPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
