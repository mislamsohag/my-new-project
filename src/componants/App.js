import "../styles/App.css"
import Layout from "./Layout";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Result from './pages/Result';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <Signup />
        <Login />
        <Quiz />
        <Result />
      </Layout>

      {/* <Router>
        <Layout>
          <Switch>
            <Route exsact path="/" componant={Home} />
            <Route exsact path="/home" componant={Home} />
            <Route exsact path="/signup" componant={Signup} />
            <Route exsact path="/login" componant={Login} />
            <Route exsact path="/quiz" componant={Quiz} />
            <Route exsact path="/result" componant={Result} />
          </Switch>
          <Home />
        </Layout>
      </Router> */}
    </div>
  );
}

export default App;
